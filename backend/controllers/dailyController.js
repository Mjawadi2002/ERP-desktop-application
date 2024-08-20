const Daily = require('../models/dailymodel');

const createDaily = async (req, res) => {
    try {
        const dailyData = new Daily(req.body);
        await dailyData.save();
        res.status(201).json(dailyData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllDaily = async (req, res) => {
    try {
        const data = await Daily.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getDailyById = async (req, res) => {
    try {
        const data = await Daily.findById(req.params.id);
        if (!data) return res.status(404).json({ error: 'Daily record not found' });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteDailyById = async (req, res) => {
    try {
        const data = await Daily.findByIdAndDelete(req.params.id);
        if (!data) return res.status(404).json({ error: 'Daily record not found' });
        res.status(200).json({ message: 'Daily record deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateDailyById = async (req, res) => {
    try {
        const data = await Daily.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) return res.status(404).json({ error: 'Daily record not found' });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createDaily, getAllDaily, getDailyById, deleteDailyById, updateDailyById };
