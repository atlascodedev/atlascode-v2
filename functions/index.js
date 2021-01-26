const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const app = express();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: functions.config().client_api.atlascode.gmail_username,
    pass: functions.config().client_api.atlascode.gmail_app_pass,
  },
});

let coletivoTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: functions.config().client_api.coletivoprocidadania.gmail_username,
    pass: functions.config().client_api.coletivoprocidadania.gmail_app_pass,
  },
});

app.options("*", cors());

const sendMail = (
  fromName,
  fromEmail,
  destinationMail,
  subject,
  transporter,
  req,
  res
) => {
  const formName = req.body.name;
  const formMail = req.body.email;
  const formMessage = req.body.message;
  const formPhone = req.body.phone;

  let mailOptions = {
    from: `${fromName} - Sistema <${fromEmail}>`,
    to: `${destinationMail}`,
    subject: `${subject}`,
    html: `
        <div style="display: flex, flex-direction: column, align-items: center">
        <h1> Um usuário enviou uma mensagem </h1>
          <h2> Nome do usuário : ${formName} </h2>
          <h2> E-mail do usuário: ${formMail} </h2>
          <h2> Telefone do usuário: ${formPhone} </h2>
          </hr>
          <h2> Mensagem do usuário: ${formMessage} </h2>
        </div>`,
  };

  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.send(error);
    } else {
      res.send("Email enviado");
    }
  });
};

app.post("/sendMail/coletivoprocidadania", cors(), (req, res, next) => {
  sendMail(
    "Coletivo Pro Cidadania",
    "sistema@coletivoprocidadania.org",
    "coletivocmslogin@gmail.com",
    "Contato efetuado pelo seu website",
    coletivoTransporter,
    req,
    res
  );
});

app.post("/sendMail/atlascode", cors(), (req, res, next) => {
  sendMail(
    "Atlascode",
    "atendimento@atlascode.dev",
    "alex.xande10@gmail.com",
    "Contato efetuado pelo seu website",
    transporter,
    req,
    res
  );
});

exports.api = functions.https.onRequest(app);
