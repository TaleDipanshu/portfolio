import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formUrl = 'https://formspree.io/f/movazwpb'; 
    
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);

    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        // Clear form
        setFormData({
          name: '',
          email: '',
          message: '',
        });

        setTimeout(() => setSubmitted(false), 3000);
      } else {
        console.error('There was an issue submitting the form');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-300 transition duration-300"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-300 transition duration-300"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 h-32 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-300 transition duration-300"
              placeholder="Your Message"
              required
            />
          </div>

       
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded-md font-semibold hover:bg-purple-600 focus:ring focus:ring-purple-300 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <div className="mt-4 text-center text-green-500 text-lg transition-transform transform animate-bounce">
            Thank you! Your message has been sent.
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
