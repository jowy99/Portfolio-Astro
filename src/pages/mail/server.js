const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000; // Cambia si usas otro puerto

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Ruta para manejar el formulario
app.post("/send-email", async (req, res) => {
  console.log("Se ha enviado un correo.");
  const { name, lastname, email, message } = req.body;

  // Validaciones básicas
  if (!name || !lastname || !email || !message) {
    return res.status(400).json({ error: "Todos los campos son obligatorios." });
  }

  // Configuración de nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "joelarnaudcarreras@gmail.com", // Cambia por tu correo de Gmail
      pass: "yrlikbjcuwjmbqjv", // Cambia por tu contraseña de Gmail o contraseña de aplicación
    },
  });

  // Contenido del correo
  const mailOptions = {
    from: "joelarnaudcarreras@gmail.com", // Cambia por tu correo de Gmail
    to: "joelarnaudcarreras@gmail.com", // Cambia por el correo donde recibirás los mensajes
    subject: "Nueva solicitud de contacto",
    html: `
        <table style="width: 100%; max-width: 600px; font-family: Arial, sans-serif; background-color: #d7e0da; border-collapse: collapse;">
            <tr>
                <td style="background-color: #648374; color: #ffffff; text-align: center; padding: 20px;">
                    <h2 style="font-size: 24px; margin: 0;">Nuevo mensaje de contacto</h2>
                </td>
            </tr>
            <tr>
                <td style="background-color: #ffffff; padding: 30px;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td style="font-size: 18px; color: #3c4e45;"><strong>Nombre:</strong></td><td style="font-size: 18px;">${name}</td></tr>
                        <tr><td style="font-size: 18px; color: #3c4e45;"><strong>Apellidos:</strong></td><td style="font-size: 18px;">${lastname}</td></tr>
                        <tr><td style="font-size: 18px; color: #3c4e45;"><strong>Correo:</strong></td><td style="font-size: 18px;">${email}</td></tr>
                        <tr><td colspan="2" style="font-size: 18px; color: #3c4e45; padding-top: 25px;"><strong>Mensaje:</strong></td></tr>
                        <tr><td colspan="2" style="font-size: 16px; line-height: 1.6; color: #1d1d1d; background-color: #f0f7f4; padding: 20px;">${message}</td></tr>
                    </table>
                    <div style="text-align: center; margin-top: 30px;">
                        <a href="mailto:${email}?subject=Respuesta a tu mensaje en el Portfolio" style="display: inline-block; padding: 12px 24px; font-size: 16px; color: #ffffff; background-color: #5a7568; border-radius: 5px; text-decoration: none;">Responder al Correo</a>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="padding: 20px; text-align: center; color: #5a5a5a; font-size: 14px; background-color: #dbdbdb;">&copy; ${new Date().getFullYear()} Joel Arnaud Portfolio. Todos los derechos reservados.</td>
            </tr>
        </table>
    `,
  };

  try {
    // Enviar el correo
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Correo enviado correctamente." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al enviar el correo." });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
