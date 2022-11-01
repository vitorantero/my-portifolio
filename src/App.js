import Navbar from "./componentes/Navbar/Navbar";
import Banner from "./componentes/Banner/Banner";
import Card from "./componentes/Cards/Cards";
import Novidades from "./componentes/Novidades/Nov";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Card/>
      <Novidades/>
    </div>
  );
}

export default App;
