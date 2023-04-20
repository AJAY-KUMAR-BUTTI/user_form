const userModel = require("../module/userModel");
const bcrypt = require('bcrypt');


const signup = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    try {
        if(password !== confirmPassword) {
            res.status(401).send({status : 'error', msg : 'password and confirm password are not the same'})
        } else {
            const hashPassword = await bcrypt.hash(password, 5);

            const newUser = await userModel.create({ username, email, password : hashPassword });
            res.status(200).send({ status : 'success', newUser });
        }
    } catch(err) {
        console.log(err);
        res.status(500).send({status : 'error', msg : 'error connectec to db'});
    }
}

module.exports = {
    signup
}