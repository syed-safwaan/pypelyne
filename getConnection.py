import psycopg2

def connect5():
    return psycopg2.connect(database = "pypelyne-3048.defaultdb",
                            host = "free-tier.gcp-us-central1.cockroachlabs.cloud",
                            port = 26257,
                            user = "rastera",
                            password = "#GiTogether2017#")