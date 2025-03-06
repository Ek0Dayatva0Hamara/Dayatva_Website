import React from 'react';
import './Home.css';
import homee from '../assets/homee.jpg'; 
import amer from '../assets/amer.jpg';
import chirag from '../assets/chirag.jpg';
import manish from '../assets/manish.jpeg';
import mukul from '../assets/mukul.jpeg';
const DayatvaHomePage = () => {
    return (
        <div className="relative">
            {/* Announcements Section */}
            <div className="bg-white-500 text-blue py-2 px-4 text-center font-bold text-lg">
                <marquee behavior="scroll" direction="left">
                     <span className="text-blue-700">Upcoming Event:</span> Cloth Donation on 9th November | Pad Distribution on 19th October | Student Intake on 16th November 
                </marquee>
            </div>

            <div className="relative w-full h-[calc(100vh-120px)]">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${homee})` }}
            ></div>

            {/* Overlay with Text in the Center */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-center bg-black bg-opacity-50">
                <div>
                    <h1 className="text-5xl font-bold drop-shadow-lg">DAYATVA - A Social Initiative</h1>
                    <p className="text-lg mt-4 max-w-2xl drop-shadow-md">
                        Be the change you want to see....
                    </p>
                </div>
            </div>
        </div>


             {/* Information Sections (One Row) */}
             <div className="flex flex-wrap justify-center gap-8 px-8 py-16 bg-white">
            {[
                { title: "ABOUT US", text: "A social initiative of IITRAM.", icon: "M12 4a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm-7 16v-1a5 5 0 0 1 10 0v1" },
                { title: "HAPPY TEACHING", text: "Providing quality education to underprivileged children.", icon : "M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" },
                { title: "MEDIA PRESENCE", text: "Our Presence in Media.", icon: "M21 4H3v16h18V4zM12 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM5 19h14" }
            ].map((section, index) => (
                <div key={index} className="box">
                    <svg className="box-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={section.icon} />
                    </svg>
                    <div>
                        <h2 className="box-title">{section.title}</h2>
                        <p className="box-text">{section.text}</p>
                        <a href="#" className="text-red-500 mt-2 block">Learn More</a>
                    </div>
                </div>
            ))}
        </div>


             {/* Our Initiatives Section */}
             <div className="text-center py-16">
                <h2 className="text-2xl font-bold relative inline-block pb-2 border-b-4 border-red-500">
                    Our Initiatives
                </h2>
                <p className="text-gray-600 text-lg mt-2">Empowering education through social initiatives</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 mx-auto w-fit">
                    {[
                        { title: "Free NTSE Guidance", text: "Providing guidance for NTSE" },
                        { title: "Gyanoday", text: "Donating books to libraries" },
                        { title: "Free 10th Board Guidance", text: "Providing guidance for NTSE" },
                        { title: "Walk to the Future", text: "A walk for a cause" },
                        { title: "DAATSE", text: "Dayatva's All A'bad Talent Search Exam" },
                        { title: "Dayatva Green", text: "Spreading environmental awareness" },
                        { title: "Dayatva Happiness", text: "Spreading love and Happiness" },
                        { title: "E-learning", text: "Now at your Fingertips" },
                    ].map((initiative, index) => (
                        <div key={index} className="w-64 p-6 border rounded-xl shadow-lg bg-white text-center hover:scale-105 transition-all duration-300 ease-in-out">
                            <svg className="h-12 w-12 mx-auto text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 21l-1-1C5.5 15 2 12 2 8a6 6 0 0 1 10-4 6 6 0 0 1 10 4c0 4-3.5 7-9 12l-1 1z" />
                            </svg>
                            <h3 className="text-lg font-bold mt-2">{initiative.title}</h3>
                            <p className="text-gray-500 text-sm">{initiative.text}</p>
                        </div>
                    ))}
                </div>
            </div>
                
            {/* Founders Section */}
<div className="text-center py-16">
    <h2 className="text-2xl font-bold relative inline-block pb-2 border-b-4 border-red-500">
        Founders
    </h2>
    <p className="text-gray-600 text-lg mt-2">Without their vision, this legacy wouldn't have become a reality</p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 mx-auto w-fit">
        {[
            { name: "Amir Miya", title: "Founder Dayatva", img: amer },
            { name: "Chirag Rawat", title: "Founder Dayatva", img: chirag },
            { name: "Manish Kumar", title: "Founder Dayatva", img: manish },
            { name: "Mukul Jangid", title: "Founder Dayatva", img: mukul }
        ].map((founder, index) => (
            <div key={index} className="w-64 p-6 border rounded-xl shadow-lg bg-white text-center hover:scale-105 transition-all duration-300 ease-in-out">
                <img src={founder.img} alt={founder.name} className="h-24 w-24 mx-auto border-4 border-gray-200" />
                <h3 className="text-lg font-bold mt-4">{founder.name}</h3>
                <p className="text-gray-500 text-sm">{founder.title}</p>
            </div>
        ))}
    </div>
</div>

        </div>
    );
};

export default DayatvaHomePage;