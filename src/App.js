import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route></Route>
      </Routes>
      <Shop></Shop>
    </div>
  );
}

export default App;
