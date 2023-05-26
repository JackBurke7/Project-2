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
// const logout = async () => {
//     const response = await fetch('/api/users/logout', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     });
//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert(response.statusText);
//     }
//   };
//   document.querySelector('#logout').addEventListener('click', logout);

module.exports = router;