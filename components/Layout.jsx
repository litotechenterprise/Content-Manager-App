import ActiveResouce from "./ActiveResouce";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <ActiveResouce />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
