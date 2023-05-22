// Standard React Imports
import { React,useState,useEffect } from 'react'
import './App.css'

// React Icon Imports
import { BsInstagram,BsLinkedin,BsFacebook,BsYoutube,BsAirplaneEngines,BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import {BiLibrary} from "react-icons/bi";
import {SlGraduation} from "react-icons/sl";
import {CgGirl} from "react-icons/cg";

// React Components Imports
import AOS from 'aos';
import 'aos/dist/aos.css';



//Global Variables
var joinuslink="https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join"
AOS.init({once:true});



//Components

// Socials icon list
function Followus(){
  const jsxelements = (
    <>
      <a href="https://www.instagram.com/ieee_sb_cec/" className='text-[#b4b4b4] hover:text-white cursor-pointer hover:-translate-y-[1px]'><BsInstagram size={20} /></a>
      <a href="https://www.linkedin.com/company/cecieee/" className='text-[#b4b4b4] hover:text-white cursor-pointer hover:-translate-y-[1px]'><BsLinkedin size={20} /></a>
      <a href="https://www.facebook.com/IEEECEC/" className='text-[#b4b4b4] hover:text-white cursor-pointer hover:-translate-y-[1px]'><BsFacebook size={20} /></a>
      <a href="https://www.youtube.com/channel/UCXh6fVbDGCIidsVHabpZFiw" className='text-[#b4b4b4] hover:text-white cursor-pointer hover:-translate-y-[1px]'><BsYoutube size={20}  href='www.youtube.com'/></a>
    </>
  );
  return jsxelements;
}

//Header
function Header(){

  //Variables
  const [isIntersecting,setintersecting]=useState(false)
  const [menubtnstate,setmenustate]=useState(false)

  //Functions
  function changeheaderstate(){
    (window.scrollY>=64)? setintersecting(true):setintersecting(false);
  }
  
  // Event Listener
  window.addEventListener('scroll',changeheaderstate);
  
  //Main HTML
  const jsxelement=(
    <>
    <header className={'text-white flex flex-col sticky h-16 z-10 top-0 '+(isIntersecting? 'bg-black':'')} id="main-page">
      <div className='relative w-full h-full flex flex-row z-10'>
        
        <h1 className='p-5 text-xl font-medium'>IEEE SB CEC</h1>

        <nav className='absolute right-5 py-5 flex flex-row gap-5 max-[575px]:hidden text-lg'>
          {isIntersecting?(<a href={joinuslink} className='px-3 border flex justify-center h-8 items-center rounded-2xl border-[#b4b4b4] text-[#b4b4b4] text-base hover:bg-white hover:text-black'>Join IEEE</a>):''}
          <a href="#home" className='text-[#b4b4b4] hover:text-white'>Home</a>
          <a href="#About-IEEE" className='text-[#b4b4b4] hover:text-white'>About us</a>
        </nav>
        {/* Hambuger Menu */}
        <nav className='hidden absolute right-5 py-5 flex-row gap-5 max-[575px]:flex'>
          {isIntersecting?(<a href={joinuslink} className='px-3 border flex justify-center h-8 items-center rounded-2xl border-[#b4b4b4] text-[#b4b4b4] text-base hover:bg-white hover:text-black'>Join IEEE</a>):''}
          <div className="menu-container cursor-pointer z-[100px]" onClick={()=>{setmenustate(!menubtnstate)}}>
            <div className={"bar1 "+(menubtnstate? 'change':"")} ></div>
            <div className={"bar2 "+(menubtnstate? 'change':"")} ></div>
            <div className={"bar3 "+(menubtnstate? 'change':"")} ></div>
          </div>
        </nav>

      </div>
      <div className={'side-nav h-screen '+(menubtnstate?"side-nav-active slide-in-animation":"slide-out-animation")}>

        <div className='flex flex-col p-20 m-3 gap-3'>
          <a href="#home" className='text-center text-lg' onClick={()=>{setmenustate(!menubtnstate)}}>Home</a>
          <a href="#About-IEEE" className='text-center text-lg' onClick={()=>{setmenustate(!menubtnstate)}}>About us</a>
        </div>

        <div className='h-[75%]'></div>
        <div className='flex flex-row gap-[15px] justify-center bottom-0'>
          <Followus/>
        </div>
      </div>
    </header> 
    </>
  )

  //Changing the overflow status on menu open
  useEffect(()=>{
    document.body.style.overflowY= menubtnstate? 'hidden':'scroll'
    document.body.scrollTop= menubtnstate? 0:''
  },[menubtnstate]);

  return jsxelement;
}

// Mainpage image slideshow
function ImageSlideshow(){
  // Dataset
  const listofimgaeslides=[
    "Slideshow/Slide0.jpg",
    "Slideshow/Slide1.jpg",
    "Slideshow/Slide2.jpg",
    "Slideshow/Slide3.jpg"];
  
  //Variables
  const [currentindex,changeindex]=useState(0);

  // Main HTML Code
  const jsxelement=(
    <>
    <div className='absolute w-screen h-screen top-0 right-0 bg-cover   transition-all duration-[0.5s] ease-in bg-fixed'style={{backgroundImage:`url(${listofimgaeslides[currentindex]})`,backgroundPosition:'center bottom'}}></div>
    </>
  );

  // Changing the current displayed image in every t secs
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

// Mainpage content
function HeroSection(){

  // Main HTML Code
  const jsxelement=(
    <>
    <div className='absolute h-screen  w-screen z-[2] right-0 top-0 bg-gradient-to-b from-[#1d1c1c] to-transparent' id="home">
      <div className='flex flex-col w-fit  text-white ml-10 h-screen place-content-center'>
        <span className='text-2xl'>Welcome to </span>
        <span className='font-600 text-50 h-[56.7px] max-[400px]:text-35 opacity-60'>IEEE Student Branch</span>
        {/* <span className='font-600 text-50 h-[56.7px] max-[400px]:text-35'>Student Branch</span> */}
        <span className='font-600 text-50 h-[56.7px] max-[400px]:text-35 opacity-60'>CE Chengannur</span>
        <a href={joinuslink} className='rounded-3xl  border-2  w-[130px] h-[50px] justify-center flex items-center my-5 cursor-pointer hover:bg-white hover:text-black transition-all duration-75'> Join IEEE</a>
      </div>
      <div className='absolute bottom-0 bg-black h-16 w-screen flex flex-row gap-5 items-center p-5 px-10 max-[575px]:h-10'>
        <a href="https://www.ieee.org/" className='text-[#b4b4b4] hover:text-white max-[575px]:text-xs'>IEEE.org</a>
        <a href="https://ieeexplore.ieee.org/Xplore/home.jsp" className='text-[#b4b4b4] hover:text-white max-[575px]:text-xs'>IEEE Xplore Digital Library</a>
        <a href="https://www.ieeer10.org/" className='text-[#b4b4b4] hover:text-white max-[575px]:text-xs'>IEEE Region 10</a>
        <div className='absolute right-5 w-fit h-full flex flex-row gap-5 items-center max-[575px]:hidden'>
          <Followus/>
        </div>
      </div>
    </div>
    </>
  );

  return jsxelement;
}

// About IEEE
function Aboutieee(){

  // Main HTML Code
  const jsxelement=(
    <>
    <div className='w-full h-fit flex flex-col px-[50px] overflow-x-hidden' id='About-IEEE' data-aos='fade-up' data-aos-duration='3500'>
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

// About CEC and IEEE SB CEC
function CECvsIeee(){

  // Main HTML Code
  const jsxelement=(
      <>
      <div className='w-full p-4 h-fit bg-[#002e5b] flex flex-col gap-3'>
        <div className='w-full h-fit flex flex-row max-[1035px]:flex-col'>
          <img src="/Images/cec_1.jpeg" alt=""  className='w-[500px] mx-10 shadow-xl max-[1035px]:mx-0' data-aos='fade-up'/>
          <div className='flex flex-col h-full grow' data-aos="slide-left">
            <div className='pr-5 flex before:bg-white before:w-full relative before:h-[2px] before:absolute before:-bottom-2'>
              <span className='text-4xl text-white font-medium py-3'>CEC</span>
            </div>   
            <p className='text-white py-4'>
            The Government College of Engineering Chengannur (established in 1993), commonly known as CEC, is an engineering institute in the state of Kerala, India. The college was set up under the auspices of the Institute of Human Resources Development (IHRD) and is affiliated with the APJ Abdul Kalam Technological University (KTU). It currently offers undergraduate degrees in four engineering streams and two postgraduate programs.
            </p>
            <a href="https://cec-landing-page.netlify.app/" className='px-4 border w-fit my-2 rounded-2xl text-white py-1 hover:bg-white hover:text-black trasistion-all'>Our Website</a>
          </div>
        </div>
        <div className='w-full h-fit flex flex-row pl-10 text-white max-[1035px]:flex-col-reverse max-[1035px]:pl-0 '>
          <div className='flex flex-col pr-6 max-[1035px]:pr-0' data-aos="slide-right">
            <span className='text-white  text-4xl py-2 before:w-full relative before:h-[2px] before:bg-white before:absolute before:-bottom-2'>IEEE SB CEC</span>
            <p className='pt-3'>IEEE Student Branch College of Engineering Chengannur was formed in mid-1997, with the goal of keeping the students in touch with advancing technology. It is equipped with an IEEE library that was inaugurated in December 1999 and currently functions as the headquarters of IEEE SB CEC. The Student Branch comes under the Kochi Hub of IEEE Kerala Section and is one of the most active Student Branches in the country. IEEE SB CEC has made numerous contributions to its student community that has received widespread recognition across the globe and is the first Student Branch in the Asia-Pacific Region to establish a Women in Engineering Affinity Group.</p>
            <div className='flex flex-row grow justify-center items-center gap-14 py-7 max-[1035px]:pl-5 max-[1035px]:flex-wrap max-[1035px]:py-5'>
              <span className='h-fit text-5xl  flex flex-col font-semibold'>278 <span className='text-base font-normal'>Total Members</span> </span>
              <span className='h-fit text-5xl  flex flex-col font-semibold'>120 <span className='text-base font-normal'>Events per year</span> </span>
              <span className='h-fit text-5xl  flex flex-col font-semibold'>27  <span className='text-base font-normal'>Awards Won</span> </span>
            </div>
          </div>
          <img src="/Images/ieeesbcec.jpg" alt="" className='h-fit w-[500px]' data-aos='fade-up'/>
        </div>
      </div>
      </>
      );
  
    return jsxelement;
}

// IEEE Family Members
function OurFamily(){

  // Dataset
  const logoimages=[
    "/Ieeefamilylogos/cs-logo.png",
    "/Ieeefamilylogos/ias-logo.png",
    "/Ieeefamilylogos/ims-logo.png",
    "/Ieeefamilylogos/pes-logo.png",
    "/Ieeefamilylogos/ras-logo.png",
    "/Ieeefamilylogos/sight-logo.png",
    "/Ieeefamilylogos/sscs-logo.png",
    "/Ieeefamilylogos/wie-logo.png"
  ]

  // Main HTML Code
  const jsxelement=(
      <>
      <div className='w-full h-fit justify-center flex flex-col p-10' data-aos='fade-up'>
        <span className='text-3xl font-bold text-[#002e5b] text-center '  data-aos='fade-up'>Our IEEE Family</span>
        <div className='w-full flex flex-wrap  justify-center p-8' data-aos='fade-up'>
            {
              logoimages.map((image, i) =>{
                return <img src={image} alt="" key={i} className='hover:scale-125 hover:shadow-xl transition-all duration-100 cursor-pointer' />
              })
            }
        </div>
      </div>
      
      </>
  );

  return jsxelement;
}

// Why IEEE
function Whyieee(){

  // Dataset
  const dataset=[
    {
      title: "Free@ieee.org",
      description:"With GoogleApps@IEEE, members gain a robust capability for messaging with access to email, calendar, and contact services from any Internet-connected computer."
    },
    {
      title: "IEEE eLearning Library",
      description:"A vast digital library with numerous in- demand courses and research papers."
    },
    {
      title: "Scholarships, Grants & Fellowship",
      description:"IEEE offers a variety of scholarships, grants, and fellowships for IEEE Student members."
    },
    {
      title:"Student Travel Grant",
      description:"IEEE offers a number of student travel grants to assist student members in attending conferences and paper presentations."
    },
    {
      title:"IEEE Standards",
      description:"With an active portfolio of nearly 1,300 standards and projects under development, IEEE is a leading developer of industry standards in a broad range of technologies."
    },
    {
      title:"Celebrating Women in Science",
      description:"IEEE Women in Engineering is one of the largest professional organizations dedicated to promoting women in STEM, inspiring women across the world to pursue their interests in the field of science and technology."
    }
  ]
  
  // Main HTML Code
  const jsxelement=(
      <>
      <div className='w-full h-fit bg-[#00629b] flex flex-row max-[750px]:flex-col '  data-aos='slide-right'>
        <div className='w-2/6  flex  justify-center items-center relative p-3 max-[750px]:w-full '>
          <div className='w-full h-full flex justify-center items-center relative border-r-[1px] border-white max-[750px]:border-r-0 max-[750px]:border-b-[1px]'>
            <span className='text-white  font-600 text-4xl p-5'>Why IEEE ?</span>
          </div>
        </div>
        <div className='grow  grid grid-rows-3 grid-flow-col gap-3 p-3 max-[500px]:grid-flow-row '>

          {dataset.map((value,index)=>{
            return(

          <div className='w-22 h-fit  flex flex-row items-center' key={index}>
            {(index==0)? <AiOutlineMail size={'35px'} color='white' className='flex items-center mr-2'/>:<></>}
            {(index==1)? <BiLibrary size={'35px'} color='white' className='flex items-center mr-2'/>:<></>}
            {(index==2)? <SlGraduation size={'35px'} color='white' className='flex items-center mr-2'/>:<></>}
            {(index==3)? <BsAirplaneEngines size={'35px'} color='white' className='flex items-center mr-2'/>:<></>}
            {(index==4)? <BsGraphUpArrow size={'35px'} color='white' className='flex items-center mr-2'/>:<></>}
            {(index==5)? <CgGirl size={'35px'} color='white' className='flex items-center mr-2'/>:<></>}
            <div className='flex flex-col w-full h-full text-white p-2 place-content-center'>
              <span className='text-xl font-semibold'>{value.title}</span>
              <p className={'text-sm'}>{value.description}</p>
            </div>
          </div>
          )
          })}

        </div>
      </div>
      
      </>);
  
  return jsxelement;
}

// Testimonials
function Testimonials(){

  // Variables
  const [currentindex, setindex]=useState(Math.floor(Math.random()*7));

  // Dataset
  const dataset=[
    {
      icon:"/Testimonials/karthik.jpeg",
      quote:'People talk about job security. No one can give you that. Job security depends on the company. What IEEE can do – and I use the phrase carefully – is offer security. You can be the most valuable engineer by being current in technology and by networking with others. If you take advantage of the products and services that IEEE offers, you will become the most valuable engineer in your organization. And if your job goes away, you’ll have no trouble finding another.',
      name:'Karthik Iyer',
      position:'Chairman , IEEE SB CEC 2017'
    },
    {
      icon:"/Testimonials/Seenu-Chrispin.jpeg",
      quote:'My stint with IEEE student branch CEC and WIE student affinity group was one of the most value-adding experiences I had during my college days. Various workshops, seminars and access to journals that my IEEE membership gave me access to, had helped significantly in expanding my technical knowledge base. In addition to this volunteering with the student branch for its activities helped in grooming my organizing skills and time management skills. It also helped a lot in polishing my communication skills and team skills, all which helped later in my professional space too. The way the group works, keeping the interests of members and the whole institution in mind is commendable. Various awards, recognition and opportunities that the group and members have got in the past at regional and international levels speak for their hard work and dedication. I am sure the group will continue to work in the same momentum in the years to come and add value to all stakeholders.',
      name:'Seenu Chrispin',
      position:'WIE Chairperson, IEEE SB CEC 2004'
    },
    {
      icon:"/Testimonials/Jaison-Abey-Sabu.jpeg",
      quote:'In an era where the world is getting increasingly focused on sustainable growth, IEEE-CEC has been a prime example of sustained growth and achievements. To win an award or be at the top once or twice is reasonably easy, but maintaining that across generations is quite challenging. IEEE-CEC has been accumulating significant achievements for the last 23 years. As a former chair of the SB, I feel proud to see the sustained growth and accolades that the student branch is able to drive.',
      name:'Jaison Abey Sabu',
      position:'Chairman, IEEE SB CEC 2006'
    },
    {
      icon:"/Testimonials/Leroy-Vargis.jpg",
      quote:'IEEE CEC has always stood out as an exemplary student branch, made possible only because of the selfless commitment and infectious passion shown by countless volunteers. It can help you become a thorough professional, a master technician, a skillful organizer and/or an inspirational leader – it all depends on how you use it. IMO it is a must-have experience in your college and will influence your career in more ways than you can imagine.',
      name:'Leroy Vargis',
      position:'Chairman, IEEE SB CEC 2015'
    },
    {
      icon:"/Testimonials/Arjun-R-Pillai.jpg",
      quote:'One thing that makes CEC an exemplary student branch is its consistency. Since its start in 1996, the SB has continuously performed at the top level. Recently, the focus on diversification into multiple societies and building amazing chapters giving more opportunities for volunteers and more value to members is also a commendable one.',
      name:'Arjun R Pillai',
      position:'Secretary, IEEE SB CEC 2009'
    },
    {
      icon:"/Testimonials/sooraj.jpg",
      quote:'Our journey has only brought us higher. IEEE computer society gave and continues to give me great opportunities for personal knowledge and career improvement.',
      name:'Sooraj P',
      position:'CS Chairman, IEEE SB CEC 2017'
    },
    {
      icon:"/Testimonials/karthik.jpeg",
      quote:'IEEE CEC has always stood out as an exemplary student branch, made possible only because of the selfless commitment and infectious passion shown by countless volunteers. To win an award or be at the top once or twice is reasonably easy, but maintaining that across generations is quite challenging. IEEE-CEC has been accumulating significant achievements for the last 23 years. As a former chair of the SB, I feel proud to see the sustained growth and accolades that the student branch is able to drive.',
      name:'Rahul Kumar',
      position:'CS Chairman, IEEE SB CEC 2017'
    }

  ]

  // Main HTML Code
  const jsxelement=(
    <> 
    <div className='w-full h-fit flex flex-col' data-aos='fade-up'>
      <span className='text-4xl font-semibold text-[#002e5b] justify-center flex p-10'>Testimonials</span>
      <div className='w-full h-[450px]  bg-cover bg-top max-[500px]:h-fit' style={{backgroundImage:`url('Images/cec_2.jpg')`}}>
        <div className='w-full h-full backdrop-blur-md flex flex-col text-white items-center justify-center'>
          <div className='w-[70px] h-[70px] rounded-full bg-black m-3 overflow-clip'>
            <img src={dataset[currentindex].icon} alt="" className='w-full h-full transition-all duration-200 ease-in' />
          </div>
          <div className='w-fit h-fit flex flex-col items-end'>
            <p className='w-[800px] max-[800px]:w-fit h-fit  max-[800px]:text-center max-[800px]:px-2 italic transition-all duration-150'><span className='font-semibold text-xl'>"</span>{dataset[currentindex].quote}<span className='font-semibold text-xl'>"</span></p>
            <span className='max-[800px]:px-2 transition-all duration-150'>-{dataset[currentindex].name}<br/> {dataset[currentindex].position}</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );

  // Changes the Testimony after t secs
  useEffect(()=>{
    const intervalid=setInterval(() => {
      if ((currentindex+1)<dataset.length){
        setindex(currentindex+1)
      }
      else{
        setindex(0)
      }


    }, 7500
    );
    return ()=>clearInterval(intervalid);
  });

  return jsxelement;
}

// Footer
function Footer(){

  // Main HTML Code
  const jsxelement=(
    <>
    <div className='w-full h-fit flex flex-col bg-[#002e5b]  mt-2 p-11 text-white'>
      <div className=' w-full h-full flex flex-wrap gap-3'>
        <div className='flex flex-col h-fit'>
          <img src="/Icons/IEEE-SB-logo-web.png" alt=""  className='w-[300px]'/>
          <p className='py-3'>
          IEEE Student Branch,<br/>
          College of Engineering,<br/> 
          Chengannur Alapuzha, Kerala <br />
          Pin:689121
          </p>
          <span className='flex flex-row items-center gap-2'><AiOutlineMail/>chairman_ieee@ceconline.edu</span>
        </div>
        <div className='h-full flex flex-col justify-center px-10 pt-3 max-[650px]:px-0 '>
          <p>Become an IEEE member now.</p>
          <a href={joinuslink} className='underline transition-all duration-100'>Join us</a>
        </div>
        <div className='flex flex-col px-10 grow pt-3 items-end relative max-[1000px]:gap-2  max-[450px]:items-start max-[450px]:px-0 '>
          <span className='text-4xl relative  '>Follow Us</span>
          <div className='flex flex-row gap-5 pt-3 pl-3 max-[1000px]:pt-0 max-[450px]:pl-0'>
          <a href="https://www.instagram.com/ieee_sb_cec/" className='text-[#b4b4b4] hover:text-white cursor-pointer'><BsInstagram size={25} /></a>
      <a href="https://www.linkedin.com/company/cecieee/" className='text-[#b4b4b4] hover:text-white cursor-pointer'><BsLinkedin size={25} /></a>
      <a href="https://www.facebook.com/IEEECEC/" className='text-[#b4b4b4] hover:text-white cursor-pointer'><BsFacebook size={25} /></a>
      <a href="https://www.youtube.com/channel/UCXh6fVbDGCIidsVHabpZFiw" className='text-[#b4b4b4] hover:text-white cursor-pointer'><BsYoutube size={25}  href='www.youtube.com'/></a>
          </div>
          <span className='absolute bottom-1 max-[1000px]:relative max-[1000px]:bottom-0 '>Developed by Harikrishna A <br /> <a href="https://github.com/GLITCH-hash01" className='underline hover:text-blue-700'>Github</a></span>
        </div>
      </div>
    </div>
    </>
  );

  return jsxelement;
}

//Main Container
function App() {
  
  // Main HTML Code
  const jsxelement=(
    <>
    <Header/>
    <ImageSlideshow/>
    <HeroSection/>
    {/* Pages below the main page */}
    <div className='h-fit bg-fixed  flex flex-col' >
      <div className='w-screen h-screen '></div>
        <Aboutieee/>
    </div>
    <CECvsIeee/>
    <OurFamily/>
    <Whyieee/>
    <Testimonials/>
    <Footer/>
    </>
  )

  return jsxelement
}

export default App
