exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('succulents')
    .truncate()
    .then(function() {
      return knex('succulents').insert([
        { name: 'Burros-tail' },
        { name: 'Echeveria elegans' },
        { name: 'Spiral aloe' },
        { name: 'Haworthia cooperi' }
      ]);
    });
};
