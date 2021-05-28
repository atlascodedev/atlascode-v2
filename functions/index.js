const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors")({
  origin: true,
});
const app = express();

const atlasCodeSMTPServerTransporter = nodemailer.createTransport({
  pool: true,
  host: functions.config().mail_server.host,
  port: 465,
  secure: true,
  auth: {
    user: functions.config().mail_server.auth.user,
    pass: functions.config().mail_server.auth.pass,
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
    "sistema@atlascode.dev",
    ["sistema.procidadania@gmail.com", "contato@pro-cidadania.org"],
    "Contato efetuado pelo seu website",
    atlasCodeSMTPServerTransporter,
    req,
    res
  );
});

app.post("/sendMail/atlascode", (req, res, next) => {
  sendMail(
    "Atlascode",
    "sistema@atlascode.dev",
    [
      "alex.xande10@gmail.com",
      "atendimento@atlascode.dev",
      "aleksander@atlascode.dev",
    ],
    "Contato efetuado pelo seu website",
    atlasCodeSMTPServerTransporter,
    req,
    res
  );
});

app.post("/sendMail/portalbens", (req, res, next) => {
  sendMail(
    "Portal Bens",
    "sistema@atlascode.dev",
    "sistema.portalbens@gmail.com",
    "Contato efetuado pelo seu website",
    atlasCodeSMTPServerTransporter,
    req,
    res
  );
});

app.post("/sendMail/gnosis", (req, res, next) => {
  sendMail(
    "Sistema - Instituto Educacional Gnosis",
    "sistema@atlascode.dev",
    "gnosis.sistema@gmail.com",
    "Contato efetuado através do formulário de seu website",
    atlasCodeSMTPServerTransporter,
    req,
    res
  );
});

app.post("/sendMail/gnosis-curso", (req, res, next) => {
  sendMail(
    "Sistema - Instituto Educacional Gnosis",
    "sistema@atlascode.dev",
    ["gnosis.sistema@gmail.com", "atendimento@institutoeg.com"],
    `Manifestação de interesse - ${req.body.course} `,
    atlasCodeSMTPServerTransporter,
    req,
    res
  );
});

app.post("/sendMail/hightechserralheria", (req, res, next) => {
  sendMail(
    "Sistema - HighTech Serralheria",
    "sistema@atlascode.dev",
    "sistema.hightechserralheria@gmail.com",
    "Contato efetuado através de seu website",
    atlasCodeSMTPServerTransporter,
    req,
    res
  );
});

app.post("/sendMail/consultoriaespecializa", (req, res, next) => {
  sendMail(
    "Sistema - Consultoria Especializa",
    "sistema@atlascode.dev",
    [
      "diretoria@consultoriaespecializa.com",
      "atendimento@consultoriaespecializa.com",
      "suporte@consultoriaespecializa.com",
    ],
    "Contato efetuado através do seu website",
    atlasCodeSMTPServerTransporter,
    req,
    res
  );
});

app.post("/sendMail/mapacultural", (req, res, next) => {
  sendMail(
    "Sistema - Mapeamento Cultural de Taquara",
    "sistema@atlascode.dev",
    ["alex.xande10@gmail.com"],
    "Contato efeatuado através do website",
    atlasCodeSMTPServerTransporter,
    req,
    res
  );
});

exports.api = functions.https.onRequest(app);
