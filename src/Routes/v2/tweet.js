import express from 'express';

const router = express.Router();

router.get('/',(req,res) =>{
    return res.json({
        msg:"tweet route from V2"
    });
});

router.get('/:id',(req,res) =>{
    return res.json({
        msg:"tweet route from V2",
        id: req.params.id
    });
});


export default router;

