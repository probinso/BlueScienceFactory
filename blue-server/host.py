
import os
from sys import stderr

from flask import Flask, Response
from flask_cors import CORS
# from flask_jsonpify import jsonify
# from flask_restful import Resource, Api

from aco.aco import ACOio, datetime


app = Flask(__name__)
CORS(app)


BASEDIR = '/home/probinso/git/kellen-whales'
aco = ACOio(BASEDIR)


@app.route('/retrieve/')
@app.route('/retrieve/<string:timestr>/')
def retrieve(timestr='02:23:2016:22:07:26'):
    # datetime.now().strftime("%m:%d:%Y:%H:%M:%S")
    timestamp = datetime.strptime(timestr, "%m:%d:%Y:%H:%M:%S")
    try:
        result = aco.load(timestamp)
        return Response(result.get_stream(), mimetype="audio/x-wav")
    except FileNotFoundError as ex:
        print(ex)
        return Response(None, mimetype="audio/x-wav")


@app.after_request
def after_request(response):
    response.headers.add('Accept-Ranges', 'bytes')
    return response


if __name__ == "__main__":
    port = 5000
    # Open a web browser pointing at the app.
    os.system("open http://localhost:{0}".format(port))

    # Set up the development server on port 8000.
    app.debug = True
    app.run(port=port)


# FLASK_APP=host.py FLASK_ENV=development flask run
