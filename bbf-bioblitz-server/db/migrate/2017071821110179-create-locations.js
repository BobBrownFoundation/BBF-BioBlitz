export function up(schema) {
  return schema.createTable('locations', table => {
    table.increments('id');

    table.string('name')
      .index()
      .defaultTo('New Location')
      .notNullable();

    table.string('description')
      .index()
      .defaultTo('New Location description')
      .notNullable();
    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('locations');
}
