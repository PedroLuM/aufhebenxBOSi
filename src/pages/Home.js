import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { motion } from "framer-motion";

import Hero from '../components/Hero'
import Header from '../components/Header'
import Works from '../components/Works'
import Footer from '../components/Footer'
import HomeGrid from '../components/HomeGrid';
import AboutText from '../components/AboutText'
import slide1 from './slide1.jpg'
import CustomerLogo from '../components/CustomerLogo';
import Btn from '../components/Btn'
import Btn1 from "../components/Btn1"






import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GridText from '../components/GridText';

gsap.registerPlugin(ScrollTrigger);

function Home() {

    let titleAnim = useRef(null)
    let subtitleAnim = useRef(null)
    let tl = gsap.timeline()
    const LoadingTransition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

    useEffect(() => {

        tl.from(subtitleAnim, {
            y: 15,
            opacity: 0,
            delay: 1,
            duration: .5,
            ease: "power3.inOut"
        })
            .from(titleAnim, {
                y: 15,
                opacity: 0,
                duration: .5,
                ease: "power3.inOut"
            })
            .from(".scroll-down", {
                y: 15,
                opacity: 0,
                duration: .5,
                ease: "power3.inOut"
            });

    }, [titleAnim, subtitleAnim])

    return (
        <div>
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                exit={{ x: 0 }}
                transition={LoadingTransition}
                className="page-trans">
            </motion.div>
            <Header />
            <Hero>
                <Btn1 />
                <Btn />
                <h1 ref={el => titleAnim = el} className="sub-title">
                    <img src={slide1} />
                </h1>

                <h3 ref={el => subtitleAnim = el} className="big-title"> <br /> </h3>

            </Hero>
            <Btn1 />
            <Btn />
            <Works />
            <HomeGrid />
            < CustomerLogo />
            <AboutText />
            <Footer />
        </div>
    )

}

export default Home