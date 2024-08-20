const Employer=require('../models/employer');



const createEmployer = async (req, res) => {
    try {
        const newEmployer = new Employer(req.body);
        await newEmployer.save();
        res.status(201).json(newEmployer);
      } catch (error) {
        res.status(400).json({ error: 'Error creating employer' });
      }
};

const getAllEmployer = async (req, res) => {
    try {
        const data = await Employer.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getEmployerById = async (req, res) => {
    try {
        const data = await Employer.findById(req.params.id);
        if (!data) return res.status(404).json({ error: 'Employer record not found' });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteEmployerById = async (req, res) => {
    try {
        const data = await Employer.findByIdAndDelete(req.params.id);
        if (!data) return res.status(404).json({ error: 'Employer record not found' });
        res.status(200).json({ message: 'Employer record deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateEmployerById = async (req, res) => {
    try {
        const data = await Employer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) return res.status(404).json({ error: 'Employer record not found' });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createEmployer, getAllEmployer, getEmployerById, deleteEmployerById, updateEmployerById };
