import { React,useState,useEffect } from 'react'
import './App.css'
import { BsInstagram,BsLinkedin,BsFacebook,BsYoutube } from "react-icons/bs";

function Header(){
  const [isIntersecting,setintersecting]=useState(false)

  const [menubtnstate,setmenustate]=useState(false)

  function changeheaderstate(){
    (window.scrollY>=64)? setintersecting(true):setintersecting(false);
  }
  window.addEventListener('scroll',changeheaderstate);
  const jsxelement=(
    <>
    <header className={'text-white flex flex-row sticky h-16 z-10 top-0 '+(isIntersecting? 'bg-black':'')}>
      <div className='relative w-full h-full flex flex-row'>
        <h1 className='p-5 text-xl font-medium'>IEEE SB CEC</h1>
        <nav className='absolute right-5 py-5 flex flex-row gap-5 max-[575px]:hidden'>
          <a href="" className='text-[#b4b4b4] hover:text-white'>Home</a>
          <a href="" className='text-[#b4b4b4] hover:text-white'>About us</a>
        </nav>
        <nav className='hidden absolute right-5 py-5 flex-row gap-5 max-[575px]:flex'>
          <div className="menu-container cursor-pointer" onClick={()=>{setmenustate(!menubtnstate)}}>
            <div className={"bar1 "+(menubtnstate? 'change':"")} ></div>
            <div className={"bar2 "+(menubtnstate? 'change':"")} ></div>
            <div className={"bar3 "+(menubtnstate? 'change':"")} ></div>
          </div>
        </nav>
      </div>
    </header>
    <div className={'side-nav '+(menubtnstate?"side-nav-active slide-in-animation":"slide-out-animation")}>
      <div className='flex flex-col p-10'>
        <a href="" className='text-center text-lg'>Home</a>
        <a href="" className='text-center text-lg'>About us</a>
      </div>
      <div className='h-[75%]'></div>
      < div className='flex flex-row gap-[15px] justify-center bottom-0'>
          <a href="https://www.instagram.com/ieee_sb_cec/" className='socials'><BsInstagram size={20} className='socials'/></a>
          <a href="https://www.linkedin.com/company/cecieee/" className='socials'><BsLinkedin size={20} className='socials'/></a>
          <a href="https://www.facebook.com/IEEECEC/" className='socials'><BsFacebook size={20} className='socials'/></a>
          <a href="https://www.youtube.com/channel/UCXh6fVbDGCIidsVHabpZFiw" className='socials'><BsYoutube size={20}  href='www.youtube.com'/>
        </a>
      </div>
    </div>
    </>
  )
  useEffect(()=>{
    document.body.style.overflowY= menubtnstate? 'hidden':'scroll'
  },[menubtnstate]);
  return jsxelement
}

function ImageSlideshow(){
  // Dataset
  const listofimgaeslides=[
    "/Hero.jpg",
    "/Slide1.jpg",
    "/Slide2.jpg",
    "/Slide3.jpg"];
  
  //Variables
  const [currentindex,changeindex]=useState(0);

  const jsxelement=(
    <>
    <div className='absolute w-screen h-screen top-0 right-0 bg-cover bg-center transition-all duration-[0.5s] ease-in bg-fixed'style={{backgroundImage:`url(${listofimgaeslides[currentindex]})`}}>

    </div>
    </>
  );
  useEffect(()=>{
    const intervalid=setInterval(() => {
      if ((currentindex+1)<listofimgaeslides.length){
        changeindex(currentindex+1)
      }
      else{
        changeindex(0)
      }


    }, 10000);
    return ()=>clearInterval(intervalid);

  }

  )
  return jsxelement;
}

