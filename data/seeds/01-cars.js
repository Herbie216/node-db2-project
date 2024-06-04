const cars = [
    {
        vin: '11111111111111',
        make: 'toyota',
        model: 'corolla',
        mileage: 210000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '11111111111112',
        make: 'toyota',
        model: 'prius',
        mileage: 100000,
        title: 'salvage',
    },
    {
        vin: '11111111111113',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
    },

]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
