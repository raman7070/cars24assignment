import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    userId: '',
  });

  const [errors, setErrors] = useState({
    title: '',
    body: '',
    userId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });


    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const newErrors = {};
    if (formData.title.trim() === '') {
      newErrors.title = 'Title is required';
    }
    if (formData.body.trim() === '') {
      newErrors.body = 'Body is required';
    }
    if (formData.userId.trim() === '') {
      newErrors.userId = 'UserId is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log('Form submission failed. Please fill out all fields.');
    } else {
      console.log('Form data submitted:', formData);
    }
  };

  return (
    <div>
      <h1>Form Component</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <span style={{ color: 'red' }}>{errors.title}</span>
        </div>
        <div>
          <label>Body:</label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
          />
          <span style={{ color: 'red' }}>{errors.body}</span>
        </div>
        <div>
          <label>UserId:</label>
          <input
            type="number"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
          />
          <span style={{ color: 'red' }}>{errors.userId}</span>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
