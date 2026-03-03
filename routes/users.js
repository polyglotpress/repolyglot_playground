//user routes will go here
const express = require('express');
const Language = require('../models/language');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
    res.send('hi');
})



router.get('/register', async (req, res) => {
    res.render('users/register');
})

router.post('/register', async (req, res) => {
    const { email, username, password } = req.body;
    const user = new User({ email, username, password });
    const registeredUser = await user.save(); //save or register?
    console.log(registeredUser);
    res.redirect('/tasks');

})

router.get('/login', async (req, res) => {
    res.render('users/login');
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ "user.username": req.body.username });
    //  await user.save(); 
    console.log(user);
    res.redirect('/tasks');

})

router.get('/dashboard', async (req, res) => {
    res.render('users/dashboard');
})

router.get('/all', async (req, res) => { //remove soon
    const users = await User.find({});
    res.json(users);
})


router.get('/languages', async (req, res) => { //http://localhost:5000/users/languages
    res.render('users/languages');
})

// router.get('/languages/new', async (req, res) => {
//     res.send('user adds new language here')
// })

router.get('/languages/list', async (req, res) => {
    const languageList = await Language.find({});
    res.json(languageList);
})

router.post('/languages/new', async (req, res) => {

    const { language } = req.body.language;
    const lang = new Language({ language });
    const newLang = await lang.save()
    console.log(newLang)
    //res.send(`user adds new language here ${lang}`)
})

// router.delete('/languages/:id', async (req, res) => {
// const language = await Language.findByIdAndDelete(req.params.id);
//res.redirect('/languages)
// })

module.exports = router;