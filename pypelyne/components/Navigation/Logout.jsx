import Link from "next/link";
import {useRouter} from "next/router";
import {useAuthState} from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import {auth} from "../firebase/firebase";

export const LogoutItem = ({ title, icon }) => {
  const router = useRouter();
  const sw = withReactContent(Swal);
  const [user, loading, error] = useAuthState(auth);

  function logout(e) {
    e.preventDefault();
    sw.fire({
      title: "Processing...",
      showConfirmButton: false,
      onOpen: () => {
        sw.showLoading();
      }
    });

    auth.signOut().then(() => {
      sw.fire({
        title: "Success",
        icon: "success",
        text: "Redirecting to login page",
        timer: 3000,
      }).then(() => {
        router.push("/")
      });
    }).catch((error) => {
      sw.fire({
        title: "Success",
        icon: "error",
        text: "An error has occurred, please try again later"
      });
    });
  }

  return (
    <li>
      <div className="flex items-center justify-center flex-col p-1">
        <div className="m-1 h-1">{icon}</div>

        <a className="inline-flex items-center p-2 mr-1 ml-1 mt-3" style={{cursor: "pointer"}} onClick={logout}>
          <span className="">
            <b>{title}</b>
          </span>
        </a>
      </div>
    </li>
  );
};
