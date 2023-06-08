import React, { useState } from 'react';
import './FeedbackForm.css';
import axios from 'axios';

const FeedbackForm = () => {
  const [internName, setInternName] = useState('');
  const [email, setEmail] = useState('');
  const [internshipPeriod, setInternshipPeriod] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const formData = {
        internName,
        email,
        internshipPeriod,
        feedback,
      };

      await axios.post('http://localhost:5000/api/feedback', formData);

      setInternName('');
      setEmail('');
      setInternshipPeriod('');
      setFeedback('');

      alert('Feedback submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('Error submitting feedback. Please try again.');
    }
  };

  return (
    <div className="feedback-form-container">
      <h2>Internship Feedback Form</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="internName">Name:</label>
          <input
            type="text"
            id="internName"
            value={internName}
            onChange={(e) => setInternName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="internshipPeriod">Internship Period:</label>
          <input
            type="text"
            id="internshipPeriod"
            value={internshipPeriod}
            onChange={(e) => setInternshipPeriod(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
