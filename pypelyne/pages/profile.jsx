import "tailwindcss/tailwind.css";
import Link from "next/link";
import Head from "next/head";
import { Navigation } from "../components/Navigation/Navigation";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../components/firebase/firebase";
import {useEffect} from "react";
import {useRouter} from "next/router";

import { ProfilePicture } from "../components/Profile/ProfilePicture";
import { Tag } from "../components/Tags/Tag";

export default function Profile() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) router.replace('/');
  }, [user, loading]);

  return (
    <>
      <Head>
        <title>Welecome to your Profile</title>
      </Head>

      <main className="min-h-screen bg-gradient-to-tr from-green-400 to-blue-500 custom-blur flex items-center justify-center flex-col">
        <section id="main" className="glass rounded-3xl m-2">
          <ProfilePicture
            image="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            className="glass rounded-2xl w-52 h-52 m-auto mt-4"
          />
          <Tag
            tagText="C++"
            tagColour="bg-red-300"
            textColour="text-gray-600"
          />
        </section>

        <Navigation />
      </main>
    </>
  );
}
