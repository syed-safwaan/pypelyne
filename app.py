import os
from dotenv import load_dotenv
from flask import Flask, request, Response, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS, cross_origin
import json
import backend
import traceback
import pandas as pd

conn = backend.get_connection()

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


def modify(SQL):
    cur = conn.cursor()
    cur.execute(SQL)
    conn.commit()
    cur.close()


@app.route("/", methods=["POST"])
def serve(path):
    pass
    # return send_from_directory(app.static_folder,'index.html')


@app.route("/api/register", methods=["POST"])
@cross_origin()
def register():
    data = request.get_json()

    try:
        print(backend.ins_new_user.format(name=data['name'], email=data['email']))
        modify(backend.ins_new_user.format(name=data['name'], email=data['email']))
        return Response('{}', 200)
    except:
        traceback.print_exc()
        return Response('{}', 500)


@app.route("/api/profile", methods=["POST"])
@cross_origin()
def profile():
    data = request.get_json()
    #email = data['email']

    email = "Alextu85@yahoo.ca"

    df = pd.read_sql(con=conn, sql=backend.get_user.format(email=email))
    result = json.loads(df.to_json(orient="index"))["0"]
    print(result)

    result['user_tag'] = []

    for k, v in list(result.items()):
        print(k, v)
        if k.startswith("tag"):
            if v is not None:
                df = pd.read_sql(con=conn, sql=backend.get_tag_by_id.format(tag_id=v))
                temp = json.loads(df.to_json(orient="index"))["0"]

                result["user_tag"].append(temp["name"])
            del result[k]

    print(result)

    return Response(json.dumps(result), 200)



# api.add_resource(HelloApiHandler, '/flask/hello')