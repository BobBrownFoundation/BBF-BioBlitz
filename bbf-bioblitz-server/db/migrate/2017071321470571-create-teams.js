export function up(schema) {
  return schema.createTable('teams', table => {
    table.increments('id');

    table.string('name')
      .index()
      .defaultTo('New Team')
      .notNullable();

    table.string('description')
      .index()
      .defaultTo('New Team description')
      .notNullable();

    table.timestamps();

    table.index('created_at');
    table.index('updated_at');


  });
}

export function down(schema) {
  return schema.dropTable('teams');
}
