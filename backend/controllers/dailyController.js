const Daily=require('../models/dailymodel')
const mongoose = require('mongoose')

//get all daily 
const getAllDaily=async(req,res)=>{
    const dailies=await Daily.find().sort()
    res.status(200).send(dailies)
}

//get daily by id
const getDailyById=async(req,res)=>{
    const{id}=req.params
    const daily=await Daily.findById(id)
    if(!daily){
        return res.status(404).send('not existing')
    }
    res.status(200).send(daily)
}

//create daily
const createDaily=async (req, res) => {
    const { id, express_quantity, capucin_quantity, direct_quantity, jus_quantity } = req.body;
    try {
        const daily = await Daily.create({ id, express_quantity, capucin_quantity, direct_quantity, jus_quantity });
        res.status(200).send(daily); 
    } catch (error) {
        res.status(500).send(error);
    }
}

//delete daily by id 
const deleteDailyById=async(req,res)=>{
    const {id}=req.params
    const daily=await Daily.findOneAndDelete({_id:id})
    if(!daily){
        return res.status(404).send('not found to be deleted')
    }
    res.status(200).send(daily)
}

//update daily by id
const updateDailyById=async(req,res)=>{
    const{id}=req.params;
    const daily= await Daily.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!daily){
        res.status(404).send('not updated because not found')
    }
    res.status(200).send(daily)
}


module.exports={
    createDaily,
    getAllDaily,
    getDailyById,
    deleteDailyById,
    updateDailyById
}