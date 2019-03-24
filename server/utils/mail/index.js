const mailer = require('nodemailer');
const { welcome } = require("./welcome_template");
require('dotenv').config();

const getEmailData = (to, name, token, template) => {
    let data = null;

    switch(template){
        case "welcome":
            data = {
                form: "Waves <himanshuikumar493@gmail.com>",
                to,
                subject: `Welcome to waves ${name}`,
                text: "Testing our waves mails",
                html: welcome()
            }
        break;
        default:
            data;
    }
}

const sendEmail = (to, name, token, type) => {

    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth:{
            user: 'himanshuikumar493@gmail.com',
            pass: process.env.EMAIL_PASS
        }
    });

    const mail = getEmailData(to, name, token, type);

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
