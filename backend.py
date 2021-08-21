import psycopg2
import pandas as pd
from getConnection import connect5

def main():
    conn = connect5()
    
    df = pd.read_sql(con=conn, sql="SELECT version()")
    print(df)

    conn.close()

if __name__ == "__main__":
    main()