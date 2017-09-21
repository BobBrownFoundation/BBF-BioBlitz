import faker from 'faker';

import Team from '../app/models/team';
import Person from '../app/models/person';
import Role from '../app/models/role';
import Capability from '../app/models/capability';

import range from '../app/utils/range';

const {
  name,
  helpers: {
    randomize
  }
} = faker;

export default async function seed(trx) {
  await Promise.all(
    Array.from(range(1, 3)).map((i) =>
        Team.transacting(trx).create( { name: `Team $i` }) ) );

  await Promise.all(
    Array.from(range(1, 3)).map((i) =>
        Role.transacting(trx).create( { name: `Role $i` }) ) );

  await Promise.all(
    Array.from(range(1, 10)).map(() =>
      Person.transacting(trx)
        .create( {
          firstName: name.findName(),
          lastName: name.findName()
        })));

  await Promise.all(
    Array.from(range(1, 20)).map(() => (
      Capability.transacting(trx).create({
        capabilityId: randomize([...range(1, 3)]),
        personId: randomize([...range(1, 10)])
      })
    ))
  );
}
