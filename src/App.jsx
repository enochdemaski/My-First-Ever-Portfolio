import "./App.css";
import "./index.css";
import Navbar from "./component/homenavsection/Navbars";
import Herosection from "./component/homeherosection/Hero";
import details from "./component/Details";
import Card from "./component/CardComponent/Card";

function App() {
  return (
    <>
      <Navbar />
      <Herosection />

      <section className="containers shadow-[0_0_20px_white] bg-gray-300 border-2 border-gray-200 rounded-3xl  flex flex-wrap gap-4 justify-center p-3 items-center m-auto mt-1 w-[93%] lg:w-[98%] md:mt-0 md:flex-wrap lg:p-5 lg:grid lg:grid-cols-4 lg:h-screen hover:shadow-[0_4px_12px_rgba(0,0,0,0.7)] transition-all duration-900 ease-in-out">
        <h1 className="  w-97 m-auto lg:w-full md:w-full text-black text-5xl capitalize text-center  p-2 border-3 rounded-3xl border-t-white">
          my services
        </h1>
        {details.map((item) => (
          <Card key={item.id} name={item.name} title={item.title} />
        ))}
      </section>
    </>
  );
}

export default App;
