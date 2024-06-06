import React from 'react';
import './Articles.css';
import humanEye from '../Assets/human-eye.webp'; // Import the image file
import olderLady from '../Assets/lady.jpg'; // Import the image file
import injuredKnee from '../Assets/knee.jpg'; // Import the image file
import womanJaw from '../Assets/joint.jpg'; // Import the image file

const MedicalInformation = () => {
  return (
    <div className="medical-information">
      {/* First container */}
      <div className="medical-info-container">
        <div className="image-container">
          <img src={humanEye} alt="Human Eye" />
        </div>
        <div className="info">
          <h2>Keratoconus: a comprehensive guide</h2>
          <p>Keratoconus is an eye condition where the cornea progressively thins and bulges into a cone shape. It distorts vision, often requiring special contact lenses or surgery for correction. Here to explain more about the condition is reputable consultant specialist optometrist Mr Don Williams, who provides us with a comprehensive guide.</p>
          <p className="author">Mr Don Williams</p>
          <p className="date">12.03.24</p>
          <p className="by">By Mr Don Williams</p>
          <a href="https://www.topdoctors.co.uk/medical-articles/keratoconus-a-comprehensive-guide" className="learn-more" target="_blank" rel="noopener noreferrer">Learn more</a>
        </div>
      </div>
      {/* Second container */}
      <div className="medical-info-container">
        <div className="image-container">
          <img src={olderLady} alt="Older Lady" />
        </div>
        <div className="info">
          <h2>Osteoporosis: your questions answered</h2>
          <p>Osteoporosis is a condition that principally affects women, but did you realise it is not only women who can suffer from the condition? Leading consultant rheumatologist Dr Elisa Astorri answers your commonly asked questions about osteoporosis, including how it is diagnosed and how you can reduce your risk of developing the condition.</p>
          <p className="author">Dr Elisa Astorri</p>
          <p className="date">12.03.24</p>
          <p className="by">By Dr Elisa Astorri</p>
          <a href="https://www.topdoctors.co.uk/medical-articles/osteoporosis-your-questions-answered" className="learn-more" target="_blank" rel="noopener noreferrer">Learn more</a>
        </div>
      </div>
      {/* Third container */}
      <div className="medical-info-container">
        <div className="image-container">
          <img src={injuredKnee} alt="Injured Knee" />
        </div>
        <div className="info">
          <h2>FAQs about partial knee replacements</h2>
          <p>Here, revered consultant trauma and orthopaedic surgeon, Mr Tarique Parwez, provides us with his expert insights into all things partial knee replacements.</p>
          <p className="author">Mr Tarique Parwez</p>
          <p className="date">12.03.24</p>
          <p className="by">By Mr Tarique Parwez</p>
          <a href="https://www.topdoctors.co.uk/medical-articles/faqs-about-partial-knee-replacements" className="learn-more" target="_blank" rel="noopener noreferrer">Learn more</a>
        </div>
      </div>
      {/* Fourth container */}
      <div className="medical-info-container">
        <div className="image-container">
          <img src={womanJaw} alt="Woman's Jaw" />
        </div>
        <div className="info">
          <h2>Temporomandibular joint disorder: explained</h2>
          <p>Temporomandibular joint disorder, commonly known as TMJ, is a condition that affects the joints connecting your jawbone to your skull. These joints, situated in front of each ear, enable you to perform essential tasks like chewing, speaking, and yawning. When they malfunction, it can lead to discomfort and difficulty in daily activities. Leading consultant oral and maxillofacial surgeon Professor Piet Haers explores the condition, explaining its causes, diagnosis, and treatment options.</p>
          <p className="author">Professor Piet Haers</p>
          <p className="date">12.03.24</p>
          <p className="by">By Professor Piet Haers</p>
          <a href="https://www.topdoctors.co.uk/medical-articles/temporomandibular-joint-disorder-explained" className="learn-more" target="_blank" rel="noopener noreferrer">Learn more</a>
        </div>
      </div>
    </div>
  );
};

export default MedicalInformation;
