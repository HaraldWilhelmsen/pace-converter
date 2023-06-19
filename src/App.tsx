import { useState } from "react";
import Home from "./home/home";
import Converter from "./converter/converter";
import Targets from "./targets/targets";
import "./app.css";
import NavBar from "./navbar/navbar";


export const PAGES = {
  "home": <Home />,
  "converter": <Converter />,
  "targets": <Targets />
}

export type pagesType = keyof typeof PAGES;

function App() {


  const [activePage, setActivePage] = useState<pagesType>("home")



  return (
    <>
      <div id="mainDocument">
      <div id="headerRow">
        <header onClick={() => setActivePage("home")}>
          Pace converter
        </header>
        <NavBar setActivePage={setActivePage}/>
      </div>

      <section id="mainContent">
        {PAGES[activePage]}
      </section>
      <footer>
        CopyRight Harald Wilhelmsen 2023
      </footer>
      </div>
    </>

  );
}

export default App;
