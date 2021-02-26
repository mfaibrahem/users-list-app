import Link from "next/link";
const MainAppBar = () => {
	return (
		<nav>
			<Link href="/" className="logo">
				<h1>LOGO</h1>
			</Link>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
		</nav>
	);
};

export default MainAppBar;
