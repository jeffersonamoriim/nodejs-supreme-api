import Mail from "../../lib/Mail";

class WellcomeEmailJob {
    get key() {
        return "WelcomeEmail";
    }

    async handle({ data }) {
        const { email, name } = data;
        Mail.send(
            email,
            "Welcome to SupremeAPI",
            `Hello ${name}! We hope you enjoy all our content`,
            `<b>Hello ${name}! We hope you enjoy all our content</b>`
        );
    }
}

export default new WellcomeEmailJob();
