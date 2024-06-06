import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import './css/UserProfile.css';
import { app } from '../Firebase';

const db = getFirestore(app); // Initialize Firestore

const UserProfile = ({ onProfileSaved }) => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    age: '',
    gender: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Store the form data in Firestore
      await addDoc(collection(db, 'UserProfile'), formData);
      // Call the function to indicate profile saved
      onProfileSaved('Profile saved successfully!', formData.name);
      // Reset the form
      setFormData({
        name: '',
        dateOfBirth: '',
        age: '',
        gender: '',
        country: '',
      });
    } catch (error) {
      console.error('Error saving profile: ', error);
    }
  };

  return (
    <div className="UserProfile-container">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
