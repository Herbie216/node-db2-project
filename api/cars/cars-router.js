const express = require('express')
const router = express.Router()
const Car = require('./cars-model')
const {
    checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique
} = require('./cars-middleware')

router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll()
        res.json(cars)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', checkCarId, async (req, res, next) => { // eslint-disable-line
    res.json(req.car)
})

router.post(
    '/',
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
    async (req, res, next) => {
        try {
            const car = await Car.create(req.body)
            res.json(car)
        } catch (err) {
            next(err)
        }
    })


router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = router

// Task 3: Stretch Problems
// Add seed data to the database using knex seeds
// Add [PUT] and [DELETE] operations to your API.
// Write a schema file for a sales table. 
// This table should track information on the sale of each car. 
// You may wish to research foreign keys in order 
// to link each sale to the entry in cars which sold.

//                                  add optionally

// router.put('/:id',
//     md.checkAccountId,
//     md.checkAccountPayload,
//     async (req, res, next) => {
//         try {
//             const updated = await Account.updateById(req.params.id, req.body)
//             res.json(updated)
//         } catch (err) {
//             next(err)
//         }
//     });

// router.delete('/:id', md.checkAccountId, async (req, res, next) => {
//     try {
//         await Account.deleteById(req.params.id)
//         res.json(req.account)
//     } catch (err) {
//         next(err)
//     }
// })