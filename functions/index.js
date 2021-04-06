const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors")({
  origin: true,
});
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

let gnosisTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: functions.config().client_api.gnosis.gmail_username,
    pass: functions.config().client_api.gnosis.gmail_app_pass,
  },
});

let hightechserralheriaTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: functions.config().client_api.hightechserralheria.gmail_username,
    pass: functions.config().client_api.hightechserralheria.gmail_app_pass,
  },
});

let proCidadaniaTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: functions.config().client_api.procidadania.gmail_username,
    pass: functions.config().client_api.procidadania.gmail_app_pass,
  },
});

app.use(cors);

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

app.post("/sendMail/coletivoprocidadania", (req, res, next) => {
  sendMail(
    "Pro Cidadania",
    "contato@pro-cidadania.org",
    "sistema.procidadania@gmail.com",
    "Contato efetuado pelo seu website",
    proCidadaniaTransporter,
    req,
    res
  );
});

app.post("/sendMail/atlascode", (req, res, next) => {
  sendMail(
    "Atlascode",
    "atendimento@atlascode.dev",
    [
      "alex.xande10@gmail.com",
      "atendimento@atlascode.dev",
      "aleksander@atlascode.dev",
    ],
    "Contato efetuado pelo seu website",
    transporter,
    req,
    res
  );
});

app.post("/sendMail/gnosis", (req, res, next) => {
  sendMail(
    "Sistema - Instituto Educacional Gnosis",
    "sistema@institutoeg.com",
    "gnosis.sistema@gmail.com",
    "Contato efetuado através do formulário de seu website",
    gnosisTransporter,
    req,
    res
  );
});

app.post("/sendMail/gnosis-curso", (req, res, next) => {
  sendMail(
    "Sistema - Instituto Educacional Gnosis",
    "sistema@institutoeg.com",
    ["gnosis.sistema@gmail.com", "atendimento@institutoeg.com"],
    `Manifestação de interesse - ${req.body.course} `,
    gnosisTransporter,
    req,
    res
  );
});

app.post("/sendMail/hightechserralheria", (req, res, next) => {
  sendMail(
    "Sistema - HighTech Serralheria",
    "sistema@hightechfloripa.com",
    "sistema.hightechserralheria@gmail.com",
    "Contato efetuado através de seu website",
    hightechserralheriaTransporter,
    req,
    res
  );
});
exports.api = functions.https.onRequest(app);
