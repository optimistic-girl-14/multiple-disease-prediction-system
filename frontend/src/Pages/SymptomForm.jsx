import React, { useState } from 'react';
import axios from 'axios';
import './css/SymptomForm.css';

const SymptomForm = () => {
  const symptomsList = [
    "itching", "skin_rash", "nodal_skin_eruptions", "continuous_sneezing", "shivering",
    "chills", "joint_pain", "stomach_pain", "acidity", "ulcers_on_tongue", "muscle_wasting",
    "vomiting", "burning_micturition", "spotting_urination", "fatigue", "weight_gain", "anxiety",
    "cold_hands_and_feets", "mood_swings", "weight_loss", "restlessness", "lethargy", "patches_in_throat",
    "irregular_sugar_level", "cough", "high_fever", "sunken_eyes", "breathlessness", "sweating",
    "dehydration", "indigestion", "headache", "yellowish_skin", "dark_urine", "nausea", "loss_of_appetite",
    "pain_behind_the_eyes", "back_pain", "constipation", "abdominal_pain", "diarrhoea", "mild_fever",
    "yellow_urine", "yellowing_of_eyes", "acute_liver_failure", "fluid_overload", "swelling_of_stomach",
    "swelled_lymph_nodes", "malaise", "blurred_and_distorted_vision", "phlegm", "throat_irritation",
    "redness_of_eyes", "sinus_pressure", "runny_nose", "congestion", "chest_pain", "weakness_in_limbs",
    "fast_heart_rate", "pain_during_bowel_movements", "pain_in_anal_region", "bloody_stool", "irritation_in_anus",
    "neck_pain", "dizziness", "cramps", "bruising", "obesity", "swollen_legs", "swollen_blood_vessels",
    "puffy_face_and_eyes", "enlarged_thyroid", "brittle_nails", "swollen_extremeties", "excessive_hunger",
    "extra_marital_contacts", "drying_and_tingling_lips", "slurred_speech", "knee_pain", "hip_joint_pain",
    "muscle_weakness", "stiff_neck", "swelling_joints", "movement_stiffness", "spinning_movements",
    "loss_of_balance", "unsteadiness", "weakness_of_one_body_side", "loss_of_smell", "bladder_discomfort",
    "foul_smell_of urine", "continuous_feel_of_urine", "passage_of_gases", "internal_itching",
    "toxic_look_(typhos)", "depression", "irritability", "muscle_pain", "altered_sensorium", "red_spots_over_body",
    "belly_pain", "abnormal_menstruation", "dischromic_patches", "watering_from_eyes", "increased_appetite", "polyuria",
    "family_history", "mucoid_sputum", "rusty_sputum", "lack_of_concentration", "visual_disturbances",
    "receiving_blood_transfusion", "receiving_unsterile_injections", "coma", "stomach_bleeding", "distention_of_abdomen",
    "history_of_alcohol_consumption", "fluid_overload", "blood_in_sputum", "prominent_veins_on_calf", "palpitations",
    "painful_walking", "pus_filled_pimples", "blackheads", "scurring", "skin_peeling", "silver_like_dusting",
    "small_dents_in_nails", "inflammatory_nails", "blister", "red_sore_around_nose", "yellow_crust_ooze"
  ];

  const [symptoms, setSymptoms] = useState({
    symptom1: '',
    symptom2: '',
    symptom3: '',
    symptom4: '',
    symptom5: '',
  });

  const [predictionResult, setPredictionResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSymptoms({ ...symptoms, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const queryParams = new URLSearchParams(symptoms).toString();

      const response = await axios.get(`http://localhost:5000/api/data?${queryParams}`);
      const { prediction } = response.data;

      // Update state with the prediction result
      setPredictionResult(prediction);
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="symptom-container">
        <div className="symptom 1:">
          <label htmlFor="symptom1">Symptom1:</label>
          <select name="symptom1" id="symptom1" value={symptoms.symptom1} onChange={handleChange}>
            <option value="">Select symptom</option>
            {symptomsList.map((symptom) => (
              <option key={symptom} value={symptom}>
                {symptom}
              </option>
            ))}
          </select>
        </div>

        <div className="symptom 2:">
          <label htmlFor="symptom2">Symptom2:</label>
          <select name="symptom2" id="symptom2" value={symptoms.symptom2} onChange={handleChange}>
            <option value="">Select symptom</option>
            {symptomsList.map((symptom) => (
              <option key={symptom} value={symptom}>
                {symptom}
              </option>
            ))}
          </select>
        </div>

        <div className="symptom">
          <label htmlFor="symptom3">Symptom3:</label>
          <select name="symptom3" id="symptom3" value={symptoms.symptom3} onChange={handleChange}>
            <option value="">Select symptom</option>
            {symptomsList.map((symptom) => (
              <option key={symptom} value={symptom}>
                {symptom}
              </option>
            ))}
          </select>
        </div>

        <div className="symptom">
          <label htmlFor="symptom4">Symptom4:</label>
          <select name="symptom4" id="symptom4" value={symptoms.symptom4} onChange={handleChange}>
            <option value="">Select symptom</option>
            {symptomsList.map((symptom) => (
              <option key={symptom} value={symptom}>
                {symptom}
              </option>
            ))}
          </select>
        </div>

        <div className="symptom">
          <label htmlFor="symptom5">Symptom5:</label>
          <select name="symptom5"  id="symptom5" value={symptoms.symptom5} onChange={handleChange}>
            <option value="">Select symptom</option>
            {symptomsList.map((symptom) => (
              <option key={symptom} value={symptom}>
                {symptom}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </div>
      

      

      {predictionResult !== null && (
        <div>
          <h2>Prediction Result:</h2>
          <p>{predictionResult}</p>
        </div>
      )}
    </form>
  );
};

export default SymptomForm;

