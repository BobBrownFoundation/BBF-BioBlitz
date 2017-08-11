export function up(schema) {
  return schema.createTable('surveys', table => {
    table.increments('id');

    table.string('name')
      .index()
      .defaultTo('New Survey')
      .notNullable();

    table.string('description')
      .index()
      .defaultTo('New Survey description')
      .notNullable();

    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('surveys');
}
