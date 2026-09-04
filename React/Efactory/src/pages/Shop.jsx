import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import { products } from "../data/products";

function Shop() {
	const [searchParams] = useSearchParams();
	const searchTerm = searchParams.get("search")?.trim().toLowerCase() || "";
	const filteredProducts = products.filter((product) =>
		[product.title, product.category, product.description]
			.some((value) => value.toLowerCase().includes(searchTerm)),
	);

	return (
		<main className="min-h-screen bg-[#F3F4F6] p-8 text-[#111827]">
			<h1 className="text-4xl font-bold text-[#673AB7]">Shop</h1>
			<p className="mt-4 text-[#4B5563]">
				{searchTerm ? `Search results for "${searchParams.get("search")}"` : "Explore the latest Efactory collection."}
			</p>
			{filteredProducts.length > 0 ? (
				<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
				</div>
			) : (
				<p className="mt-8 text-[#4B5563]">No products match your search.</p>
			)}
			<Link to="/" className="mt-6 inline-block text-[#008573]">Back home</Link>
		</main>
	);
}

export default Shop;
