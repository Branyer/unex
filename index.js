const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser =require("body-parser");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/', () => {
    resizeBy.send("welcome from")
})

app.post('/api/forms', (req, res) => {

    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: 'ericlz.25412@gmail.com',
            pass: 'IMgod25412'
        }
    });

    let mailOptions = {
        from: data.email,
        to: 'ericlz.25412@gmail.com',
        subject: `Message from ${data.name}`,
        html: `
        <h3>Info</h3>
        <ul>
        <li> Name: ${data.name} </li>
        <li> Email: ${data.email} </li>
        <li> website: ${data.website} </li>
        <li> Phone: ${data.phone} </li>
        <li> Description: ${data.description} </li>
        </ul>
        `
    };

    smtpTransport.sendMail(mailOptions, (error, responses) => {

        if (error) {
            res.send(error)
        }
        else {
            res.send('Success')
        }
    })

    smtpTransport.close();
})

app.listen(PORT, ()=>{
    console.log(`server starting at port ${PORT}`);
})   