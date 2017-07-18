export function up(schema) {
  return schema.createTable('roles', table => {
    table.increments('id');

    table.string('name')
      .index()
      .defaultTo('New Role')
      .notNullable();

    table.string('description')
      .index()
      .defaultTo('New Role description')
      .notNullable();

    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('roles');
}
