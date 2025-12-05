import "./App.css";
import "./index.css";
import Navbar from "./component/homenavsection/Navbars";
import Herosection from "./component/homeherosection/Hero";
import Card from "./component/CardComponent/Card";

function App() {
  return (
    <>
      <Navbar />
      <Herosection />

      <h1 className="  w-110 lg:w-full md:w-full m-auto text-black text-5xl capitalize text-center  p-2 border-3 rounded-3xl border-t-white">
        my services
      </h1>
      <section className="containers shadow-[0_0_20px_white] bg-gray-300 border-2 border-gray-200 rounded-3xl  flex flex-wrap gap-4 justify-center items-center m-auto mt-1 w-[75%] lg:w-[98%] md:mt-0 md:flex-wrap lg:p-5 lg:grid lg:grid-cols-4 lg:h-screen">
        <Card title="Web development" name="Developer" id="1" />
        <Card title="Graphic Design" name="Art" id="2" />
        <Card title="Video Editor" name="Animation" id="3" />
        <Card title="Video Editor" name="Animation" id="3" />
        <Card title="Video Editor" name="Animation" id="3" />
      </section>
    </>
  );
}

export default App;
