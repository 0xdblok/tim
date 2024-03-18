import Image from "next/image";
import Navbar from ".//components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Footer from "./components/footer";
import Team from "./components/team";
import Raydium from "./components/raydium";
export default function Home() {
  return (
    <main className=" bg-lime-300">
      <div className="mx-auto container">
        <Navbar />
        <Hero />
        <h1 className="text-center pt-36 text-4xl font-semibold font-mono text leading-none sm:text-5xl">
          {" "}
          Our Teams
        </h1>
        <Team />
        <About />

        <Raydium />
        <Footer />
      </div>
    </main>
  );
}
