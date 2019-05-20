from flask import Flask
# from flask_restful import Resource, Api
from flask_cors import CORS
from flask_jsonpify import jsonify


app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
    # FLASK_APP=host.py FLASK_ENV=development flask run
    return jsonify({'text': 'Hello, World!'})
