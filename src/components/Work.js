import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/ezdefi.png';
import Img2 from '../assets/heavybagpro.png';
import Img3 from '../assets/lz.png';
import { Link } from 'react-scroll';

const Work = () => {
    return (
        <section className='section' id='works'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <motion.div
                        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div>
                            <h2 className='h2 leading-tight text-accent'>
                                My Lastest <br />
                                Work
                            </h2>
                            <p className='max-w-sm mb-16'>
                            I love to work on web application / mobile application using technologies like React, Tailwind, NextJS, ExpressJS, React Native.
                            </p>
                            <Link to='contact' spy={true} smooth={true}>
                                <button className='btn btn-sm'>Contact me</button>
                            </Link>
                        </div>
                        {/* image */}
                        <a href='https://play.google.com/store/apps/details?id=com.ezdefi&hl=vi&gl=US' target='_blank' className='group relative overflow-hidden border-2 border-white/20 rounded-xl'>
                            {/* overlay */}
                            <div className='group-hover:bg-black/70 absolute w-full h-full z-40 transition-all duration-300'></div>
                            {/* img */}
                            <img src={Img1} alt='' className='group-hover:scale-125 transition-all duration-300' />
                            {/* pretitle */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-gradient'>Developer</span>
                            </div>
                            {/* title */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-white text-3xl'>EzDefi Wallet</span>
                            </div>
                        </a>
                    </motion.div>
                    <motion.div
                        className='flex-1 flex flex-col gap-y-10'
                        variants={fadeIn('left', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {/* image */}
                        <a href='https://play.google.com/store/apps/details?id=com.opentechiz.heavybagpro&hl=en_US' target='_blank' className='group relative overflow-hidden border-2 border-white/20 rounded-xl'>
                            {/* overlay */}
                            <div className='group-hover:bg-black/70 absolute w-full h-full z-40 transition-all duration-300'></div>
                            {/* img */}
                            <img src={Img2} alt='' className='group-hover:scale-125 transition-all duration-300' />
                            {/* pretitle */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-gradient'>Developer</span>
                            </div>
                            {/* title */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-white text-3xl'>Heavy Bag Pro</span>
                            </div>
                        </a>
                        {/* image */}
                        <a href='https://play.google.com/store/apps/details?id=com.launchzone.lzwallet' target='_blank'  className='group relative overflow-hidden border-2 border-white/20 rounded-xl'>
                            {/* overlay */}
                            <div className='group-hover:bg-black/70 absolute w-full h-full z-40 transition-all duration-300'></div>
                            {/* img */}
                            <img src={Img3} alt='' className='group-hover:scale-125 transition-all duration-300' />
                            {/* pretitle */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-gradient'>Developer</span>
                            </div>
                            {/* title */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-white text-3xl'>LZ Wallet</span>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Work;
