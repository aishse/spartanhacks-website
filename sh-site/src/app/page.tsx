import Image from "next/image";
import Hero from "./Hero";
import Navbar from "./Components/Navbar";
export default function Home() {
  return (
    <main className="bg-[#fffcf0] gap-4 flex min-h-screen flex-col items-center p-24">
        
        <Hero/>
    </main>
  );
}
