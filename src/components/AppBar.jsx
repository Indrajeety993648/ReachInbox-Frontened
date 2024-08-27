import logo from "../assets/logo.png";

function AppBar() {
	return (
		<div className="border-[#25262B] bg-black border-b-2 fixed text-white h-16 w-screen flex items-center justify-center">
			<div className="flex items-center space-x-2">
				<img
					src={logo}
					className="h-8 rounded-xl object-left"
					alt="Logo"
				/>
				<h1 className="text-lg">ReachInbox</h1>
			</div>
		</div>
	);
}

export default AppBar;
