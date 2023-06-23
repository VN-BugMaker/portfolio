import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";

const servcies = [
    {
        name: 'HTML/CSS',
    },
    {
        name: 'TailwindCSS',
    },
    {
        name: 'NodeJS',
    },
    {
        name: 'ReactJS',
    },
    {
        name: 'React Native',
    },
    {
        name: 'MongoDB',
    }
];
const Services = () => {
    return (
        <section className='section' id='services'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    {/* text */}
                    <motion.div
                        className='flex-1 mb-12 lg:mb-0'
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className='h2 text-accent mb-6'>Skills</h2>
                        <h3 className='h3 max-w-[455px] mb-16'>I'm a Front-end Developer with over 3 years of experience.</h3>
                        <button className='btn btn-sm'>See my work</button>
                    </motion.div>
                    {/* services */}
                    <motion.div
                        className='flex-1'
                        variants={fadeIn('left', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {/* service list */}
                        <div>
                            {servcies.map((service, index) => {
                                const { name, description, link } = service;
                                return (
                                    <div className='border-b border-white/20 mb-[18px] flex' key={index}>
                                        <div className='max-w-[476px]'>
                                            <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                                            {/* <p className='font-secondary leading-tight'>{description}</p> */}
                                        </div>
                                        <div className='flex flex-1 flex-col items-end'>
                                            <a href='#' className='btn w-9 h-9 flex justify-center items-center'>
                                                <BsArrowUpRight />
                                            </a>
                                            {/* <a href='#' className='text-gradient text-sm'>
                                                {link}
                                            </a> */}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
