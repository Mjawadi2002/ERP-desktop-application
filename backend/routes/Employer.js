const express = require('express');
const router = express.Router();
const { createEmployer, getAllEmployer, getEmployerById, deleteEmployerById, updateEmployerById } = require('../controllers/employerController');

// Get all daily records
router.get('/', getAllEmployer);

// Get a daily record by ID
router.get('/:id', getEmployerById);

// Create a daily record
router.post('/create', createEmployer);

// Delete a daily record by ID
router.delete('/delete/:id', deleteEmployerById);

// Update a daily record by ID
router.patch('/update/:id',  updateEmployerById);

module.exports = router;
