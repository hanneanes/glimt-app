import './App.css'
import Header from "./Layout/Header/Header.js";
import Footer from "./Layout/Footer/Footer.js";
import Knapp from "./Komponenter/Knapper/Knapp.js";
import {Outlet} from "react-router";

function App() {

  return (
    <>
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
      <Footer />

    </>
  )
}

export default App
