import SharedNav from "@/components/shared/Nav";

export const metadata = {
  title: "Kalkulator Harga Website — Coderaft",
  description: "Hitung estimasi biaya pembuatan website Anda dalam 2 menit. Transparan, tanpa biaya tersembunyi.",
};

export default function HitungLayout({ children }) {
  return (
    <div style={{ background:"#070711", minHeight:"100vh" }}>
      <SharedNav />
      {children}
    </div>
  );
}
