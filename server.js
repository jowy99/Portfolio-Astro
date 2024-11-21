import express from 'express';
import cors from 'cors';
import sendEmailRoute from './src/api/send-email.js';

const app = express();
const PORT = 5000;

app.use(cors({ origin: 'https://test.joelarnaud.com' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Utiliza la ruta de envío de correo
app.use('/api/send-email', sendEmailRoute);

app.listen(PORT, () => {
    console.log(`Servidor de API en https://test.joelarnaud.com:${PORT}`);
});
