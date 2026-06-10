import SharedNav from "@/components/shared/Nav";

export const metadata = {
  title: "Tools Gratis untuk UMKM — Coderaft",
  description: "Kumpulan tools digital gratis untuk membantu bisnis UMKM Anda.",
};

export default function ToolsLayout({ children }) {
  return (
    <div style={{ background:"#070711", minHeight:"100vh" }}>
      <SharedNav />
      {children}
    </div>
  );
}
