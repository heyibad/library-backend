import { Resend } from "resend";
import { config } from "../config/config";

const resend = new Resend(config.EMAIL_API);

const sendEmail = async (
    email: string,
    username: string,
    verifyCode: string
) => {
    try {
        const { data, error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: email,
            subject: "Verification Code",
            html: `
            <body style="font-family: 'Roboto', sans-serif; background-color: #f9f9f9; margin: 0; padding: 0;">
  <div class="container" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border: 1px solid #dddddd; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <h2 class="heading" style="font-size: 24px; color: #333333;">Hello, ${username}</h2>
    <p class="text" style="font-size: 16px; color: #666666; margin-bottom: 20px;">
      Thank you for registering. Please use the following verification code to complete your registration:
    </p>
    <div class="otp-container" style="display: flex; justify-content: center; margin-bottom: 20px;">
      <div class="otp-box" style="width: 40px; height: 40px; margin: 0 5px; font-size: 26px; text-align: center; line-height: 40px; border-radius: 5px;">${verifyCode}</div>
      <span class="otp-copy" onclick="copyOTP()" style="height: 30px; margin-top: 4px; margin-left: 40px; display: flex; justify-content: center; align-items: center; font-size: 15px; cursor: pointer; width: 60px; text-align: center; text-decoration: none; border-radius: 1px; ">
      <i class="fa-regular fa-copy fa-lg"></i>
          </span>
    </div>
    <a class="button" href="http://localhost:3000/verify/${username}" target="_blank" style="display: block; width: 100%; padding: 15px 0; margin-top: 20px; font-size: 16px; color: #ffffff; background-color: #007bff; text-align: center; text-decoration: none; border-radius: 5px; font-weight:700;">VERIFY</a>
    <p class="footer" style="font-size: 14px; color: #999999; margin-top: 25px; text-align: center;">© 2024 All rights reserved.</p>
  </div>

  <script src="https://kit.fontawesome.com/2dd055ffa8.js" crossorigin="anonymous"></script>
  <script>
    function copyOTP() {
      const otpBox = document.querySelector('.otp-box');
      let otp = otpBox.innerText;
      
      navigator.clipboard.writeText(otp)
      .then(() => {
        alert('OTP copied to clipboard');
      })
      .catch(err => {
        console.error('Error copying OTP:', err);
      });
    }
  </script>
</body>
            `,
        });
        return { success: true, message: "Email send Successfully" };
    } catch (error) {
        console.error("Error while sending an email");
        return { success: false, message: "Failed to send Email" };
    }
};
