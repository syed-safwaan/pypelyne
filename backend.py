import psycopg2
import getConnection.py

def main():
    con = psycopg2.connect()

    con.close()