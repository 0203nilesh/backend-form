const express= require('express');
const fs= require('fs');
const path= require('path');
const nodmailer= require('nodemailer');

const port= 80;
const app= express();

// If YOu want that the data filled inside of the form will send through the email then it will works as simple but we have to install the 'nodemialer' package and then below code works
var transporter= nodmailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'Manish02VS07chauhan@gmail.com',
        pass: 'M@n!le$h0@VS0&'
    }
});


//This line of code is necessary to getting the input from the form and this will helps up to get data.
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname , 'views' , 'index.html'));
})
app.post('/', (req, res)=>{
    let name= req.body.name;
    let phone= req.body.phone;
    let mail= req.body.email;
    let concern= req.body.concern;
    let outText= `Hello there My name is ${name} and my phone number is ${phone} and my contact email id is ${mail}. This is my concern "${concern}". Thanks one again for hearing my out.`;
    fs.writeFileSync('output.txt', outText);
    res.status(200).sendFile(path.join(__dirname , 'views' , 'index.html'));

    var mailOptions= {
        from: 'nilesh0203chauhan@gmail.com',
        to: mail,
        subject: 'Email using node',
        text: concern
    };

    transporter.sendMail(mailOptions , function(error, info){
        if(error){
            console.log(error);
        }
        else{
            console.log('Email sent'+ info.response);
        }
    })
})



app.listen(port, (req, res) =>{
    console.log(`The server is running at https://localhost:${port}`);
})