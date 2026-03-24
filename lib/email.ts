import nodemailer from 'nodemailer';

export async function sendNotificationEmail(data: { name: string; email: string; mobile?: string; company: string; sector?: string; message: string }) {
    try {
        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.log('SMTP credentials not found, skipping email notification.');
            return true;
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_FROM,
            to: process.env.SMTP_TO,
            subject: `New Consultation Request from ${data.name}`,
            text: `
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.mobile || 'N/A'}
        Company: ${data.company}
        Sector: ${data.sector || 'N/A'}
        
        Requirements:
        ${data.message}
      `,
            html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.mobile || 'N/A'}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Sector:</strong> ${data.sector || 'N/A'}</p>
        <p><strong>Requirements:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
}
