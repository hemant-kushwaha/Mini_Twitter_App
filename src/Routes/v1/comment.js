import express from 'express';

const router = express.Router();

router.get('/',(req,res) =>{
    return res.json({
        msg:"comments route"
    });
});

router.get('/:id',(req,res) =>{
    return res.json({
        msg:"comments route",
        id: req.params.id
    });
});


export default router;

