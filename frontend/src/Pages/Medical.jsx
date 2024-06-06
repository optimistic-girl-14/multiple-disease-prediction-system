import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faClinicMedical, faCheckCircle, faBars, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getFirestore } from 'firebase/firestore';
import { app } from '../Firebase';
import './css/Medical.css';
import UserProfile from './UserProfile';
import SymptomForm from './SymptomForm';
import char from '../Components/Assets/char.png';

const auth = getAuth(app);
const db = getFirestore(app);

const Medical = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userEmail, setUserEmail] = useState(null);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [showCheckupPoint, setShowCheckupPoint] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [showDrawer, setShowDrawer] = useState(false); // State to control drawer visibility
  const [isFormFilled, setIsFormFilled] = useState(false); // State to track whether the form is filled or not

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserEmail(user.email);
        setShowUserProfile(true); // Automatically show user profile upon login
      } else {
        setUserEmail(null);
        setShowUserProfile(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // Function to handle form submission
  const handleFormSubmit = () => {
    setIsFormFilled(true);
  };

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Redirect to the medical page after successful login
        navigate('/medical');
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Error signing out:', error.message);
      });
  };

  const goToDashboard = () => {
    setShowUserProfile(false); // Hide user profile form
    setShowCheckupPoint(false); // Hide checkup point form
    setSuccessMessage('.');
  };

  const handleCheckupPointClick = () => {
    setShowUserProfile(false); // Hide user profile form
    setShowCheckupPoint(true); // Show checkup point form
  };

  const handleProfileSaved = (message, name) => {
    setSuccessMessage(message);
    setUserName(name);
    setIsFormFilled(true); // Set the form as filled
    goToDashboard(); // Redirect to the dashboard
  };

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer); // Toggle drawer visibility
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2> Smart Treatment</h2>
        <div className="drawer-button" onClick={toggleDrawer}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </header>
      <div className="dashboard-content">
        {showDrawer && ( // Render drawer navigation only when showDrawer is true
          <aside className="dashboard-nav">
            <nav>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faClinicMedical} /> Patient Dashboard
                </li>
                {userEmail && (
                  <>
                    <li>
                      <FontAwesomeIcon icon={faEnvelope} /> {userEmail}
                    </li>
                    <li onClick={() => setShowUserProfile(!showUserProfile)}>
                      <FontAwesomeIcon icon={faUser} /> User Profile
                    </li>
                    {isFormFilled && ( // Render checkup point next to user profile when the form is filled
                      <li onClick={handleCheckupPointClick}>
                        <FontAwesomeIcon icon={faCheckCircle} /> Checkup Point
                      </li>
                    )}
                    <li onClick={handleLogout}>
                      <FontAwesomeIcon icon={faSignOutAlt} /> Log out
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </aside>
        )}
        <main className="dashboard-main">
          <div className="patient-dashboard">
            {showUserProfile ? (
              <UserProfile onProfileSaved={handleProfileSaved} />
            ) : showCheckupPoint ? (
              <SymptomForm />
            ) : successMessage ? (
              <div>
                <p className="success-message">{successMessage}</p>
                {userName && (
                  <div className="greeting-message">
                    <p>Hi, {userName}!</p>
                  </div>
                )}
                <img src={char} alt="char" className="char-image" />
              </div>
            ) : null}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Medical;
