import Jumbotron from "./Jumbotron.jsx";
import Catalog from "../pages/Catalog.jsx";
import Footer from "./Footer.jsx";

function Container() {

  return (
    <>
      <Jumbotron />
      <div className="px-24 py-8 mt-4">
        <Catalog />
      </div>
      <Footer />
    </>
  );
}

export default Container;