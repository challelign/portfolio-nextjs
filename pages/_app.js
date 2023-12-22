import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<Toaster position="top-center" />

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
