from flask import Flask, request, jsonify

app = Flask(__name__)

# Define routes for handling requests
@app.route('/bloodDonation', methods=['POST'])
def blood_donation():
    # Extract user input from request
    data = request.json
    age = int(data['age'])
    last_donation = data['lastDonation']

    # Process user input (simulate backend functionality)
    if age >= 18 and last_donation == 'no':
        result = {'eligible': True, 'message': 'You seem eligible to donate blood!'}
    else:
        result = {'eligible': False, 'message': 'You may not be eligible to donate blood.'}

    # Return results as JSON
    return jsonify(result)

if __name__ == '__main__':
    # Run the Flask application
    app.run(debug=True)
