import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send the data to a server.
    console.log(formData);
  };

  return (
    <div style={formContainer}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div style={formGroup}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroup}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroup}>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={textareaStyle}
          />
        </div>
        <button type="submit" style={submitButton}>Submit</button>
      </form>
    </div>
  );
}


const formContainer = {
  maxWidth: '400px',
  margin: '0 auto',
  // backgroundColor:'red',
};

const formGroup = {
  marginBottom: '20px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const textareaStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  resize: 'vertical',
};

const submitButton = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Contact;
