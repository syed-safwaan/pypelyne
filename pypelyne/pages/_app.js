import 'tailwindcss/tailwind.css'
import '../assets/app.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div>      
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
