const express = require('express')
const router = express.Router()
const db = require('../data/helpers/actionModel')

//GET all actions
router.get('/', async (req, res) => {

    try {
        const allActions = await db.get()
        res.status(200).json({ message: `Successfully retreived all actions`, allActions })
    } catch (error) {
        res.status(500).json({ error: `There was an error retreiving all action` })
    }
})

//GET actions by id
router.get('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const actionById = await db.get(id)
        res.status(200).json({ message: `Successfully retreived action by ${id}`, actionById })
    } catch (error) {
        res.status(500).json({ error: `There was an error retreiving action`})
    }
})

//POST action
router.post('/', async (req, res) => {
    const { body } = req

    try {
        const newAction = await db.insert(body)
        res.status(200).json({ message: `Successfully created new action`, newAction})
    } catch (error) {
        res.status(500).json({ error: `There was an error creating new action`})
    }
})

//PUT update action
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { body } = req

    try {
        const updatedAction = await db.update(id, body)
        res.status(200).json({ message: `Successfully updated action with id ${id}`, updatedAction})
    } catch (error) {
        res.status(500).json({ error: `There was an error updating action with id ${id}`})
    }
})

//REMOVE remove action
router.delete('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const removedAction = await db.remove(id)
        res.status(200).json({ message: `Successfully removed action with id ${id}`, removedAction})
    } catch (error) {
        res.status(500).json({ error: `There was an error while removing action with id $`})
    }
})

module.exports = router