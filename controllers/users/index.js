const router = require('express').Router();
const { User } = require('../../models')

router.get('/', (req, res)=> {
    res.json("from the user folder");
})



router.post("/sign-up", (req, res) => {
    const { username: UserInputUsername, email: UserInputEmail, password:UserInputPassword } = req.body;
    const userData = User.create({
        username: UserInputUsername,
        password: UserInputPassword,
        email: UserInputEmail
    });

    res.json(userData);
})


module.exports = router;