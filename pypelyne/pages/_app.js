import '../assets/app.scss'
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>      
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
