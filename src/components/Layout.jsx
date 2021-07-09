import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="main-block">
        <div className="container">{children}</div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
