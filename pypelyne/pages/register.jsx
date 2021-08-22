import Layout from "../components/Layout";
import {Form, FormControl, Button, FormLabel, FormGroup} from 'react-bootstrap'
import {useRouter} from "next/router";
import Head from "next/head";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import {auth} from "../components/firebase/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useEffect} from "react";

export default function register() {
  const router = useRouter();

  const sw = withReactContent(Swal);

  const [user, loading, error] = useAuthState(auth);


  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) router.replace('/profile');
  }, [user, loading]);

  function register(e) {
    e.preventDefault();
    sw.fire({
      title: "Processing...",
      showConfirmButton: false,
      onOpen: () => {
        sw.showLoading();
      }
    });

    auth.createUserWithEmailAndPassword(e.target.email.value, e.target.password.value).then((userCredential) => {
      let user = userCredential.user;
      console.log(user);
      sw.fire({
        title: "success",
        icon: "success",
        showConfirmButton: false,
        timer: 3000
      }).then(() => {
        router.push("/profile");
      })
    }).catch((error) => {
      sw.fire({
        title: "Error",
        icon: "error",
        text: "Error occurred when registering",
        showCancelButton: true,
        showConfirmButton: false
      });
    });
  }

  return (
    <>
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Layout>
        <div className="login-wrap">
          <Form className="form-signin" onSubmit={register}>
            <img className="mb-4" alt="" width="72" height="72"
                 src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"/>
            <h1 className="h3 mb-3 font-weight-normal">Registration</h1>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password"/>
            </Form.Group>

            <div className="btn-toolbar flex justify-content-center">
              <Button variant="primary" type="submit" className="mr-3">
                Register
              </Button>
            </div>

          </Form>
        </div>
      </Layout>
    </>
  )
}