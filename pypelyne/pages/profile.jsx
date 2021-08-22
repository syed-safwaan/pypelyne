import "tailwindcss/tailwind.css";
import Link from "next/link";
import Head from "next/head";
import { Navigation } from "../components/Navigation/Navigation";
import { ProfilePicture } from "../components/Profile/Profile";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Welecome to your Profile</title>
      </Head>

      <main className="min-h-screen bg-gradient-to-tr from-green-400 to-blue-500 custom-blur flex items-center justify-center flex-col">
        <section id="main" className="glass rounded-3xl m-2">
          {/* <div className="glass rounded-2xl w-52 h-52 m-auto mt-4"></div> */}
          <ProfilePicture
            image="https://alextu2.s-ul.eu/v752lajE"
            className="glass rounded-2xl w-52 h-52 m-auto mt-4 z-50 relative"
          />
          <div
            className="glass rounded-2xl w-4/5 h-28 m-auto mt-4 z-40 relative"
            style={{ transform: "translateY(-8rem)" }}
          ></div>
        </section>
        <Navigation />
      </main>
    </>
  );
}
