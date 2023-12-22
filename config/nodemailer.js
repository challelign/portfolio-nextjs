import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
	service: "gmail",
	secure: false,
	port: 465,
	secureConnection: false,

	auth: {
		user: email,
		pass,
	},

	tls: {
		rejectUnauthorized: false,
	},
});

export const mailOptions = {
	from: email,
	to: email,
};
