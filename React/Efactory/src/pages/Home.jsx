import { FiArrowUpRight, FiCheck, FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const featuredProducts = [
  {
    name: "Apex Runner 01",
    category: "Sneakers",
    price: "$128",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Studio Heavyweight",
    category: "Apparel",
    price: "$68",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Signal Crossbody",
    category: "Accessories",
    price: "$54",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
  },
];

const categories = [
  {
    name: "Sneakers",
    detail: "Built to move",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Apparel",
    detail: "Wear the energy",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Accessories",
    detail: "Finish strong",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#111827]">
      <Navbar />

      <main>
        <section className="relative mx-auto grid max-w-7xl overflow-hidden bg-[#512DA8] lg:grid-cols-2">
          <div className="relative z-10 flex flex-col justify-center px-6 py-20 text-white sm:px-12 lg:px-16 lg:py-28">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#33D0B8]">
              The everyday upgrade
            </p>
            <h1 className="max-w-xl text-6xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-8xl">
              Make room for <span className="text-[#33D0B8]">more.</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-purple-100">
              Bold essentials for the way you move. Curated pieces, electric color, and zero room for ordinary.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-5 bg-[#00BFA5] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#008573]"
              >
                Explore the drop <FiArrowUpRight aria-hidden="true" />
              </Link>
              <a
                href="#featured"
                className="inline-flex items-center gap-3 border border-white/40 px-5 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#512DA8]"
              >
                <FiPlay aria-hidden="true" /> See what&apos;s new
              </a>
            </div>
            <div className="mt-16 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-purple-200">
              <span className="text-[#33D0B8]">01</span>
              <span className="h-px w-10 bg-[#33D0B8]" />
              Fresh energy, daily
            </div>
          </div>
          <div className="relative min-h-[390px] overflow-hidden bg-[#673AB7] lg:min-h-[620px]">
            <div className="absolute inset-8 border border-white/30" />
            <div className="absolute right-10 top-10 h-24 w-24 rounded-full bg-[#00BFA5]" />
            <div className="absolute bottom-10 left-8 h-10 w-10 rounded-full bg-[#FFB300]" />
            <img
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=90"
              alt="Purple sneakers from the Efactory collection"
              className="relative h-full min-h-[390px] w-full object-cover mix-blend-multiply"
            />
            <p className="absolute bottom-16 right-5 text-[10px] font-bold tracking-[0.22em] text-white [writing-mode:vertical-rl]">
              BUILT FOR THE NEXT MOVE
            </p>
            <p className="absolute left-14 top-16 text-xs font-bold leading-6 tracking-[0.15em] text-white">
              EF / 026
              <br />
              <span className="text-[#33D0B8]">MOVE DIFFERENT</span>
            </p>
          </div>
        </section>

        <section className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 bg-[#00BFA5] px-5 py-5 text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:gap-x-12">
          <span>Shop more</span><b className="text-[#512DA8]">✦</b>
          <span>Pay less</span><b className="text-[#512DA8]">✦</b>
          <span>Live better</span><b className="text-[#512DA8]">✦</b>
          <span>Stay in motion</span>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#008573]">Shop by mood</p>
              <h2 className="text-5xl font-bold tracking-[-0.06em] sm:text-6xl">Find your <span className="text-[#673AB7]">frequency.</span></h2>
            </div>
            <Link to="/shop" className="inline-flex items-center gap-3 text-sm font-bold text-[#673AB7]">View all categories <FiArrowUpRight aria-hidden="true" /></Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {categories.map((category) => (
              <Link to="/shop" key={category.name} className="group relative min-h-[300px] overflow-hidden bg-[#673AB7]">
                <img src={category.image} alt={category.name} className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white"><p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-[#33D0B8]">{category.detail}</p><h3 className="text-3xl font-bold tracking-[-0.04em]">{category.name}</h3></div>
                <span className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white text-[#673AB7]"><FiArrowUpRight aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </section>

        <section id="featured" className="bg-white px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex items-end justify-between gap-5"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#008573]">Curated for momentum</p><h2 className="text-5xl font-bold tracking-[-0.06em] sm:text-6xl">Latest <span className="text-[#673AB7]">drops</span></h2></div><Link to="/shop" className="hidden items-center gap-3 text-sm font-bold text-[#673AB7] sm:flex">Shop everything <FiArrowUpRight aria-hidden="true" /></Link></div>
            <div className="grid gap-6 sm:grid-cols-3">
              {featuredProducts.map((product) => (
                <article key={product.name} className="group"><div className="relative h-72 overflow-hidden bg-[#F3F4F6]"><img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-4 top-4 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#512DA8]">New drop</span></div><div className="flex items-start justify-between gap-4 py-5"><div><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#008573]">{product.category}</p><h3 className="text-lg font-bold">{product.name}</h3></div><strong className="text-[#512DA8]">{product.price}</strong></div></article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 bg-[#673AB7] px-6 py-10 text-white sm:flex-row sm:items-center sm:px-10">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#33D0B8]">Your next favorite is here</p>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">Ready to move different?</h2>
          </div>
          <Link to="/shop" className="inline-flex shrink-0 items-center gap-5 bg-[#00BFA5] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#008573]">
            Shop the new drop <FiArrowUpRight aria-hidden="true" />
          </Link>
        </section>

        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:py-28">
          <div><p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#008573]">The Efactory promise</p><h2 className="max-w-lg text-5xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-6xl">Good energy is <span className="text-[#673AB7]">always</span> in style.</h2><p className="mt-6 max-w-md text-base leading-7 text-[#4B5563]">Small runs. Fair prices. Pieces designed to be worn hard and loved longer. We make getting dressed feel like a fresh start.</p><Link to="/shop" className="mt-8 inline-flex items-center gap-5 bg-[#673AB7] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#512DA8]">Shop the collection <FiArrowUpRight aria-hidden="true" /></Link></div>
          <div className="grid gap-3 sm:grid-cols-2"><div className="bg-[#673AB7] p-7 text-white"><FiCheck className="mb-14 text-[#33D0B8]" size={25} /><h3 className="text-2xl font-bold">Free express shipping</h3><p className="mt-3 text-sm text-purple-100">On every order over $100.</p></div><div className="mt-8 bg-[#00BFA5] p-7 text-white sm:mt-0"><FiCheck className="mb-14 text-[#512DA8]" size={25} /><h3 className="text-2xl font-bold">Easy 30-day returns</h3><p className="mt-3 text-sm text-teal-950">No stress, no questions asked.</p></div></div>
        </section>
      </main>
    </div>
  );
}

export default Home;
