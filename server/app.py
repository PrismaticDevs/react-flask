from flask import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/data')
def data():
    data = {
        "greetings":["hi","hey"]
    }
    return jsonify(data)

# @app.route('/create', method="post")
# def create():
#     result = request.form['greeting']
#     return result

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")