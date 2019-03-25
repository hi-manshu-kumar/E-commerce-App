const mailer = require('nodemailer');
const { welcome } = require("./welcome_template");
const { purchase } = require("./purchase_template");
require('dotenv').config();

const getEmailData = (to, name, token, template, actionData) => {
    let data = null;

    switch(template){
        case "welcome":
            data = {
                form: "Waves <himanshuikumar493@gmail.com>",
                to,
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
        default:
            data;
    }
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
