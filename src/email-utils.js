var nodemailer = require('nodemailer');
var email = require('./email.json');

exports.sendSampleGmail = function() {
    console.info('running');
        var transporter = nodemailer.createTransport(email.transport);
        var mailOptions = {
            from: email.from,
            to: email.to,
            subject: email.subject,
            html: email.body
        };
        
        transporter.sendMail(mailOptions,function(error,info){
            if(error){
                console.log(error);
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });
    };

exports.sendEmailWithAttachment = function(handler){
    var transporter = nodemailer.createTransport(email.transport);
        var mailOptions = {
            from: email.from,
            to: email.to,
            subject: email.subject,
            html: email.body,
            attachments: [
                {
                    path: 'report.zip'
                }
            ],
        };
        
        transporter.sendMail(mailOptions,function(error,info){
            if(handler){
                handler(error,info);
            }else{
                if(error){
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
            }            
        });
};