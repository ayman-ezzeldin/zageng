import CommitteeSelection from "./Choose2"
import './App2.css'
const JoinZagEngPage = () => {
  return (
    <div>
    <div className=" container mx-auto font-mon xl:max-w-[1200px] my-9 text-white bg-black ">
      <h1 className=" text-5xl font-bold ml-4 md:ml-9 pl-4 pt-14 ">Join ZagEng</h1>
      <form className=" mt-14 mx-auto flex gap-5 justify-center items-center flex-wrap">
        <div className=" flex gap-5 justify-center items-start flex-wrap">
          <h2 className="text-2xl sm:ml-[-16px]">Basic information</h2>
          <div className=" sm:border-l-2 sm:pl-4 sm:ml-7 flex flex-col gap-4" >
            <div>
            <label htmlFor="" className=" block ">Full Name</label>
            <input type="text" placeholder="Your Name" className="w-[300px] ml-2 mt-1 lg:w-[620px] outline-none rounded-md px-2 py-2 bg-black border border-gray-700 " required />
            </div>
            <div>
            <label htmlFor=""  className=" block">Email</label>
            <input type="email" placeholder="Your Email" className="w-[300px] ml-2 mt-1 lg:w-[620px] outline-none rounded-md px-2 py-2 bg-black border border-gray-700 " required />
            </div>
            <div>
            <label htmlFor="" className=" block">Phone</label>
            <input type="tel" placeholder="Your Number" className="w-[300px] ml-2 mt-1 lg:w-[620px] outline-none rounded-md px-2 py-2 bg-black border border-gray-700 " required />
            </div>
            <div className="flex flex-col w-full my-2 py-2">
          <label className="" >Destination</label>
          <select className="outline-none rounded-md ml-2 px-2 py-2 bg-black border border-gray-700 w-[300px] lg:w-[620px]" required > 
            <option value="Preparatory engineering">Preparatory engineering</option>
            <option value="Computer and Syatems Engineering">Computer and Syatems Engineering</option>
            <option value="Electrical Communications Engineer">Electrical Communications Engineer</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Mechanical Power Engineering">Mechanical Power Engineering</option>
            <option value="Mechanical Production Engineeering">Mechanical Production Engineeering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Architectural Engineering">Architectural Engineering</option>
            <option value="Industrial Engineering">Industrial Engineering</option>
            <option value="Structural Engineering<">Structural Engineering</option>
            <option value="Other">Other</option>
          </select>
        </div>
          </div>
        </div>
        <CommitteeSelection/>
        <div className=" flex gap-5 justify-center items-start flex-wrap mt-9">
          <h2 className="text-2xl sm:ml-[-16px]">Committee questions</h2>
          <form className=" sm:border-l-2 sm:pl-4 sm:ml-1 sm:mr-6 flex flex-col gap-4 mx-auto" >
            <div>
            <label htmlFor="" className=" block ">Why did you choose this committee?</label>
            <textarea className=" w-[300px] ml-2 mt-1 lg:w-[620px] outline-none rounded-md px-2 py-2 bg-black border border-gray-700 resize-none "rows="4" placeholder=" your answer"></textarea>
            </div>
            <div>
            <label htmlFor=""  className=" block">One more question here</label>
              <textarea className=" w-[300px] ml-2 mt-1 lg:w-[620px] outline-none rounded-md px-2 py-2 bg-black border border-gray-700 resize-none "rows="4" placeholder=" Any question"></textarea>
            </div>
            <div>
            <label htmlFor="" className=" block">Another question</label>
            <textarea className=" w-[300px] ml-2 mt-1 lg:w-[620px] outline-none rounded-md px-2 py-2 bg-black border border-gray-700 resize-none "rows="1" placeholder=" Any question"></textarea>
            </div>
          </form>
        </div>
        <div className=" flex flex-col justify-center items-center pt-5 sm:pt-14 w-[300px] mx-auto">
          <p className=" font-medium font-mon text-center text-xl sm:h-[29px] sm:w-[511px] ">Great, you are done! Submit the form now!</p>
          <input type="submit" value="Submit" className=" sm:w-[390px] px-8 mt-4 mb-8 cursor-pointer leading-10 tracking-wide h-[73px] text-2xl p-2 rounded-md gap-2 bg-[#be4c03] font-mon font-[700] " />
        </div>
      </form>
    </div>
    </div>
  )
}


export default JoinZagEngPage;
