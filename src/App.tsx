import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Technology from "./components/Technologies/Technologies";
import { Suspense } from "react";
import type { TypeTechnology } from "./Type/technologyType";

const technoFetch= async():Promise<TypeTechnology[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data; 
}
function App() {
 
  const technoPromise = technoFetch();
  return (
    <>
    <Nav></Nav>
    <Banner></Banner>

    <Suspense fallback= {<h2>Loading...</h2>}>
        <Technology technoPromise={technoPromise}></Technology>
    </Suspense>
      
    </>
  )
}

export default App
