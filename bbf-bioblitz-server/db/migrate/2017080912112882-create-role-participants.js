export function up(schema) {
  return schema.createTable('role_participants', table => {
    table.increments('id');

    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('role_participants');
}
