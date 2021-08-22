import os
import sys
import psycopg2
import pandas as pd
from getConnection import get_connection

def compare(conn,uid1,uid2):
    score = 0
    udf = pd.read_sql(con = conn, sql="SELECT * FROM profile WHERE id=%d OR id = %d" % (uid1,uid2))

    print(udf)

    return score


def main():
    conn = get_connection()

    compare(conn, 686639686897805073, 686643247083267857)

    conn.close()


if __name__ == "__main__":
    main()

ins_new_user="INSERT INTO profile (name, email) VALUES ('{name}', '{email}');"