"use client";

import { useRef } from 'react';
import './App.css';
import { motion, useScroll, useTransform} from "framer-motion";

function Square(){
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return(
        <motion.div className='square'
            ref = {ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >
        </motion.div>
    );
};

function Dev()  {
    return (
        <>
        <div className='navHolder'>
            <div className='nav'></div>
        </div>
        <div className='header'>
            <h1 className='aboutMe'>ABOUT ME</h1>
            <div className='myname'>Maryam Dar</div>
            <div className='dev'>computer engineering student</div>
        </div>
        <div className='center'>
            <h1 className='projTitle'>PROJRCTS</h1>
            <div className='projects'>
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
        </div>
        </>
    );
};
export default Dev;