function HeroSection(){
  const jsxelement=(
    <>
    <div className='absolute h-screen  w-screen z-[2] right-0 top-0 bg-gradient-to-b from-black to-transparent'>
      <div className='flex flex-col w-fit  text-white ml-10 h-screen place-content-center'>
        <span>Welcome to </span>
        <span className='font-600 text-50 h-[56.7px] max-[400px]:text-35'>IEEE</span>
        <span className='font-600 text-50 h-[56.7px] max-[400px]:text-35'>Student Branch</span>
        <span className='font-600 text-50 h-[56.7px] max-[400px]:text-35'>CE Chengannur</span>
        <a href="" className='rounded-3xl  border-2  w-[130px] h-[50px] justify-center flex items-center my-5 cursor-pointer hover:bg-white hover:text-black transition-all duration-75'> Join IEE</a>

      </div>
      <div className='absolute bottom-0 bg-black h-16 w-screen flex flex-row gap-5 items-center p-5 max-[575px]:h-10'>
        <a href="" className='text-[#b4b4b4] hover:text-white max-[575px]:text-xs'>IEEE.org</a>
        <a href="" className='text-[#b4b4b4] hover:text-white max-[575px]:text-xs'>IEEE Xplore Digital Library</a>
        <a href="" className='text-[#b4b4b4] hover:text-white max-[575px]:text-xs'>IEEE Region 10</a>
        <div className='absolute right-5 w-fit h-full flex flex-row gap-5 items-center max-[575px]:hidden'>
          <a href="https://www.instagram.com/ieee_sb_cec/" className='text-[#b4b4b4] hover:text-white cursor-pointer'><BsInstagram size={20} /></a>
          <a href="https://www.linkedin.com/company/cecieee/" className='text-[#b4b4b4] hover:text-white cursor-pointer'><BsLinkedin size={20} /></a>
          <a href="https://www.facebook.com/IEEECEC/" className='text-[#b4b4b4] hover:text-white cursor-pointer'><BsFacebook size={20} /></a>
          <a href="https://www.youtube.com/channel/UCXh6fVbDGCIidsVHabpZFiw" className='text-[#b4b4b4] hover:text-white cursor-pointer'><BsYoutube size={20}  href='www.youtube.com'/></a>


        </div>

      </div>
    </div>
    </>
  );
  return jsxelement;
}

function Aboutieee(){
  const jsxelement=(
    <>
    <div className='w-full h-fit flex flex-col px-[50px] overflow-x-hidden'>
      <div className='flex flex-col'>

        <h2 className='text-3xl font-semibold text-[#002e5b] self-center'>About IEEE</h2>
        <p className='self-center w-[500px] text-center py-4 max-[575px]:w-fit'>IEEE is a global association and organization of professionals working toward the development, implementation and maintenance of technology-centered products and services.</p>
      </div>
      <div className='flex flex-row max-[1020px]:flex-wrap max-[575px]:flex-col'>
        <div className='basis-1/2 flex flex-col my-3 max-[1020px]:basis-full'>
            <h2 className='text-2xl font-medium text-[#002e5b] self-center'>Our Mission</h2>
            <p className='self-center w-[600px] text-center py-4 max-[635px]:w-fit'>IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.</p>
        </div>
        <div className='flex flex-col basis-1/2 my-3 max-[1020px]:basis-full'>
          <h2 className='text-2xl self-center font-medium text-[#002e5b]'>Our Vision</h2>
          <p className='text-center self-center w-[400px] py-4 max-[575px]:w-fit'>IEEE’s core purpose is to foster technological innovation and excellence for the benefit of humanity.</p>

        </div>
      </div>
    </div>
    
    </>
  );
  return jsxelement;
}

function App() {
  
  const jsxelement=(
    <>
    <Header/>
    <ImageSlideshow/>
    <HeroSection/>
    
    <div className='h-fit bg-white  flex flex-col'>
      <div className='w-screen h-screen '></div>
        <Aboutieee/>
    </div>
    <div className='w-screen h-screen bg-transparent'></div>
    </>
  )
  return jsxelement
}

export default App
