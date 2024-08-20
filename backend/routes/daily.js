const express = require('express');
const router = express.Router();
const { createDaily, getAllDaily, getDailyById, deleteDailyById, updateDailyById } = require('../controllers/dailyController');

// Get all daily records
router.get('/', getAllDaily);

// Get a daily record by ID
router.get('/:id', getDailyById);

// Create a daily record
router.post('/create', createDaily);

// Delete a daily record by ID
router.delete('/delete/:id', deleteDailyById);

// Update a daily record by ID
router.patch('/update/:id', updateDailyById);

module.exports = router;
