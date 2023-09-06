import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./App.css";
import Main from "../../pages/Main";
import Apartments from "../../pages/Apartments";
import Cottages from "../../pages/Cottages";
import BB from "../../pages/BB";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/cottages" element={<Cottages />} />
          <Route path="/bb" element={<BB />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
