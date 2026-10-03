import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Inventory from "./pages/Inventory"
import Financing from "./pages/Financing"
import HowToBuy from "./pages/HowToBuy"
import LocationsPage from "./pages/LocationsPage"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/inventory" element={ <Inventory /> }/>
          <Route path="/financing" element={ <Financing /> }/>
          <Route path="/how-to-buy" element={ <HowToBuy /> }/>
          <Route path="/locations" element={ <LocationsPage /> }/>
          <Route path="/contact" element={ <Contact /> }/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
