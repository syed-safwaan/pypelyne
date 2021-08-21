import os
import psycopg2
import pandas as pd
from getConnection import get_connection


def main():
    conn = get_connection()

    df = pd.read_sql(con=conn, sql="SHOW TABLES")
    print(df)

    conn.close()


if __name__ == "__main__":
    main()
