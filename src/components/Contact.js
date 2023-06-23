import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
    return (
        <section className='section' id='contact'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    {/* text */}
                    <motion.div
                        className='flex-1 flex justify-center items-center'
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div>
                            <h4 className='text-xl text-accent font-medium mb-2 tracking-wide'>Get In Touch</h4>
                            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                                Let's work <br /> together!
                            </h2>
                        </div>
                    </motion.div>
                    {/* form */}
                    <motion.form
                        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <input
                            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all duration-700'
                            type='text'
                            placeholder='Your name'
                        />
                        <input
                            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all duration-700'
                            type='email'
                            placeholder='Your email'
                        />
                        <textarea
                            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all duration-700 resize-none mb-12'
                            placeholder='Your message'
                        ></textarea>
                        <button className='btn btn-lg'>Send message</button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
