import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: ''
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Do something with the form data, such as send it to a server
    console.log(formData);
  };

  return (
<div className='myform'>
    <div className='box'>

    <h1>Enter & Shortern your URL</h1>
    <form onSubmit={handleSubmit}>
        
      <label className='text'>
        Enter Your URL
        <input type="text" name="name" autofocus="autofocus" value={formData.name} onChange={handleChange} />
      </label>
      <label className='date'>
        Expiry Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
      </label>
     
      <button type="submit">Submit</button>
    
    </form>
    <div className='last'>

    <h2>Your Shortern URL is:</h2>
    <div className='shortern'>

    </div>
    <button className='copy'>Copied!</button>
    </div>
    </div>
    </div>
  );
};

export default Form;
