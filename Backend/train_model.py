import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load the dataset
df_train = pd.read_csv('C:\\Users\\Nikita\\Desktop\\Disease\\datasets\\training\\training_dataset.csv')
df_test = pd.read_csv('C:\\Users\\Nikita\\Desktop\\Disease\\datasets\\testing\\testing_dataset.csv')

# Separate features (X) and labels (y) for training
X_train = df_train.drop('prognosis', axis=1)
y_train = df_train['prognosis']

# Separate features (X) and labels (y) for testing
X_test = df_test.drop('prognosis', axis=1)
y_test = df_test['prognosis']

# Check Column Order
print("Training Columns:", list(X_train.columns))
print("Testing Columns:", list(X_test.columns))

# Reorder Columns in the Testing Dataset
X_test = X_test[X_train.columns]

# Check for Extra Columns
extra_columns = set(X_test.columns) - set(X_train.columns)
print("Extra Columns:", extra_columns)

# Check Data Types
print("Training Data Types:", X_train.dtypes)
print("Testing Data Types:", X_test.dtypes)

# Check for Null Values
print("Null Values in Testing Data:", X_test.isnull().sum())

# Initialize the model (you can choose a different model)
model = RandomForestClassifier()

# Train the model
model.fit(X_train, y_train)

# Save the trained model using joblib
joblib.dump(model, 'your_trained_model.pkl')

# Make predictions on the testing set
predictions = model.predict(X_test)
