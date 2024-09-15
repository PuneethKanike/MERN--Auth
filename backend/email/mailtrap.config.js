import { MailtrapClient } from "mailtrap";

const TOKEN = "d4252e5716acf0a3e311e6b79b6b21d8";

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "puneeth",
};


