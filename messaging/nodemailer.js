import nodemailer from 'nodemailer';
import 'dotenv/config';

/**Usar para cuenta de GMAIL**/

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   port: 587,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });
// export default transporter;

/**Usar para cuenta de Ethereal**/

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
export default transporter;