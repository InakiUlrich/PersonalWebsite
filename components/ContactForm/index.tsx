'use client';
/* eslint-disable */
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionResult('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmissionResult('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        setSubmissionResult(`Error: ${data.message || 'Something went wrong'}`);
      }
    } catch (error: any) {
      setSubmissionResult(`Error: ${error.message || 'Something went wrong'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label className="form-label" htmlFor="name">Name:</label>
        <input className="form-input" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label className="form-label" htmlFor="email">Email:</label>
        <input className="form-input" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label className="form-label" htmlFor="message">Message:</label>
        <textarea className="form-text-area" id="message" name="message" value={formData.message} onChange={handleChange} required />
      </div>
      <button className="form-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      <div className="result-div">
        {submissionResult && <p>{submissionResult}</p>}
      </div>
    </form>
  );
};

export default ContactForm;