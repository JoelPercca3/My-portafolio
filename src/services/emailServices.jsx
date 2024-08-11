import emailjs from 'emailjs-com';

const sendEmail = (templateParams) => {
  return emailjs.send('service_id', 'template_id', templateParams, 'user_id')
    .then((response) => {
      console.log('Email sent successfully', response.status, response.text);
    })
    .catch((error) => {
      console.error('Failed to send email', error);
    });
};

export default sendEmail;
