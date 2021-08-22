import os
from dotenv import load_dotenv
from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_sqlalchemy import SQLAlchemy
# from backend import *

load_dotenv()

database = os.getenv("DB")
host = os.getenv("HOST")
port = os.getenv("PORT")
user = os.getenv("USER")
password = os.getenv("PASS")

app = Flask(__name__)
app.config['SQLAlchemy_DATABASE_URI'] = f'postgresql://{user}:{password}@{host}:{port}/defaultdb?sslmode=verify-full&sslrootcert=$HOME/.postgresql/root.crt&options=--cluster%3Dpypelyne-3048'
api = Api(app)
db = SQLAlchemy(app)

@app.route("/", methods=["POST"])
def serve(path):
    pass
    # return send_from_directory(app.static_folder,'index.html')

# api.add_resource(HelloApiHandler, '/flask/hello')