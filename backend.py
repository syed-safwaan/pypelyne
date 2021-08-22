import os
import psycopg2
import pandas as pd
from getConnection import get_connection

us_df = pd.read_csv("../US/uscities.csv")
ca_df = pd.read_csv("../CA/canadacities.csv")

def main():
    conn = get_connection()
    cur = conn.cursor()

    for row in us_df.itertuples():
        sql = "INSERT INTO LOCATION (CITY, REGION, COUNTRY) VALUES (%s, %s, %s) RETURNING ID;"
        cur.execute(sql, (row.city_ascii, row.state_id, "US"))
        # print(cur.fetchone()[0])
    conn.commit()
    cur.close()


    df = pd.read_sql(con=conn, sql="SHOW TABLES")
    print(df)

    conn.close()


if __name__ == "__main__":
    main()
