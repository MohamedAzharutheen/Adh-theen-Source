
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

exports.Enquiry = async(req,res)=>{

const {name,phone,email,service,message}= req.body;

let transporter = nodemailer.createTransport({

service:'gmail',
auth:{
user:process.env.EMAIL_ID,
pass:process.env.APPPWD,
},
tls:{
    rejectUnauthorized: false, // Allow self-signed certificates
}})

try {
        // Send mail
await transporter.sendMail({
    from:email,
    to: process.env.EMAIL_ID,
    subject: `New Enquiry Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 10px; background-color: #f9f9f9; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
        <h3 style="color: #0A3161; border-bottom: 2px solid #0A3161; padding-bottom: 10px;">New Enquiry Form Submission from <span style="color: #FFA900;"> ${name} </span> </h3>
        <p style="color: #333333; font-size: 16px; margin: 15px 0;"><strong>Name:</strong> ${name}</p>
        <p style="color: #333333; font-size: 16px; margin: 15px 0;"><strong>Email:</strong> ${email}</p>
        <p style="color: #333333; font-size: 16px; margin: 15px 0;"><strong>Mobile Number:</strong> ${phone}</p>
       <p style="color: #333333; font-size: 16px; margin: 15px 0;"><strong>Message:</strong> ${message}</p>
        <p style="color: #333333; font-size: 16px; margin: 15px 0;"><strong>Service:</strong> ${service}</p>
        <div style="margin-top: 30px; text-align: center;">
          <a href="" style="text-decoration: none; color: white; background-color: #0A3161; padding: 10px 20px; border-radius: 5px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">Visit Our Website</a>
        </div>
      </div>`,
  });

  res.status(200).json({
    message: "Email Sent Successfully",
  });
} catch (error) {
  console.log("Email Send Error", error);
  res.status(500).json({
    message: 'Error Sending Mail',
  });
}
}