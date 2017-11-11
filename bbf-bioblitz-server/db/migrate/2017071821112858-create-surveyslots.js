export function up(schema) {
  return schema.createTable('surveyslots', table => {
    table.increments('id');


    table.integer('survey_id')
        .index();

    table.integer('location_id')
        .index();

    table.integer('timeslot_id')
        .index();

    table.integer('number_of_participants')
        .notNullable()
        .defaultTo(0);

    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('survey_slots');
}
