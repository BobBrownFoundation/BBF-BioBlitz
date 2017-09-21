export function up(schema) {
  return schema.createTable('people', table => {
    table.increments('id');

    table.string('firstName')
      .index()
      .defaultTo('New')
      .notNullable();

      table.string('lastName')
        .index()
        .defaultTo('Name')
        .notNullable();

    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('participants');
}
