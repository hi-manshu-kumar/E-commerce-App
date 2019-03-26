require('dotenv').config();                 
const mailer        = require('nodemailer');
const { welcome }   = require("./welcome_template");
const { purchase }  = require("./purchase_template");
const { resetPass } = require("./resetpass_template");

const getEmailData = (to, name, token, template, actionData) => {
    let data = null;

    switch(template){
        case "welcome":
            data = {
                form: "Waves <himanshuikumar493@gmail.com>",
                to:to,
                subject: `Welcome to waves ${name}`,
                html: welcome()
            }
        break;
        case "purchase":
            data = {
                form: "Waves <himanshuikumar493@gmail.com>",
                to,
                subject: `Thanks for shopping with ui ${name}`,
                html: purchase(actionData)
            }
        break;
        case "reset_password":
            data = {
                from: "Waves <himanshuikumar493@gmail.com>",
                to,
                subject: `Hey ${name}, reset your pass`,
                html: resetPass(actionData)
            }
        default:
            data;
    }
    return data;
}

const sendEmail = (to, name, token, type, actionData = null) => {

    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth:{
            user: 'himanshuikumar493@gmail.com',
            pass: process.env.EMAIL_PASS
        }
    });

    const mail = getEmailData(to, name, token, type, actionData);

    smtpTransport.sendMail(mail, function(error, response){
        if(error){
            console.log(error);
        } else {
            console.log('email sent')
        }
        smtpTransport.close();
    })
}


module.exports = { sendEmail }
