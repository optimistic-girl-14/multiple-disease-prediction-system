from flask import Flask, jsonify, request
import joblib
import pandas as pd
from utils import helper
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  




# Load your trained model
model = joblib.load('c:/Users/Nikita/Desktop/Disease/Backend/your_trained_model.pkl')




@app.route('/api/data', methods=['GET'])
def get_data():
    try:
        # Get symptom data from the request
        symptom_data = request.args.to_dict()
        symptom_data = list(symptom_data.values())
       
        print(symptom_data, type(symptom_data))

        input_data = helper(symptom_data)
        
        # Make predictions
        prediction = model.predict(input_data)[0]
        
        
        # Return the prediction as JSON
        return jsonify({"prediction": prediction})
       

    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)