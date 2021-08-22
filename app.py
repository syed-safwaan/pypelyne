import os
from dotenv import load_dotenv
from flask import Flask, request, Response, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS, cross_origin
import json
import backend
import traceback
import pandas as pd
from getConnection import get_connection

conn = get_connection()
cur = conn.cursor()

from flask_sqlalchemy import SQLAlchemy
# from backend import *

load_dotenv()

database = os.getenv("DB")
host = os.getenv("HOST")
port = os.getenv("PORT")
user = os.getenv("USERX")
password = os.getenv("PASS")


app = Flask(__name__)
cors = CORS(app)
#app.config['SQLAlchemy_DATABASE_URI'] = f'postgresql://{user}:{password}@{host}:{port}/defaultdb?sslmode=verify-full&sslrootcert=$HOME/.postgresql/root.crt&options=--cluster%3Dpypelyne-3048'
api = Api(app)
#db = SQLAlchemy(app)


def modify(SQL, params=tuple()):
    cur.execute(SQL, params)
    ret = cur.fetchone()
    conn.commit()
    if ret : return ret[0]
    return 0


@app.route("/", methods=["POST"])
def serve(path):
    pass
    # return send_from_directory(app.static_folder,'index.html')


@app.route("/api/register", methods=["POST"])
@cross_origin()
def register():
    data = request.get_json()
    
    for i, d in enumerate(data["tags"],1) :
        sql = "INSERT INTO TAG (NAME) VALUES (%s) ON CONFLICT (NAME) DO NOTHING RETURNING ID"
        tag_id = modify(sql, (d["value"],))
        print(tag_id, "TAGGGGGGGGGGG")

        sql = "INSERT INTO PROFILE (TAG%(int)s_ID) VALUES (%(int)s) RETURNING ID"
        print(sql, "LOOOOOOOOOOOOOOK")
        profile_id = modify(sql, (i,int(tag_id)))
        print(d, tag_id, profile_id)

    try:
        print(data)
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
    email = data['email']

    df = pd.read_sql(con=conn, sql=backend.get_user.format(email=email))
    result = json.loads(df.to_json(orient="index"))["0"]
    print(result , "LOOK OUT FOR ME OR SOMETHING LIKE THAT")

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

@app.route("/api/update_profile", methods=["POST"])
@cross_origin()
def profile2():
    data = request.get_json()
    print(data)
    email = data['email']
    bio = data['bio']

    try:
        modify(backend.modify_bio.format(email=email, bio=bio))
        return Response('{}', 200)
    except:
        traceback.print_exc()
        return Response('{}', 500)



# api.add_resource(HelloApiHandler, '/flask/hello')