import Ember from 'ember';

export default function parseFieldMapping( root, mapping, store ) {
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
  function expandModelChain( rootModel, fieldChain ) {

    if ( !rootModel ) {
      let model = store.modelFor( fieldChain[0] );
      let fieldName;
      if ( fieldChain.length === 2 )
        fieldName = fieldChain[1];
      else
        fieldName = 'name'; // default
      return [{ model: model, kind: 'value', field: fieldName }];
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

    let expansion = expandModelChain( refModel, restOfChain );
    expansion.push( {model: rootModel, kind: relationshipMeta.kind,
      field: indirectField });

    return expansion;

  }
  return expandModelChain( root, parseColumnName( mapping ) );
}
