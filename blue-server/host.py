
import os
from sys import stderr

from flask import Flask, Response  # , send_file
from flask_cors import CORS
# from flask_jsonpify import jsonify
# from flask_restful import Resource, Api

from aco.aco import ACOio, datetime
from aco.aco import timedelta


app = Flask(__name__)
CORS(app)


BASEDIR = '/home/probinso/git/kellen-whales'
aco = ACOio(BASEDIR)


def stream(io, step=4096):
    # print("stream start", file=stderr)
    packet = io.read(step)
    while packet:
        yield packet
        packet = io.read(step)
    # print("stream end", file=stderr)


@app.route('/retrieve/raw/')
@app.route('/retrieve/raw/<string:timestr>/')
@app.route('/retrieve/raw/<string:timestr>/<int:seconds>')
def retrieve(
    timestr='02:23:2016:22:07:26',
    seconds=timedelta(minutes=6).total_seconds()
):
    timestamp = datetime.strptime(timestr, "%m:%d:%Y:%H:%M:%S")
    try:
        result = aco.load(timestamp, seconds)
        op = result.get_wav
        with open(f'boo.{op.extension}', 'wb') as fd:
            fd.write(op().read())
        return Response(
            stream(op()),
            mimetype=op.mime_type
        )
    except FileNotFoundError as ex:
        print(ex, file=stderr)
        return Response(None)


@app.after_request
def after_request(response):
    response.headers.add('Accept-Ranges', 'bytes')
    return response


if __name__ == "__main__":
    port = 5000
    # Open a web browser pointing at the app.
    os.system("open http://localhost:{0}".format(port))

    # Set up the development server.
    app.run(port=port, debug=True, threaded=True)


# FLASK_APP=host.py FLASK_ENV=development flask run
