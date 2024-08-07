const express=require('express')
const Daily=require('../models/dailymodel')
const router=express.Router()
const{createDaily,getAllDaily,getDailyById,deleteDailyById,updateDailyById}=require('../controllers/dailyController')

//get all daily info

router.get('/',getAllDaily)

//get a daily by id

router.get('/:id',getDailyById)

//create a daily journal

router.post('/create',createDaily );

//delte a daily journal by id

router.delete('/delete/:id',deleteDailyById)

//update by id
router.patch('/update/:id',updateDailyById)

module.exports=router;