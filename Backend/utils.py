import pandas as pd
def helper(symptom_data):
    data = pd.read_csv('C:\\Users\\Nikita\\Desktop\\Disease\\datasets\\training\\training_dataset.csv')
    df = pd.DataFrame(data)

    # Creating the resulting dataframe
    result_df = df.assign(**{col: 1 if col in symptom_data else 0 for col in df.columns[:-1]}).head(1)
    result_df = result_df.drop('prognosis', axis=1)
    return result_df
