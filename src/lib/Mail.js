import nodemailer from "nodemailer";
import "dotenv/config";

class Mail {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: process.env.MAIL_SECURE === "true",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });
    }

    send(to, subject, text, html) {
        return this.transporter.sendMail({
            from: "System <noreply@supremeapi.com.br",
            to,
            subject,
            text,
            html,
        });
    }
}

export default new Mail();
