import "tailwindcss/tailwind.css";
import Link from "next/link";
import Head from "next/head";
import { Navigation } from "../components/Navigation/Navigation";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Welecome to your Profile</title>
      </Head>

      <main className="min-h-screen bg-gradient-to-tr from-green-400 to-blue-500 custom-blur flex items-center justify-center flex-col">
        <section id="main" className="glass rounded-3xl m-2"></section>
        <Navigation />
      </main>
    </>
  );
}
