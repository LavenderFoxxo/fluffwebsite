const router = require('express').Router()

router.get('/', async (req, res) => {
    res.render('index.ejs')
})

router.get('/discord', async (req, res) => {
    res.redirect('https://discord.gg/5vfvFMK54m')
})

module.exports = router;