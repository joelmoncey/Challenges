import { Link } from "react-router-dom";

function Cart() {
	return (
		<main className="min-h-screen bg-[#F3F4F6] p-8 text-[#111827]">
			<h1 className="text-4xl font-bold text-[#673AB7]">Your cart</h1>
			<p className="mt-4 text-[#4B5563]">Your Efactory cart is currently empty.</p>
			<Link to="/shop" className="mt-6 inline-block text-[#008573]">Continue shopping</Link>
		</main>
	);
}

export default Cart;
