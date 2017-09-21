export function up(schema) {
  return schema.createTable('capabilities', table => {
    table.increments('id');

    table.integer('person_id')
      .index();

      table.integer('capability_id')
        .index();

    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('capabilities');
}
