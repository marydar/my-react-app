"use client";

import { useRef } from 'react';
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
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    // const project = makeProject();
    return(
        <motion.div className='square'
            ref = {ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >
            
                <p className='p'>{props.title}</p>
                <p className='p'>{props.date}</p>
                <p className='p'>{props.desc}</p>
                <p className='p'>{props.hashtags}</p>
                {/* <a class="ee" href="https://github.com/marydar "  target="_blank"><i class="fa fa-github" style="font-size:20px;color:rgb(255, 255, 255)"></i></a> */}
        </motion.div>
    );
};

function Dev()  {
    addProject("music player", "jan 2024", "this is music player clone", "#java #javafx","links", "imgurl");
    addProject("music player", "jan 2024", "this is music player clone", "#java #javafx","links", "imgurl");
    addProject("music player", "jan 2024", "this is music player clone", "#java #javafx","links", "imgurl");
    addProject("music player", "jan 2024", "this is music player clone", "#java #javafx","links", "imgurl");
    // const project = makeProject();
    return (
        <>
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