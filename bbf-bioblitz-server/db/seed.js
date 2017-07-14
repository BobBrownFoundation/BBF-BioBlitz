import faker from 'faker';

import Team from '../app/models/team';

export default async function seed(trx) {
  await Promise.all(
    [
      Team.transacting(trx)
        .create( {
          name: faker.name.findName()
        })
    ]
  );
}
