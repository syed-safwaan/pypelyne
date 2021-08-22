import os
import sys
import psycopg2
import pandas as pd
from getConnection import get_connection

def compare(conn,uid1,uid2):
    score = 0
    udf = pd.read_sql(con = conn, sql="SELECT * FROM PROFILE WHERE id=%d OR id = %d" % (uid1,uid2))
    ldf = pd.read_sql(con = conn, sql="SELECT * FROM LIKING WHERE LIKER_ID=%d AND LIKED_ID=%d" % (uid1,uid2))
    bdf = pd.read_sql(con = conn, sql="SELECT * FROM BLOCKING WHERE (BLOCKER_ID=%d AND BLOCKED_ID=%d) OR (BLOCKER_ID=%d AND BLOCKED_ID=%d)" % (uid1,uid2,uid2,uid1))

    if not bdf.empty:
        score = -1
        return score

    if not ldf.empty:
        score += 1000000
    
    taglist1 = [udf.at[0,'tag%d_id' % i] for i in range(1,9) if udf.at[0,'tag%d_id' % i] is not None]
    taglist2 = [udf.at[1,'tag%d_id' % i] for i in range(1,9) if udf.at[1,'tag%d_id' % i] is not None]
    print(taglist1)
    print(taglist2)

    return score


def main():
    
    conn = get_connection()

    compare(conn, 686639686897805073, 686643247083267857)

    conn.close()


if __name__ == "__main__":
    main()

ins_new_user="INSERT INTO profile (name, email) VALUES ('{name}', '{email}');"
get_user="SELECT * FROM profile WHERE email='{email}';"
ins_tag="INSERT INTO TAG (NAME) VALUES ('{tag_name}') ON CONFLICT (NAME) DO NOTHING;"
get_tag_by_id="SELECT * FROM tag WHERE id = {tag_id};"