import Layout from "../components/Layout";
import {Form, FormControl, Button, FormLabel, FormGroup} from 'react-bootstrap';
import {useRouter} from "next/router";
import React, {useEffect} from "react";
import Head from "next/head";
import {auth} from "../components/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

function Home() {
  const [user, loading, error] = useAuthState(auth);

  const router = useRouter();
  const sw = withReactContent(Swal);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) router.replace('/profile');
  }, [user, loading]);


  function login(e) {
    e.preventDefault();
    sw.fire({
      title: "Processing...",
      showConfirmButton: false,
      onOpen: () => {
        sw.showLoading();
      }
    });

    auth.signInWithEmailAndPassword(e.target.email.value, e.target.password.value).then((userCredential) => {
      let user = userCredential.user;
      console.log(user);
      sw.close();
    }).catch((error) => {
      sw.fire({
        title: "Error",
        icon: "error",
        text: "Invalid username or password",
        showCancelButton: true,
        showConfirmButton: false
      });
    });
  }

  function redirectRegister(e) {
    e.preventDefault();
    router.push("/register");
  }

  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Layout>
        <div className="login-wrap">
          <Form className="form-signin" onSubmit={login}>
            <img className="mb-4" alt="" width="72" height="72"
                 src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"/>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
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
                Login
              </Button>
              <Button variant="primary" onClick={redirectRegister}>
                Register
              </Button>
            </div>

          </Form>
        </div>
      </Layout>
    </>
  )
}

export default Home;