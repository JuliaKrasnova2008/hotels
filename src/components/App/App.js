import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./App.css";
import Main from "../../pages/Main";
import Apartments from "../../pages/Apartments";
import Cottages from "../../pages/Cottages";
import BB from "../../pages/BB";
import Hotels from "../Hotels/Hotels";
import Favorite from "../../pages/Favorite";
import HotelPage from "../../pages/HotelPage";

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
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/hotels/:id" element={<HotelPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
