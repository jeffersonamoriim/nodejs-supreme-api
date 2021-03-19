import nodemailer from "nodemailer";
import mailConfig from "../config/mail";

class Mail {
    constructor() {
        this.transporter = nodemailer.createTransport(mailConfig);
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
