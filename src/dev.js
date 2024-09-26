"use client";

// import { useRef } from 'react';
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { motion, useScroll, useTransform} from "framer-motion";
import Project from './project';

function makeProject(){
    const project = new Project("music player", "jan 2024", "this is music player clone", "#java #javafx","links", "imgurl");
    return project;
}
const projects = [];
function addProject(title, date, desc, hashtags, links, imgUrl){
    console.log(projects.length);
    projects.push(new Project(title, date, desc, hashtags, links, imgUrl));
}

function Square(props){
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
    // const project = makeProject();
    return(
        <motion.div className='square'
            ref = {ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >

        <div className='image'>
            {/* <img></img> */}
        </div>
        <div className='desc'>
            <div className='desc-top'>
                <div className='projectTitle p'>{props.title}</div>
                <div className='links'>
                    <div className='link p'>a</div>
                    <div className='link p'>b</div>
                    <div className='link p'>c</div>
                </div>
            </div>

            <div className='desc-center'>
                <p className='description'>{props.date}</p>
                <div className='description'>{props.desc}</div>
            </div>

            <div className='desc-bottom'>
                <p className='description'>{props.hashtags}</p>
            </div>
        </div>
            
        </motion.div>
    );
};


function generateBoxShadows(n) {
    let shadows = [];
    for (let i = 0; i < n; i++) {
      const x = Math.floor(Math.random() * 2000);
      const y = Math.floor(Math.random() * 8000);
      shadows.push(`${x}px ${y}px #FFF`);
    }
    return shadows.join(', ');
  }


function Dev()  {
    addProject("music player", "jan 2024", "this is music player clone this is music player clone this is music player clone this is music player clone this is music player clone", "#java #javafx","links", "imgurl");
    addProject("music player", "jan 2024", "this is music player clone this is music player clone this is music player clone this is music player clone this is music player clone", "#java #javafx","links", "imgurl");
    addProject("music player", "jan 2024", "this is music player clone this is music player clone this is music player clone this is music player clone this is music player clone", "#java #javafx","links", "imgurl");
    addProject("music player", "jan 2024", "this is music player clone this is music player clone this is music player clone this is music player clone this is music player clone", "#java #javafx","links", "imgurl");
    
    const numberOfStars = 700;
    // const boxShadows = generateBoxShadows(numberOfStars);

    const starsRef = useRef(null);

    const applyStyles = () => {
        const boxShadows = generateBoxShadows(numberOfStars); // Replace with your box shadow generation logic
        starsRef.current.style.boxShadow = boxShadows;
    };

    useEffect(() => {
        window.addEventListener('mousemove', applyStyles);
        return () => {
          window.removeEventListener('mousemove', applyStyles);
        };
      }, []);

    const [stars, setStars] = useState([]);
      
        useEffect(() => {
          // Generate an array of stars with random positions and sizes
          const newStars = Array.from({ length: 100 }, () => ({
            position: { x: Math.random() * window.innerWidth, y: 0 },
            size: Math.random() * 3,
            boxShadow: generateBoxShadows(1) // Implement your box shadow generation logic
          }));
          setStars(newStars);
        }, []);
    
    return (
        <>
        {/* {applyStyles()} */}
        <div id="stars" ref={starsRef} ></div>

        {/* <div className="stars-container">
            {stars.map((star, index) => (
              <div
                key={index}
                id="stars"
                style={{
                  left: star.position.x,
                  top: star.position.y,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  boxShadow: star.boxShadow
                }}
              />
            ))}
          </div> */}
        <div className='navHolder'>
            <div className='nav'>
                <div className='componentsHolder'>
                    <a className='component' href='#home'>Home</a>
                    <a className='component' href='#aboutMe'>About Me</a>
                    <a className='component' href='#projects'>Projects</a>
                    {/* <a href="#section1" class="btn" target="_blank"><h1 style="font-family: vazir;" style="font-size: x-large;"> معرفی</h1></a> */}
                    {/* <div className='component'>About Me</div>
                    <div className='component'>Projects</div> */}
                </div>
            </div>
        </div>
        <div className='home' id='home'>
            <div className='title'>Maryam Dar</div>
        </div>

        {/* <div className='holder'> */}
            <div className='header' id='aboutMe'>
                <h1 className='aboutMe'>ABOUT ME</h1>
                <div className='myname'>Maryam Dar</div>
                <div className='dev'>computer engineering student</div>
            </div>
            {/* <div className='home'> */}
                <div className='center' id='projects'>
                    <div className='projTitle'>PROJRCTS</div>
                    <div className='projects'>
                        {projects.map((project) =>  <Square title={project.title} desc={project.desc} date={project.date} hashtags={project.hashtags}/> )}
                    </div>
                </div>
            {/* </div> */}
            <div>
                <h1 style={{marginTop: "1100px", marginBottom: "500px"}}>welcome haha</h1>
            </div>
        {/* </div> */}
        </>
    );
};
export default Dev;