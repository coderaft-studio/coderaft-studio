import SharedNav from "@/components/shared/Nav";

export const metadata = {
  title: "Blog UMKM Digital — Coderaft",
  description: "Tips, panduan, dan insight seputar website dan digital marketing untuk UMKM Indonesia.",
};

export default function BlogLayout({ children }) {
  return (
    <div style={{ background:"#070711", minHeight:"100vh" }}>
      <SharedNav />
      {children}
    </div>
  );
}
