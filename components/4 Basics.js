'use client'

import { useState, useEffect } from "react"
import section from "../css/section.module.css"
import basics from "../css/basics.module.css"
import tabs from "../css/tabs.module.css"
import styles from "../css/videoPlayer.module.css"
import Image from "next/image"

import SlideUp from "./SlideUp"
import FadeIn from "./FadeIn"

import ash from "../public/maps-bank.webp"
import { motion, AnimatePresence, easeInOut } from "framer-motion"

export default function Basics() {
    const [tab1Visible, setTab1Visible] = useState(false);
    const [tab2Visible, setTab2Visible] = useState(false);

    const toggleTab1 = () => {
        console.log(tab1Visible)
        setTab1Visible(!tab1Visible);
    }

    const toggleTab2 = () => {
        setTab2Visible(!tab2Visible);
    }

    useEffect(() => {
        if (tab1Visible || tab2Visible) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [tab1Visible, tab2Visible]);

    return(
        <>
            <SlideUp className={section.sectionContainer}>
                <SlideUp className={section.caption}>
                    Engage in intense close-quarter combat.
                    Every move matters, every second counts.
                    Master the fundamentals and play your part in victory.
                </SlideUp>

                <SlideUp className={basics.flexContainer}>

                    <SlideUp className={basics.leftCol} onClick={toggleTab1}>
                        <video className={basics.flexBackground} autoPlay muted loop>
                            <source src={require('../public/0516-Prep.mp4')}/>
                            Your browser does not support the video tag.
                        </video>
                        <div className={basics.gradientOverlay} />
                        <div className={basics.textOverlay}>
                            <div>Game 1</div>
                            <div className={basics.overlayBtn} />
                        </div>
                    </SlideUp>
            
                    <div className={basics.rightCol}  onClick={toggleTab2}>
                        <video className={basics.flexBackground} autoPlay muted loop>
                            <source src={require('../public/0516-Intro3.mp4')}/>
                            Your browser does not support the video tag.
                        </video>
                        <div className={basics.gradientOverlay} />
                        <div className={basics.textOverlay}>
                            <div>Game 2</div>
                            <div className={basics.overlayBtn} />
                        </div>
                    </div>

                </SlideUp>
            </SlideUp>

            
            <AnimatePresence>
                {tab1Visible && (
                    <div className={tabs.tabContainer} >
                        <motion.div
                            className={tabs.tabBackground}
                            initial={{x: "100%"}}
                            animate={{x: 0}}
                            exit={{x: "100%"}}
                            transition={{ ease: easeInOut, duration: 0.5 }}
                        >
                                <div className={tabs.closeTab} onClick={toggleTab1} />
                                <div className={tabs.tabContentContainer}>
                                    <div className={tabs.tabRow}>
                                        <FadeIn className={tabs.titleRow}>
                                            <div className={tabs.subHeader}>TITLE 1</div>
                                            <div className={tabs.text}>CAPTION</div>
                                        </FadeIn>
                                    </div>

                                    <FadeIn delay={0.2} className={tabs.tabRow}>
                                        <div className={tabs.subHeader}>TEST</div>
                                        <div className={tabs.text}>TEST</div>
                                    </FadeIn>

                                    <FadeIn delay={0.4} className={tabs.tabRow}>
                                        <div className={tabs.subHeader}>TEST</div>
                                        <div className={tabs.text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis neque vestibulum est lobortis, sit amet pharetra lorem dapibus. Quisque sit amet ultrices mi, ac consectetur mauris. Donec vel odio sem. Aenean et magna ex. Duis elementum feugiat nisi eget interdum. Curabitur iaculis ut quam fermentum tempus. Aenean suscipit metus sit amet tellus posuere, maximus consectetur mauris ullamcorper. Aenean egestas pellentesque libero, vitae egestas odio sodales in. Praesent vitae sodales neque. Etiam mi urna, commodo quis aliquam nec, auctor in ex. Duis porta urna sed mauris sagittis fringilla. Proin tincidunt imperdiet ipsum. In rutrum, ante id laoreet vestibulum, est nibh efficitur arcu, quis ultrices turpis turpis id diam. Nullam sagittis efficitur ipsum non vehicula.
                                            Fusce sagittis arcu non porta semper. Vestibulum nec rutrum ipsum. Praesent imperdiet tempor mauris eu auctor. Proin arcu arcu, fringilla ut felis non, pellentesque interdum lacus. Morbi id nulla vitae arcu volutpat facilisis. Maecenas sapien mauris, scelerisque id turpis ut, convallis rutrum lorem. Nam elementum elementum urna, ac accumsan nibh. Donec tempus auctor ex, quis eleifend est gravida ut. Suspendisse nec nisl scelerisque, dapibus erat eget, accumsan lorem. Curabitur semper tincidunt dictum. Vivamus dolor diam, bibendum id mattis id, scelerisque id ex.
                                        </div>
                                    </FadeIn>

                                    <FadeIn className={tabs.tabRow}>
                                        <div className={tabs.subHeader}>TEST</div>
                                        <div className={tabs.text}>TEST</div>
                                    </FadeIn>
                                </div>
                        </motion.div>
                    </div>
                )}

                {tab2Visible && (
                    <div className={tabs.tabContainer} >
                        <motion.div
                            className={tabs.tabBackground}
                            initial={{x: "100%"}}
                            animate={{x: 0}}
                            exit={{x: "100%"}}
                            transition={{ ease: easeInOut, duration: 0.5 }}
                        >
                                <div className={tabs.closeTab} onClick={toggleTab2} />
                                <div className={tabs.tabContentContainer}>
                                    <div className={tabs.tabRow}>
                                        <FadeIn className={tabs.titleRow}>
                                            <div className={tabs.subHeader}>TITLE 1</div>
                                            <div className={tabs.text}>CAPTION</div>
                                        </FadeIn>
                                    </div>

                                    <FadeIn delay={0.2} className={tabs.tabRow}>
                                        <div className={tabs.subHeader}>TEST</div>
                                        <div className={tabs.text}>TEST</div>
                                    </FadeIn>

                                    <FadeIn delay={0.4} className={tabs.tabRow}>
                                        <div className={tabs.subHeader}>TEST</div>
                                        <div className={tabs.text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis neque vestibulum est lobortis, sit amet pharetra lorem dapibus. Quisque sit amet ultrices mi, ac consectetur mauris. Donec vel odio sem. Aenean et magna ex. Duis elementum feugiat nisi eget interdum. Curabitur iaculis ut quam fermentum tempus. Aenean suscipit metus sit amet tellus posuere, maximus consectetur mauris ullamcorper. Aenean egestas pellentesque libero, vitae egestas odio sodales in. Praesent vitae sodales neque. Etiam mi urna, commodo quis aliquam nec, auctor in ex. Duis porta urna sed mauris sagittis fringilla. Proin tincidunt imperdiet ipsum. In rutrum, ante id laoreet vestibulum, est nibh efficitur arcu, quis ultrices turpis turpis id diam. Nullam sagittis efficitur ipsum non vehicula.
                                            Fusce sagittis arcu non porta semper. Vestibulum nec rutrum ipsum. Praesent imperdiet tempor mauris eu auctor. Proin arcu arcu, fringilla ut felis non, pellentesque interdum lacus. Morbi id nulla vitae arcu volutpat facilisis. Maecenas sapien mauris, scelerisque id turpis ut, convallis rutrum lorem. Nam elementum elementum urna, ac accumsan nibh. Donec tempus auctor ex, quis eleifend est gravida ut. Suspendisse nec nisl scelerisque, dapibus erat eget, accumsan lorem. Curabitur semper tincidunt dictum. Vivamus dolor diam, bibendum id mattis id, scelerisque id ex.
                                        </div>
                                    </FadeIn>

                                    <FadeIn className={tabs.tabRow}>
                                        <div className={tabs.subHeader}>TEST</div>
                                        <div className={tabs.text}>TEST</div>
                                    </FadeIn>
                                </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}