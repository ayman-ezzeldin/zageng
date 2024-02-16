// src/components/JoinSection.js

import { Link } from "react-router-dom";
import group from './iamges/Group 3.png'
import vector1 from './iamges/Vector 1.png'


// import React from 'react';
function JoinSection() {
return ( 
    <>
    <div className="space w-full mt-10">
        <img src={group} className="w-full" alt="background-image"/>
    </div>
    <section className="flex flex-col items-center justify-between mt-10 ">
        <div className="nums w-full  grid grid-cols-3 mb-28">
            <div className="num text-center border-r-2"> 
                <h1 className="text-4xl font-bold mb-2">24k+</h1>
                <p>followers in facebook</p>
            </div> 
            <div className="num text-center border-r-2 " > 
                <h1 className="text-4xl font-bold mb-2">2007</h1>
                {/* adding p-1 */}
                <p className="p-1"> we are here since</p>
            </div>
            <div className="num text-center">
                <h1 className="text-4xl font-bold mb-2">99+</h1>
                <p>members in the family</p>
            </div>
        </div>
        <div className="join flex flex-col justify-between items-center mt-16 relative">
            <h1 className="text-4xl font-bold mb-10">Join the family</h1>
            <p className="my-10 text-lg text-center sm:px-1 md:px-1 lg:px-56 text-gray-400 text leading-8  ">Each season begins simultaneously with universities, immediately after the end of the summer vacation. 
                We target talents with different skills and capabilities.
            Hurry yp and don't miss this exceptional opportunity!</p>
            <span className="flex justify-start items-center text-xl my-5 ll">
                <Link className="mr-2 text-green-400" to='/join' >Fill the form</Link>
                {/* <i className="fa-solid fa-arrow-right " style="color: #0fe66c;"></i> */}
            </span>
            
        
        <div className="absolute text-sm text-center text-white bg-yellow-900 p-2 note hidden xl:block 2xl:hidden" > 
            Don't miss the apportunity
        </div>
        <div className="absolute w-32 h-32 kk hidden xl:block 2xl:hidden" >
            <img className=" w-32 h-32" src={vector1} alt="logo"/>
        </div>
        </div>
    </section>
    {/* </section> */}
    </>
    );
}

export default JoinSection;
