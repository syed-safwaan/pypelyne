import os
from dotenv import load_dotenv
from flask import Flask, request, Response, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS, cross_origin
import json

from flask_sqlalchemy import SQLAlchemy
# from backend import *

load_dotenv()

database = os.getenv("DB")
host = os.getenv("HOST")
port = os.getenv("PORT")
user = os.getenv("USER")
password = os.getenv("PASS")

app = Flask(__name__)
cors = CORS(app)
#app.config['SQLAlchemy_DATABASE_URI'] = f'postgresql://{user}:{password}@{host}:{port}/defaultdb?sslmode=verify-full&sslrootcert=$HOME/.postgresql/root.crt&options=--cluster%3Dpypelyne-3048'
api = Api(app)
#db = SQLAlchemy(app)


@app.route("/", methods=["POST"])
def serve(path):
    pass
    # return send_from_directory(app.static_folder,'index.html')


@app.route("/api/register", methods=["POST"])
@cross_origin()
def register():
    data = request.get_json()

    return Response('[]', 200)


@app.route("/api/profile", methods=["GET"])
@cross_origin()
def profile():
    data = request.get_json()
    email = data['email']

    return Response(json.dumps({}), 200)



# api.add_resource(HelloApiHandler, '/flask/hello')