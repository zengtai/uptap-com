import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow overflow-hidden bg-[#941328]">{children}</main>
      <Footer />
    </div>
  );
}
