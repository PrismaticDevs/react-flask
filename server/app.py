from flask import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

data = {
        "greetings":["hi","hey"]
    }

@app.route('/data')
def getData():
    return data

@app.route('/create', methods=["POST"])
def create():
    result = request.get_data()
    return data.append(result)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port="5001")