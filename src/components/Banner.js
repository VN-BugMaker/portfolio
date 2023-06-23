import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Image from '../assets/header-img.svg';
import { FaGithub, FaDribbble, FaFacebook, FaPhoneSquare } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
    return (
        <div className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                    <div className='flex-1 text-center font-secondary lg:text-left'>
                        <motion.h1
                            className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
                            variants={fadeIn('up', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: true, amount: 0.7}}
                        >
                            KHOI<span>PN</span>
                        </motion.h1>
                        <motion.div
                            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: true, amount: 0.7}}
                        >
                            <span className='mr-4 text-white'>I am a</span>
                            <TypeAnimation
                                sequence={[
                                    'Developer',
                                    2000,
                                    'Blogger',
                                    2000
                                ]}
                                speed={50}
                                className='text-accent'
                                wrapper='span'
                                repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p
                            className='mb-8 mx-auto lg:mx-0'
                            variants={fadeIn('up', 0.5)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: true, amount: 0.7}}
                        >
                            I have 3 years of experience building and designing software. Currently, I love to work on web application / mobile application using technologies like React, Tailwind, NextJS, ExpressJS, React Native.
                        </motion.p>
                        <motion.div
                            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
                            variants={fadeIn('up', 0.6)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: true, amount: 0.7}}
                        >
                            <button className='btn btn-lg'>Contact me</button>
                            <a href='#' className='text-gradient btn-link'>Download CV</a>
                        </motion.div>
                        <motion.div
                            className='flex text-[20px] max-w-max gap-x-6 mx-auto lg:mx-0'
                            variants={fadeIn('up', 0.7)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: true, amount: 0.7}}
                        >
                            <a href='https://facebook.com/khoipn.dev' target="_blank">
                                <FaFacebook />
                            </a>
                            <a href='https://github.com/VN-BugMaker' target="_blank">
                                <FaGithub />
                            </a>
                            <a href='https://sharelinhtinh.com' target="_blank">
                                <FaDribbble />
                            </a>
                            <a href='tel:+84986153861' target="_blank">
                                <FaPhoneSquare />
                            </a>
                        </motion.div>
                    </div>
                    <motion.div
                        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
                        variants={fadeIn('down', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: true, amount: 0.7}}
                    >
                        <img src={Image} alt='' />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
