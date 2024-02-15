import '/src/omr/input.css'
import '/src/omr/output.css'
import '/src/omr/in.css'
const About = () => {
  return (
    <div className="bg-black text-white font-bodyfont">
        {/* <!-- main container --> */}
      <div className="main-cont px-24 ">
          {/* <!-- who are we --> */}
          <div className="part1 mt-56 flex justify-normal">
              <div className="w-costom">
                  <h1 className="text-6xl font-bold my-10 text-center">Who are we?</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis doloribus beatae eligendi ex eaque? Quisquam provident adipisci omnis voluptates eveniet ullam,
                      nesciunt vero, quia illum, et inventore quod sequi tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias in consequuntur vero nesciunt minima non. Libero minima, cum porro neque sunt est alias. Nesciunt illo hic eaque asperiores libero quidem!
                  </p>
                  <br/>
                  <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel incidunt, culpa accusantium ullam quo modi hic ratione consectetur nihil architecto? Accusantium ea ratione aspernatur dolores dolore facere rem ipsum cupiditate!
                  </p>
              </div>
              <div className="w-60 h-72 ml-56 pr-10 mt-12">
                  <img src="/src/omr/images/question_mark.png" alt="image question"/>
              </div>
          </div>
          {/* <!-- Vission --> */}
          <div className="part2 mt2-costom flex justify-normal">
              <div className="mt-12">
                  <img src="/src/omr/images/pink brain.png" alt="image brain" className="img2"/>
              </div>
              <div className="ml-7 w-costom">
                  <h1 className="text-6xl font-bold my-10 text-center">Our vision</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod voluptatum debitis excepturi impedit. Quia aliquam architecto deleniti beatae dolore esse aperiam officiis,
                      in quos, cumque sapiente adipisci numquam possimus nobis?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fuga asperiores dolor eum vel et quam architecto hic cum magni sint tempore consequatur maxime in, delectus voluptates suscipit voluptatum rerum.
                  </p>
                  <br/>
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Totam ad optio reprehenderit autem! Incidunt nostrum alias maxime 
                      eveniet impedit dolores non
                      voluptate aliquid adipisci dolorem hic tempora, officia nam eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, eveniet porro ut omnis expedita itaque mollitia, voluptate aliquam officiis, earum aut soluta corporis laborum ipsa optio repellat culpa. Fugit, perspiciatis!
                  </p>
              </div>
          </div>
          {/* <!-- mission --> */}
          <div className="part3 mt3-costom flex justify-normal">
              <div className="w-costom">
                  <h1 className="text-6xl font-bold my-10 text-center">Our mission</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod voluptatum debitis excepturi impedit. Quia aliquam architecto deleniti beatae dolore esse aperiam officiis,
                      in quos, cumque sapiente adipisci numquam possimus nobis?
                  </p>
                  <br/>
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Totam ad optio reprehenderit autem! Incidunt nostrum alias maxime 
                      eveniet impedit dolores non
                      voluptate aliquid adipisci dolorem hic tempora, officia nam eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore exercitationem obcaecati cumque quibusdam, veniam illum ea, quia et, facilis dolor numquam esse hic accusantium. Illum iste modi dolores asperiores alias.
                  </p>
              </div>
              <div className="mt-12 ml-12"><img src="/src/omr/images/trophy and target.png" alt="image"/></div>
          </div>
      </div>
      {/* <!-- footer --> */}
      <footer className="bg-gradient-to-t from-amber-950 to-black h mt-20 w-full">
          <div className="flex justify-normal px-24">
              <img src="/src/omr/images/image 1.png" alt="image"/>
              <h2 className="ml-5 mt-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-orange-600 to-orange-800">Zag Eng Family</h2>
          </div>
          <div className="flex justify-normal px-24 mt-5">

          <div className="col-4 px-5 my-4 w-96">
              <h3 className="text-4xl">Care about present Build the future</h3>
              <p className="mt-5 text-2xl">This is our slogan, our aim is to recruit and build talents</p>
          </div>
          
          <div className="col-4 my-4 px-5 ">
              <h4 className="ml-32 text-2xl">Family</h4>
              <ul className="ml-32">
                  <li className="mt-5"><a href="" className="text-gray-300">About us</a></li>
                  <li className="mt-3"><a href="" className="text-gray-300">privacy policy</a></li>
              </ul>
          </div>
          <div className="col-4 my-4 px-5 ">
              <h4 className="ml-32 text-2xl">COMMITTEES</h4>
              <ul className="ml-32">
                  <li classNameName="mt-5"><a href="" className="text-gray-300">Human Resources</a></li>
                  <li className="mt-3"><a href="" className="text-gray-300">Acadamic</a></li>
                  <li className="mt-3"><a href="" className="text-gray-300">Information technology</a></li>
                  <li className="mt-3"><a href="" className="text-gray-300">Technical</a></li>
                  <li className="mt-3"><a href="" className="text-gray-300">Media</a></li>
                  <li className="mt-3"><a href="" className="text-gray-300">Computer science</a></li>
                  
              </ul>
          </div>
          <div className="col-4 my-4 px-5 ">
              <h4 className="ml-32 text-2xl">Follow us</h4>
              <ul className="ml-32">
                  <li className="mt-5"><a href="https://twitter.com/engzagfamily " target="_blank" className="text-gray-300 flex justify-normal"><img src="/src/omr/images/Vector (1).png" alt="image" className="pr-3"/>X</a></li>
                  <li className="mt-3"><a href="https://www.facebook.com/zagengfamily" target="_blank" className="text-gray-300 flex justify-normal"><img src="/src/omr/images/Vector.png" alt="image" className="pr-3"/>Facebook</a></li>
                  <li className="mt-3"><a href="https://www.instagram.com/zagengfamily/" target="_blank" className="text-gray-300 flex justify-normal"><img src="/src/omr/images/mdi_instagram.png" alt="image" className="pr-3"/>Instagram</a></li>
                  <li className="mt-3"><a href="https://www.linkedin.com/company/zagengfamily" target="_blank" className="text-gray-300 flex justify-normal"><img src="/src/omr/images/mdi_linkedin.png" alt="image" className="pr-3"/>Linkedin</a></li>
                  
              </ul>
          </div>
      </div>
      <div className="text-center mt-40">
          <p>ZagEng © - 2024 All Rights Reserved</p>
      </div>
      </footer>
    </div>
  )
}
export default About