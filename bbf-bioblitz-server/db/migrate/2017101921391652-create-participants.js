export function up(schema) {
  return schema.createTable('participants', table => {
    table.increments('id');

    table.integer('person_id')
      .index();

    table.integer('surveyslot_id')
        .index();

    table.unique(['person_id','surveyslot_id']);

    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('participants');
}
