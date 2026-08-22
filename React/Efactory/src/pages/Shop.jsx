import { Link } from "react-router-dom";

function Shop() {
	return (
		<main className="min-h-screen bg-[#F3F4F6] p-8 text-[#111827]">
			<h1 className="text-4xl font-bold text-[#673AB7]">Shop</h1>
			<p className="mt-4 text-[#4B5563]">Explore the latest Efactory collection.</p>
			<Link to="/" className="mt-6 inline-block text-[#008573]">Back home</Link>
		</main>
	);
}

export default Shop;
