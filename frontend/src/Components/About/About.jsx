import React from 'react';
import './About.css';
import hospital from '../Assets/hospital.jpg'

const About = () => {
  return (
    <div className='about'>
    <div className="about-left">
      <h1>About Us:)</h1>
        
        <p>
        When anyone is currently afflicted with an illness, they must see a doctor, which is both time-consuming and expensive. It can also be difficult for the user if they are out of reach of doctors and hospitals because 
        the illness cannot be detected. 
        -So, if the above procedure can be done using automated software that saves time and money, it could be better for the patient, making the process go more smoothly.

By keeping this in mind, we have developed our Multiple Disease Prediction System using Machine Learning. It is a web-based program that predicts a user’s disease based on the symptoms they have. It will enable end users to predict chronic diseases without having to visit a physician or doctor for a diagnosis. The aim is to identify various diseases by observing the symptoms of patients and applying various Machine Learning Models techniques.

The system comprises 2 major modules namely Admin and User.
The admin can log in directly using their credentials. They can manage the hospitals. They can view all the registered users and feedback provided by them.

The user would require to register first and then log in using their credentials. They can check the risk for Heart Disease, Liver Disease and Diabetes. The user can also inquire about their queries related to the inputs through the chatbot. If the system predicts any of the diseases, it will recommend hospitals accordingly to the users.

For this system, the front end involves HTML, CSS and JavaScript and the back end involves the MSSQL database. The back-end language used is Python and the framework is Django. The dataset is from Kaggle.

The algorithms used to develop this system includes Random Forest, KNN and XGBoost. Random forests are ensemble classifiers that randomly learn multiple decision trees. The random forest method consists of a training step that constructs several decision trees, and a test step that classifies or predicts an outcome variable based on an input vector. The KNN, a supervised algorithm, predicts the classification of unlabeled data by taking into account the features and labels of the training data. Xgboost is an efficient implementation of ensemble learning, 
whose main idea is boosting and introducing regular terms in the objective function to prevent overfitting. :)
        </p>

         
        
        </div>
      <div className="about-right">
      <img src={hospital} alt=""/>
    
      </div>
      
    </div>
  );
};

export default About;
