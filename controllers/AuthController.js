const User = require('../models/user');

const bcrypt = require('bcryptjs');


module.exports = class AuthController {
    static login(req, res) {
        res.render('auth/login')
    }

    static register(req, res) {
        res.render('auth/register')
    }

    static async registerPost(req, res) {
        
        const { name, email, password, confirmpassword } = req.body

        // password match validation
        if(password != confirmpassword) {
            req.flash('message', 'As senhas não conferem, tente novamente!' );
            res.render('auth/register');

            return 
        }

        // check if user exists 
        const checkIfUserExists = await User.findOne({ where: {email: email } })

        if (checkIfUserExists) {
            req.flash('message', 'O e-mail já está em uso!');
            res.render('auth/register');

            return
        }

        //create a password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const userLogin = {
            name,
            email, 
            password: hashedPassword
        }

        try {
            const createUser = await User.create(userLogin);

            //initialize session
            req.session.userid = createUser.id; 

            req.flash('message', 'Cadastro realizado com sucesso!');

            req.session.save(() => {
                res.redirect('/')

            })
        } catch (err) {
            console.log(err);

        }

    }
}