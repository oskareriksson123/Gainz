const express = require('express');
const router = express.Router();


router.get('/',(req,res) =>{
    res.render('acc/register');
});

module.exports = router;