import About from '@/components/personDetailsComponents/About';
import PersonContainer from '@/components/personDetailsComponents/PersonContainer';
import Reviews from '@/components/personDetailsComponents/Reviews';
import ServicesListing from '@/components/personDetailsComponents/ServicesListing';
import Skills from '@/components/personDetailsComponents/Skills';
import Footer from '@/components/shareableComponents/Footer';
import Image from 'next/image';
import React from 'react';

const PersonDetailsPage = () => {
    return (
        <div>
            <div className='w-full h-full max-w-[1520px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 2xl:px-0'>
                {/* banner part */}
                <div className=' py-[15px] md:pt-[30px] md:pb-[20px]'>
                    <Image src={"/bg-pdetails.png"} alt='banner' width={2100} height={1000} className='w-full h-full' />
                </div>
                {/* person container */}
                <PersonContainer />
                {/* About sections */}
                <About />
                {/* Service listing */}
                <ServicesListing />
                {/* skills part */}
                <Skills />
                {/* reviews part */}
                <Reviews />
                {/* Footer components */}
            </div>
            <Footer />
        </div>
    );
};

export default PersonDetailsPage;