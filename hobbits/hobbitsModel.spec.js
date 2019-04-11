const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel.js');
// reutrns 201
// insert the hobbit
describe('hobbit model', () => {
  beforeEach(async () => {
    await db('hobbits').truncate();
  });
  describe('insert()', () => {
    it('should insert the provided hobbit', async () => {
      await Hobbits.insert({ name: 'gaffer' });
      await Hobbits.insert({ name: 'aragorn' });
      await Hobbits.insert({ name: 'gandalf' });
      const hobbits = await db('hobbits');
      expect(hobbits).toHaveLength(3);
    });
  });
  describe('insert()', () => {
    it('should insert the provided hobbit', async () => {
      let hobbit = await Hobbits.insert({ name: 'gaffer' });
      expect(hobbit.name).toBe('gaffer');

      hobbit = await Hobbits.insert({ name: 'sam' });
      expect(hobbit.name).toBe('sam');
    });
  });
});
