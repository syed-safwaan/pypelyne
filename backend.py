import os
import sys
import psycopg2
import pandas as pd
from getConnection import get_connection


def compare(conn,uid1,uid2):
    score = 0

    return score

def main():
    conn = get_connection()

    df = pd.read_sql(con=conn, sql="SHOW TABLES")
    print(df)

    conn.close()


if __name__ == "__main__":
    main()
