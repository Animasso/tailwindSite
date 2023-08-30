import Navbar from "./components/Navbar.jsx";
import {
  CustomerReviews,
  Footer,
  Hero,
  Popular,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections/index.js";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className=" xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Popular />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding-x py-10">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t pb-8 bg-black ">
        <Footer />
      </section>
    </main>
  );
};

export default App;
