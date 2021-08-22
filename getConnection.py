import dotenv
import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()

_database = os.getenv("DB")
_host = os.getenv("HOST")
_port = os.getenv("PORT")
_user = os.getenv("USERX")
_password = os.getenv("PASS")

#print(_database, _host, _port, _user, _password)


def get_connection():
    return psycopg2.connect(database=_database,
                            host=_host,
                            port=_port,
                            user=_user,
                            password=_password)
