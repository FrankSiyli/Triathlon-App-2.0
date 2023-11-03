import nodemailer from "nodemailer";
import User from "../../../database/models/User";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });

      var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: "info@siyli-endurance-coaching.com",
        to: email,
        subject:
          emailType === "VERIFY"
            ? "siyli-app.de // Bestätige bitte deine Email-Adresse"
            : "Passwort zurücksetzen",

        html: `<p>Klicke  
            <a href="${
              // change nextauth url before deployment
              process.env.NEXTAUTH_URL
            } / verifyemail?token=${hashedToken}"> hier </a>
        um  
        ${
          emailType === "VERIFY"
            ? " deine Email-Adresse zu bestätigen"
            : " dein Passwort zurückzusetzen"
        } </p>`,
      };
    }

    const emailResponse = await transport.sendMail(mailOptions);
    return emailResponse;
  } catch (error) {
    throw new Error(error.message);
  }
};
