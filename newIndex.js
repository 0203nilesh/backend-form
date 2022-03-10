var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport( {
  service: 'gmail',
  auth: {
    user: 'manish02VS07chauhan@gmail.com',
    pass: 'M@n!$h0@VS0&'
  }
});

var mailOptions = {
  from: 'manish02VS07chauhan@gmail.com',
  to: 'nilesh0203chauhan@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});