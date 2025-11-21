import "./App.css";
import "./index.css";
import Navbar from "./component/homenavsection/Navbars";
import Herosection from "./component/homeherosection/Hero";
import Card from "./component/CardComponent/Card";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Herosection />
      <h1 className=" mt-2 text-black text-5xl capitalize text-center  p-2 border-2 border-t-white">
        my services
      </h1>
      <div>
        <Card />
        {/* <Card />
        <Card />
        <Card /> */}
      </div>
    </>
  );
}

export default App;
