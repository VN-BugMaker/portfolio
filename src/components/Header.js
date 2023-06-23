import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <header className='py-8'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <a href='#'>
                        <div className='font-primary font-bold text-gradient text-4xl'>
                            <TypeAnimation
                                sequence={[
                                    'khoipn.',
                                    5000,
                                    '</>',
                                    5000
                                ]}
                                speed={30}
                                wrapper='span'
                                repeat={Infinity}
                            />
                        </div>
                    </a>
                    <Link to='contact' spy={true} smooth={true}>
                        <button className='btn btn-sm'>
                            Work with me
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
