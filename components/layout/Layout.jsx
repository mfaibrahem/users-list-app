import Footer from "../footer/Footer";
import MainAppBar from "../main-app-bar/MainAppBar";

const Layout = ({ children }) => {
	return (
		<>
			<MainAppBar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
