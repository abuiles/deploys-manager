import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  commit: faker.random.uuid(),
  author: faker.name.findName(),
  commitMessage: faker.lorem.sentence(),
  uploadedAt: faker.date.recent(),
  active: false,
  activatedAt: null
});
