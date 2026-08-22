import { Link } from "react-router-dom";

function NotFound() {
	return (
		<main className="min-h-screen bg-[#F3F4F6] p-8 text-[#111827]">
			<h1 className="text-4xl font-bold text-[#673AB7]">Page not found</h1>
			<Link to="/" className="mt-6 inline-block text-[#008573]">Return home</Link>
		</main>
	);
}

export default NotFound;
