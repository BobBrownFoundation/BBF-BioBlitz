import Ember from 'ember';

function parseColumnName( fieldName ) {
  let parts = fieldName.split(':');
  return parts.map( n => n.camelize() );
}

/*
  Pass an array of field names and model e.g.
    rootModel = Surveyslot, fieldChain = [ 'participants', 'person', 'name' ]
  returns an array that looks like this:
    [
      { model: Person, kind: 'value', field: 'name'},
      { model: Participant, kind: 'hasOne', field: 'person' },
      { model: Surveyslot, kind:'hasMany', field: 'participants' }
    ]
*/
function expandModelChain( rootModel, fieldChain, store ) {
  // default to name on the rootModel
  if ( fieldChain.length === 0 )
      return [{ model: rootModel, kind: 'value', field: 'name'}];

  // If no root model then treat the first part of the chain as the root
  // model name and recurse. If the root model is specified but the
  // first part as interpreted as a model matches the root then skip.
  let modelName = fieldChain[0].dasherize();
  if ( !rootModel || modelName === rootModel.modelName ) {
    fieldChain.shift();
    let expansion = expandModelChain( store.modelFor(modelName), fieldChain, store );
    expansion.slice(-1)[0].useAsKey = true;
    return expansion;
  }

  // base case
  if ( fieldChain.length === 1 )
      return [{ model: rootModel, kind: 'value', field: fieldChain[0]}];

  // construct n based on n-1
  let [ indirectField, ... restOfChain ] = fieldChain;
  let relationshipMeta =
    Ember.get( rootModel, 'relationshipsByName')
      .get( indirectField );

  if ( typeof relationshipMeta === 'undefined')
    throw new Error(`Unable to find relationship ${indirectField} in ${rootModel.modelName}`);

  let refModel =  store.modelFor( relationshipMeta.type );

  if ( typeof refModel === 'undefined')
    throw new Error(`Unable to find type for relationship ${indirectField} in ${rootModel.modelName}`);

  let expansion = expandModelChain( refModel, restOfChain, store );
  expansion.push( {model: rootModel, kind: relationshipMeta.kind,
    field: indirectField });

  return expansion;

}

export default function parseFieldMapping( root, mapping, store ) {

  return expandModelChain( root, parseColumnName( mapping ), store );
}
