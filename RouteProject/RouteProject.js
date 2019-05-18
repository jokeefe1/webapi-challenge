const express = require('express')
const router = express.Router()
const db = require('../data/helpers/projectModel')

//GET all projects
router.get('/', async (req, res) => {

    try {
        const allProjects = await db.get()
        res.status(200).json({ message: `Successfully retreived all projects`, allProjects })
    } catch (error) {
        res.status(500).json({ error: `There was an error retreiving all projects` })
    }
})

//GET projects by id
router.get('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const projectById = await db.get(id)
        res.status(200).json({ message: `Successfully retreived project by ${id}`, projectById })
    } catch (error) {
        res.status(500).json({ error: `There was an error retreiving project` })
    }
})

//POST project
router.post('/', async (req, res) => {
    const { body } = req

    try {
        const newproject = await db.insert(body)
        res.status(200).json({ message: `Successfully created new project`, newproject })
    } catch (error) {
        res.status(500).json({ error: `There was an error creating new project` })
    }
})

//PUT update project
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { body } = req

    try {
        const updatedProject = await db.update(id, body)
        res.status(200).json({ message: `Successfully updated project with id ${id}`, updatedProject })
    } catch (error) {
        res.status(500).json({ error: `There was an error updating project with id ${id}` })
    }
})

//REMOVE remove project
router.delete('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const removedproject = await db.remove(id)
        res.status(200).json({ message: `Successfully removed project with id ${id}`, removedproject })
    } catch (error) {
        res.status(500).json({ error: `There was an error while removing project with id $` })
    }
})

module.exports = router