import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Layanan from "@/components/Layanan";
import Portofolio from "@/components/Portofolio";
import Tentang from "@/components/Tentang";
import Harga from "@/components/Harga";
import Testimoni from "@/components/Testimoni";
import Kontak from "@/components/Kontak";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Layanan />
      <Portofolio />
      <Tentang />
      <Harga />
      <Testimoni />
      <Kontak />
      <Footer />
    </main>
  );
}
