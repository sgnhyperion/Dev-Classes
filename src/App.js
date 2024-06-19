import logo from './logo.svg';
import './App.css';
import Products from './Products';
import Navbar from './Navbar/Navbar';
import Typewriter from './Typewriter';
// import {a,b} from './Products';
import Tile from './Tile';
import { Carousel } from 'nuka-carousel';
import Banner from './Banner';
import ProgressBar from './ProgressBar';
import { useEffect, useState } from 'react';
import AboutPage from './Pages/AboutPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/AboutPage';

function App() {
  // console.log(a,b)
  const[percentage,setPercentage] = useState(0);

  useEffect(()=>{
    // function increasePercent(percentage){
    //   setPercentage(percentage+10);
    // }
  
    const Interval = setInterval(()=>{
      setPercentage((percentage)=>{
        if(percentage<100){
          percentage = percentage+10;
        } else{
          percentage = 100;
        }

        return percentage;
      });


    },100);

    return ()=>{clearInterval(Interval)};
  });
  return (
    <div className="App">
      {/* <p>{a},{b}</p> */} 
       <Navbar />
      <Typewriter text={[
        "Awesome",
        "Software Developer",
        "Mern Stack Developer"
      ]}
      typingSpeed={100}
      deletingSpeed={50}
      duration={1000}
      />
      <br></br>

      <Tile header={"Class is going on"}
            subHeader={"Everyone is making a tile"}
            img={"https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"}
            text={"Hii"}
            link={"https://www.scaler.com"}
            linkText={"Scaler"}
            position={"image-right"}
            bgcolor={"red"}

      />
      <br></br>
      <Banner />
      <br></br>
      <ProgressBar percentage={percentage}/>
      <br></br>
      <Products />
   
    {/* <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/About" element={<AboutPage/>}/>
      </Routes>
    </Router> */}
    </div> 
  );
}

export default App;
