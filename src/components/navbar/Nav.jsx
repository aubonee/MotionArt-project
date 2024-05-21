


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../assets/MotionArtEffect-logo.png"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Nav = () => {
  
  useGSAP(()=>{
    gsap.from(".box",{
        y:-500,
        duration:1,
        delay:0.5,
    })
  })
    return (
     
        <div  >
    <div className='box w-11/12 mx-auto pt-10'>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
           
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src={logo} alt="" />
    
    
          </Typography>
         
        
    <button className=" btn bg-[#FFFFFF] px-5 py-3 rounded-md text-black">Purchase Now</button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
        </div>
    );
};

export default Nav;