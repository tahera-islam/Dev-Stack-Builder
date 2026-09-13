import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Technology from "./components/Technologies/Technologies";
import { Suspense } from "react";
import type { TypeTechnology } from "./Type/technologyType";
import Footer from "./components/Footer";


const technoFetch= async():Promise<TypeTechnology[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data; 
}
function App() {
 
  const technoPromise = technoFetch();
  return (
    <>
    <div className="min-h-screen flex flex-col">
        <Nav></Nav>
        <Banner></Banner>

       <div className="flex-1">
          <Suspense fallback={<h2>Loading...</h2>}>
            <Technology technoPromise={technoPromise}></Technology>
          </Suspense>
       </div>

        <Footer></Footer>
    </div>
    </>
  )
}

export default App
