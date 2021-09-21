import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { motion } from "framer-motion";

import Hero from '../components/Hero'
import Header from '../components/Header'
import Works from '../components/Works'
import Footer from '../components/Footer'
import Button from 'react-bootstrap/Button'
import HomeGrid from '../components/HomeGrid';
import AboutText from '../components/AboutText'






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
                <h1 ref={el => titleAnim = el} className="sub-title">Dream bigger,   <br /> Create together   </h1>
                <h3 ref={el => subtitleAnim = el} className="big-title">We come to provide the best solutions for art <br /> services to the game, vr/ar, and film industries.</h3>
                <Button variant="outline-success" href="/Portfolio" size="sm">SEE LATEST</Button>
                <Button variant="light" href="/contact" size="sm">Getting Started →</Button>

            </Hero>
            <Works />
            <GridText />
            <HomeGrid />
            <AboutText />
            <Footer />
        </div>
    )

}

export default Home