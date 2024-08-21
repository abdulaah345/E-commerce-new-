import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to,
      subject,
      message: text
    };

    emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_user_id')
      .then((response) => {
        alert('Email sent successfully!');
      })
      .catch((error) => {
        alert('Failed to send email.');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>To:</label>
        <input type="email" value={to} onChange={(e) => setTo(e.target.value)} required />
      </div>
      <div>
        <label>Subject:</label>
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
      </div>
      <div>
        <label>Message:</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} required></textarea>
      </div>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
