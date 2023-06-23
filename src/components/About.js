import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import { fadeIn } from '../variants';

const About = () => {
    const [ref, inView] = useInView({ threshold: 0.5 });
    return (
        <section className='section' id='about' ref={ref}>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
                    {/* image */}
                    <motion.div
                        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.3 }}
                    ></motion.div>
                    {/* text */}
                    <motion.div
                        className='flex-1'
                        variants={fadeIn('left', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className='h2 text-accent'>About me</h2>
                        <h3 className='h3 mb-4'>Hi. I'm KhoiPN, nice to meet you. Please take a look around.</h3>
                        <p className='mb-6 '>I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips</p>
                        {/* stats */}
                        <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                            <div>
                                <div className='text-[40px] font-tertiary text-gradient mb-2 leading-10'>
                                    { inView ? <CountUp start={0} end={3} duration={3}/> : null }
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Years of <br />
                                    Experience
                                </div>
                            </div>
                            <div>
                                <div className='text-[40px] font-tertiary text-gradient mb-2 leading-10'>
                                    { inView ? <CountUp start={0} end={4} duration={3}/> : null }+
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Projects <br />
                                    Completed
                                </div>
                            </div>
                            <div>
                                <div className='text-[40px] font-tertiary text-gradient mb-2 leading-10'>
                                    { inView ? <CountUp start={0} end={3} duration={3}/> : null }
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Satisfied <br />
                                    Clients
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-x-8 items-center'>
                            <button className='btn btn-lg'>Contact me</button>
                            <a href='#' className='text-gradient btn-link'>Download CV</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
