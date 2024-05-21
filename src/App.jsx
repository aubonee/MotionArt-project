

import Banner from "./components/banner/Banner"
import Nav from "./components/navbar/Nav";
import TrustedBy from "./components/trustedBy/TrustedBy";
import PurchaseFromEnvato from "./components/purchaseFromEnvato/PurchaseFromEnvato";
import "./styles.css";


import "./styles.css";
import { useRef, useEffect, useState } from 'react';
import Fluid from 'webgl-fluid';

// export default function App() {
//   const canvasRef = useRef(null);
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     const c = canvasRef.current;
//     Fluid(c);
//   }, []);

//   // bg-[#0E0F1A]
//   return (
//     <div className="App">
//       <div className=" " onMouseMove={() => setHovered(true)} onMouseEnter={() => setHovered(true)}  onMouseLeave={() => setHovered(false)}>
//         <div className="overlay">
//         <Nav></Nav>
//         <Banner></Banner>
//         <TrustedBy></TrustedBy>
//         <PurchaseFromEnvato></PurchaseFromEnvato>
//         </div>
     
//         </div>
    
//       <canvas
//         ref={canvasRef}
//         style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, visibility: hovered ? 'visible' : 'hidden' }}
//       ></canvas>
//     </div>
//   );
// }


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
      <div className="">
        <Nav></Nav>
         <Banner></Banner>
         <TrustedBy></TrustedBy>
        <PurchaseFromEnvato></PurchaseFromEnvato>
        </div>
    </div>
  );
}