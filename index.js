const express = require("express");
const bodyParser = require("body-parser");
const app= express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post("/api/form", (req,res) =>{
    nodemailer.createTestAccount((err,account)=>{
        const htmlEmail = `
            <h3> Email enviado desde React</h3>
            <ul>
                <li> Email: ${req.body.email}</li>
                <li> Asunto: ${req.body.asunto}</li>
            </ul>
            <h3>Mensaje</h3>
            <p>${req.body.mensaje}</p>
        
        `;

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail',
            port: 587,
            auth: {
                user: 'verna.abernathy22@ethereal.email',
                pass: 'AF35ksRCWKtmFC2Bse'
            }
        });
        let mailOptions = {
            from: "verna.abernathy22@ethereal.email",
            to: req.body.email,
            replyTop: "verna.abernathy22@ethereal.email",
            subject: req.body.asunto,
            text: req.body.mensaje,
            html: htmlEmail
        };
        transporter.sendMail(mailOptions,(err,info) => {
            if (err){
                return console.log(err);
            }
            console.log("mensaje enviado: %$", info.mensaje);
            console.log("url del mensaje %$", nodemailer.getTestMessageUrl(info));
        });
        
    });
});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`el servidor esta a la escucha en ${PORT}`);
});