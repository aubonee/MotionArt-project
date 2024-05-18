
import Banner from "./components/banner/Banner"
import './App.css'
import Nav from "./components/navbar/Nav";
import TrustedBy from "./components/trustedBy/TrustedBy";
import PurchaseFromEnvato from "./components/purchaseFromEnvato/PurchaseFromEnvato";


const App = () => {
  return (
    <div>
      
       <div className='font bg-[#0E0F1A]'>
         <Nav></Nav>
        <Banner></Banner>
        <TrustedBy></TrustedBy>
        <PurchaseFromEnvato></PurchaseFromEnvato>
        </div>
    </div>
  );
};

export default App;