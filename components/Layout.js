import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  return (
    <>
      <Header />
      <main className="flex-1">{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
