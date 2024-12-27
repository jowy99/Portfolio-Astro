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
    console.log("Datos recibidos:", req.body);
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
    from: "joelarnaudcarreras@gmail.com",
    to: "joelarnaudcarreras@gmail.com", // Cambia por el correo donde recibirás los mensajes
    subject: "Nueva solicitud de contacto",
    html: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contacto</title>
  <style>
    #lastname {
      margin-left: 1rem;
    }
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4; /* Fondo general */
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #d7e0da;
      border-radius: 8px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Sombra más notoria */
      overflow: hidden;
      border: 2px solid #989898; /* Borde oscuro */
    }
    .header {
      background-color: #648374;
      color: #ffffff;
      text-align: center;
      padding: 30px;
    }
    .header .name-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px; /* Espaciado entre los elementos (simula space-x-4 de Tailwind) */
    }
    .header .name-container p {
      margin: 0;
      font-size: 24px; /* Tamaño del texto más grande */
      font-weight: bold; /* Nombre y apellido en negrita */
    }
    .body {
      padding: 20px;
      color: #333333;
    }
    .body h2 {
      margin-top: 0;
      font-size: 20px;
      color: #648374;
    }
    .body p {
      margin: 10px 0;
      line-height: 1.6;
    }
    .body .details {
      margin: 20px 0;
      padding: 15px;
      background-color: #f9f9f9;
      border-left: 4px solid #648374;
      border-radius: 4px;
      color: #555555;
    }
    .button-container {
      text-align: center;
      margin-top: 20px;
    }
    .button {
      background-color: #648374;
      color: #ffffff !important; /* Forzamos el texto blanco */
      padding: 10px 20px;
      border-radius: 4px;
      text-decoration: none;
      font-weight: bold;
      display: inline-block;
    }
    .button:hover {
      background-color: #567364;
    }
    .footer {
      background-color: #e8e8e8;
      text-align: center;
      padding: 10px;
      font-size: 12px;
      color: #888888;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Encabezado -->
    <div class="header">
      <div class="name-container">
        <p id="name">${name}</p>
        <p id="lastname">${lastname}</p>
      </div>
    </div>

    <!-- Contenido del cuerpo -->
    <div class="body">
      <h2>Mensaje de:</h2>
      <p>${email}</p>
      <div class="details">
        <p>${message}</p>
      </div>
      <div class="button-container">
        <a href="mailto:${email}" class="button">Responder</a>
      </div>
    </div>

    <!-- Pie de página -->
    <div class="footer">
      <p>© 2024 Mi Portafolio. Todos los derechos reservados.</p>
    </div>
  </div>
</body>
</html>







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
