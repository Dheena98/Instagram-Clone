import React, { useState } from 'react';
import axios from 'axios';

function NewPost() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    description: '',
    postImage: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/posts', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="file"
          name="postImage"
          onChange={(e) => setFormData({ ...formData, postImage: e.target.files[0] })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewPost;
