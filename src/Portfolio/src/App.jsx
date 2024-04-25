import {useEffect, useState} from 'react'
import {motion, useAnimationFrame, useInView} from 'framer-motion'
import { useRef } from "react";

import './App.css'

function App() {
    let scrollPosition = 0;

    // const ref = useRef(null);


    function Section({ children }) {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

        return (
            <section ref={ref}>
      <span
          style={{
              transfrom: isInView ? "none" : "translateY(700px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
      >
        {children}
      </span>
            </section>
        );
    }

    useAnimationFrame((t) => {
        const rotate = Math.sin(t / 10000) * 200;
        const y = (1 + Math.sin(t / 1000)) * -50;
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
    });
  const [bool, setBool] = useState(false);
  // const[bool1, setBool1] = useState(false);
  // const [bool2,setBool2]=useState(false);
  // const history = useHistory();
  //
  //       useEffect(() => {
  //           function handleScroll() {
  //               const windowHeight = window.innerHeight;
  //               const documentHeight = document.body.clientHeight;
  //               const scrollY = window.scrollY;
  //               const scrollThreshold = 100; // Adjust the threshold as needed
  //
  //               // Check if user has scrolled to the bottom of the page
  //              window.scrollY = windowHeight + scrollY;
  //           }
  //
  //           // Attach scroll event listener
  //           window.addEventListener('scroll', handleScroll);
  //
  //           // Clean up by removing event listener when component unmounts
  //           return () => {
  //               window.removeEventListener('scroll', handleScroll);
  //           };
  //       }, [history]);
  //
  //   useEffect(() => {
  //       function handleScroll(event) {
  //           // event.preventDefault();
  //           // const delta = event.deltaY || event.detail
  //           // const scrollSpeed = 20; // Adjust the scroll speed as needed
  //           window.scrollBy(0, window.innerHeight);
  //       }
  //
  //       window.addEventListener('wheel', handleScroll);
  //
  //       return () => {
  //           window.removeEventListener('wheel', handleScroll);
  //       };
  //   }, []);
  //
  //   useEffect( () => {
  //       function fullWindow(){
  //           document.getElementById("animend").style.border  = "none";
  //           // document.getElementById("main2").style.backgroundImage = `url("src/assets/login.png")`;
  //           document.getElementById("main2").style.opacity = "90%";
  //           document.getElementById("main2").style.justifyContent = "center";
  //           setBool1(true);
  //       }
  //       document.getElementById("animend").addEventListener("animationend", fullWindow)
  //       return ()=> {document.getElementById("animend").removeEventListener("animationend",fullWindow)};
  //   }, []);
  //
  //   useEffect( () => {
  //       function changeText(){
  //          document.getElementById("flyid").textContent = "HY"
  //           setBool1(true);
  //       }
  //       document.getElementById("test4").addEventListener("animationend", changeText)
  //       return ()=> {document.getElementById("test4").removeEventListener("animationend",changeText)};
  //   }, []);

    useEffect(() => {


        function scrollskip(){
            const currentScroll = (document.body.getBoundingClientRect()).top;
            if(currentScroll>scrollPosition){
                window.scrollY = scrollPosition + window.innerHeight;
            }else if(currentScroll<scrollPosition){
                window.scrollY = scrollPosition - window.innerHeight;
            }
        }
        window.addEventListener('scroll', scrollskip)
        return()=>{
            window.removeEventListener("scroll",scrollskip);
        };
    }, []);

    useEffect(() => {
        function scrolling(){
            // const val = {duration: 2000, iterations:1,}
            // const con = document.getElementById("#scroll")
                let scrollY = window.scrollY;
                console.log(window.innerHeight);
                console.log(scrollY);
                if(scrollY >= window.innerHeight/3) {
                    setBool(true);
                }else{
                    setBool(false);
                }
        }
        window.addEventListener('scroll', scrolling)
        return()=>{
            window.removeEventListener("scroll",scrolling);
        };
    },[]);

  return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
      <div className="bg-black">
          <div className="page1">
              <div className="buttons">
                  <img src="src/assets/react.svg" alt="react pic"/>
                  <button className="bg-purple-900 border-2  border-opacity-[100%] opacity-0 border-purple-900 rounded-lg p-3 hover:bg-purple-950 text-black">contact me</button>
              </div>
           <div className="test1">
               <div className="Introduction">
             <h1 className="font-serif text-8xl hover:animate-bounce hover:text-blue-200 inline-flex">F</h1>
                   <h1 className="font-serif text-8xl hover:animate-bounce hover:text-blue-200 inline-flex">u</h1>
                   <h1 className="font-serif text-8xl hover:animate-bounce hover:text-blue-200 inline-flex">l</h1>
                   <h1 className="font-serif text-8xl hover:animate-bounce hover:text-blue-200 inline-flex">l</h1>
                   <h1 className="font-serif text-8xl hover:animate-bounce hover:text-blue-200 inline"> </h1>
                   <h1 className="font-serif text-8xl hover:animate-bounce hover:text-blue-200 inline-flex">S</h1>
                   <h1 className="font-serif text-8xl hover:animate-bounce hover:text-blue-200 inline-flex">t</h1>
                   <h1 className="font-serif text-8xl hover:animate-bounce hover:text-blue-200 inline-flex">a</h1>
                   <h1 className="font-serif text-8xl hover:animate-bounce hover:text-blue-200 inline-flex">c</h1>
                   <h1 className="font-serif text-8xl hover:animate-bounce hover:text-blue-200 inline-flex">k</h1>
                   <h1 className="font-serif text-8xl hover:animate-bounce"> </h1>
                   <h1 className="font-serif text-8xl hover:animate-bounce hover:text-blue-200 inline-flex">D</h1>
                   <h1 className="font-serif text-8xl hover:animate-bounce hover:text-blue-200 inline-flex">e</h1>
                   <h1 className="font-serif text-8xl hover:animate-bounce hover:text-blue-200 inline-flex">v</h1>
                   <h1 className="font-serif text-8xl hover:animate-bounce hover:text-blue-200 inline-flex">e</h1>
                   <h1 className="font-serif text-8xl hover:animate-bounce hover:text-blue-200 inline-flex">l</h1>
                   <h1 className="font-serif text-8xl hover:animate-bounce hover:text-blue-200 inline-flex">o</h1>
                   <h1 className="font-serif text-8xl hover:animate-bounce hover:text-blue-200 inline-flex">p</h1>
                   <h1 className="font-serif text-8xl hover:animate-bounce hover:text-blue-200 inline-flex">e</h1>
                   <h1 className="font-serif text-8xl hover:animate-bounce hover:text-blue-200 inline-flex">r</h1>
                   <p className="font-serif text-3xl">Coding problems, Debugging codes, developing rich web applications </p>
                   <div className="mt-11 h-20 w-60 rounded-xl">
                   <a className="bg-blue-600 rounded-lg shadow-lg shadow-black p-3 hover:bg-blue-700 text-white" href="#page2">about me</a>
                       {/*fliptrig bg-blue-700 h-28 w-72 rounded-xl hover:bg-blue-600 hover:cursor-pointer*/}
                   </div>

               </div>
               <div className="ml-2 animate-pulse text-center">
                   <p> scroll down  <br/>
                       🙋‍♂️🙋‍♂️🙋‍♂️ </p>
               </div>
               </div>
          </div>
          {/*${bool ? 'slide': ''}*/}
          {/*<div className=" bg-[url('/src/assets/try.jpg')] bg-contain w-[100vw] h-[100vh] overflow-x-hidden" id="page2">*/}
          <div className="h-screen w-[100%] bg-black rounded-lg" id="page2">
              {/*<div className="mt-11 border-slate-700 border-[50px] rounded-3xl h-[90%] w-full bg-cover bg-[url('src/assets/bg.webp')]" id="main2">*/}
                  {/*{!bool1 && <div className={`h-[30px] w-[30px] mt-[25%] bg-white-700 border-t-6 border-white outline-black outline-4 rounded-t-full  ${bool ? "main1" : ''}` }  id= "animend"></div>}*/}
                  {/*{bool1 && <div className="mt-11 h-[100%] w-[100%] flex-col justify-items-center">*/}
                  {/*    <img src="src/assets/img_1.png" className="pop opacity-0 border-gray-500 border-2 h-[200px] w-[200px] ml-[40%] rounded-full"/>*/}
                  {/*    <h3 className="test1 text-white opacity-0 text-3xl text-center">Hi, I am Sakshyam Sarki*/}
                  {/*    <br/>I am an international Student pursuing Bachelor of Computer Science in SUNY Oswego. I love doing full stack development. I am currently doing internship in International Student and Scholar Services.</h3>*/}
                  {/*</div> }*/}

              {/*        <div className="h-[100%] w-[50%] -right-32">*/}
              {/*            <div className="h-[200px] w-[200px]">*/}
              {/*                /!*<img className="object-left h-[100%] w-[100%] hover:opacity-95 rounded-full" src="src/assets/img_1.png" alt="profile pic"/>*!/*/}
              {/*            </div>*/}
              {/*            </div>*/}
              {/*             <div className={`flex-col w-1/2 size-1/2`} id="scroll">*/}
              {/*                 <div className="main1 h-[100%] w-full inline-block opacity-0 hover:opacity-95">*/}
              {/*                 <h1>Hi, I'm Sakshyam Sarki</h1>*/}
              {/*                 <p>Full Stack Developer. <br/>*/}
              {/*             /!*</div>*!/*/}
              {/*             /!*<div className="detail">*!/*/}
              {/*             /!*    <p className="test2">*!/*/}
              {/*                     I like solving coding problems, debug problem. I like watching anime and playing guitar.*/}
              {/*                 </p>*/}
              {/*                 </div>*/}
              {/*                 <div className="main2 h-[100%] w-full inline-block opacity-0 hover:opacity-95">*/}
              {/*                     <p>*/}
              {/*                         I am doing intern in international office.*/}
              {/*                     </p>*/}
              {/*                 </div>*/}
              {/*                 <div className=" bg-gray-500*/}
              {/*                     w-full*/}
              {/*                     p-[20px]*/}
              {/*                     /!*-skew-x-[20deg]*!/*/}
              {/*                     h-[100%]*/}
              {/*                 ">I asdgasdgasdgasdg</div>*/}
              {/*        </div>*/}

              {/*</div>*/}

          {/*    <div className="flex items-center text-white overflow-hidden">*/}
          {/*    /!*<div className="container">*!/*/}
          {/*    <div className="flex-1">*/}
          {/*        <img className="relative bg-contain w-full"  src="/src/assets/IMG_4358.jpeg" alt="profile pic"/>*/}
          {/*        /!*<img className="z-10 ml-28 mt-60 h-[60%] w-[85%]  opacity-100 blur-[1px] hover:scale-110 hover:opacity-95 hover:blur-0"  src="src/assets/img_1.png" alt="profile pic"/>*!/*/}

          {/*        /!*<img className="side front"  src="src/assets/img_1.png" alt="profile pic"/>*!/*/}
          {/*        /!*<img className="side left"  src="src/assets/img_1.png" alt="profile pic"/>*!/*/}
          {/*        /!*<img className="side right"  src="src/assets/img_1.png" alt="profile pic"/>*!/*/}
          {/*        /!*<img className="side top"  src="src/assets/img_1.png" alt="profile pic"/>*!/*/}
          {/*        /!*<img className="side bottom"  src="src/assets/img_1.png" alt="profile pic"/>*!/*/}
          {/*        /!*<img className="side back"  src="src/assets/img_1.png" alt="profile pic"/>*!/*/}
          {/*    </div>*/}
          {/*     /!*<div className={`flex-1 flex-col ${bool ? 'slide': ''}`} id="scroll">*!/*/}
          {/*         <motion.div animate={{x:100}} transition = {{ease: "easeOut", duration: 2}} className="main1 left-4"/>*/}

          {/*         <Section><h1>Hi, I'm Sakshyam Sarki</h1></Section>*/}
          {/*         <p>Full Stack Developer. <br/>*/}
          {/*     /!*</div>*!/*/}
          {/*     /!*<div className="detail">*!/*/}
          {/*     /!*    <p className="test2">*!/*/}
          {/*             I like solving coding problems, debug problem. I like watching anime and playing guitar.*/}
          {/*         </p>*/}
          {/*         <div className="main2 h-32">*/}
          {/*             <p>*/}
          {/*                 I am doing intern in international office.*/}
          {/*             </p>*/}
          {/*         </div>*/}
          {/*         <div className=" bg-gray-500*/}
          {/*             w-[200%]*/}
          {/*             p-[20px]*/}
          {/*             -skew-x-[20deg]*/}
          {/*             h-32*/}
          {/*         ">I asdgasdgasdgasdg</div>*/}
          {/*     </div>*/}
          {/*        <div className="w-full h-1/4 "></div>*/}-
          {/*</div>*/}
              <div className="grid grid-cols-5 grid-rows-3  text-white overflow-hidden opacity-80 w-full h-full bg-contain bg-opacity-[50%] bg-no-repeat ">
                  <div className="w-full h-full col-span-4 row-span-3 px-10 flex border-r-40 flex-col gap-10 items-center justify-center">
                      <Section>
                          <h1 className="text-8xl mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Hey, I am Sakshyam</h1>
                          <div className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Full Stack Developer</div>

                      </Section>
                      <Section>
                          <h2 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Problem solver, well-organised person, loyal employee with high attention to detail.</h2>
                          <h2 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"> Like playing guitar, singing songs, outdoor activities, video games, and coding of course.</h2>
                          <h2 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">I mostly use Java, React, Python for coding. While I also know C, Racket, Prolog, Haskell</h2>
                      </Section>
                      {/*<img className="w-[500px] h-[900px] opacity-[70%]" src="src/assets/profilepic.jpg" alt="profile pic"/> */}
                  </div>
                   <div className="row-span-3 w-full h-full">
                       <img src="src/assets/img_1.png" className="h-72 w-72 rounded-full mt-11" alt="profile"/>
                   </div>
                  {/*<div className="col-span-2 row-span-2 w-full h-full px-10 flex flex-col items-center justify-center gap-3">'*/}
                  {/*<Section>*/}
                  {/*        /!*<motion.p animate={{x:100}} transition={{delay:1.5}}> I like solving coding problems, debug problem. I like watching anime and playing guitar.</motion.p>*!/*/}
                  {/*         <h2 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Problem solver, well-organised person, loyal employee with high attention to detail.</h2>*/}
                  {/*         <h2 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"> Like playing guitar, singing songs, outdoor activities, video games, and coding of course.</h2>*/}
                  {/*        <h2 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">I mostly use Java, React, Python for coding. While I also know C, Racket, Prolog, Haskell</h2>*/}
                  {/*        </Section>*/}
                  {/*</div>*/}
                  {/*<div className=" w-[100px] h-[100px] bg-[url('src/assets/img_1.png')] bg-contain bg-no-repeat shadow-orange-600 shadow-lg rounded-[50%]" ></div>*/}
                  {/*<div className="col-span-5 p-4 m-4">*/}
                  {/*  <Section>*/}
                  {/*    <h2 className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>I am an International Student pursuing Bachelor of Computer Science at SUNY Oswego. I am currently doing internship at International Student and Scholar Services as a International Student Technology Intern. I am looking for internship with other company to borden by horizon and show my skills.  </h2>*/}
                  {/*</Section>*/}
                  {/*</div>*/}

              </div>

          </div>
          <div className="h-screen w-screen bg-black">
              <div className="text-white">Hello</div>

          </div>
      </div>
  )
}

export default App
