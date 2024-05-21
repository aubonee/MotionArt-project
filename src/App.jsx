

import Banner from "./components/banner/Banner"
import Nav from "./components/navbar/Nav";
import TrustedBy from "./components/trustedBy/TrustedBy";
import PurchaseFromEnvato from "./components/purchaseFromEnvato/PurchaseFromEnvato";
import "./styles.css";


import "./styles.css";
import { useRef, useEffect } from 'react';
import Fluid from 'webgl-fluid';
import SupportedBy from "./components/SupportedBy/SupportedBy";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import ApplyOn from "./components/applyOn/ApplyOn";



export default function App() {
  const canvas = useRef(null)
  useEffect(function () {
    let c = canvas.current
    Fluid(c)
  }, [])
  return (
    <div className="App">
      <canvas ref={canvas} >
      
    
      </canvas>
      
        <Nav></Nav>
         <Banner></Banner>
         <TrustedBy></TrustedBy>
        <PurchaseFromEnvato></PurchaseFromEnvato>
        <ApplyOn></ApplyOn>
        <SupportedBy></SupportedBy>
        <Features></Features>
        <Footer></Footer>
        
    </div>
  );
}