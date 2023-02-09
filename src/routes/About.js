import me from '../styles/me.jpg';
import valdez from '../styles/valdez.jpg'

function About() {
  return (
    <div className="row m-0 w-100 font-serif">
      <div className="col-12 p-0 w-100">

      <div className="mt-3 row m-0 w-100 d-flex justify-content-center" >
      <div className="col-12 p-0 d-flex justify-content-center text-center ">
        <h1>My name is Timothy Kimble and I'm a </h1>
      </div>
      <div className="fw-bold col-12 p-0 d-flex justify-content-center text-center ">
        <h1><span className="i-am "></span></h1>
      </div>
      <div className="col-6 col-md-3 p-1 m-1">
        <img src={me} alt="" className="profile-image fluid"/>
      </div>
    </div>
    <div className="pt-3 pb-5 row m-0 w-100 d-flex justify-content-center bg-sky-200">
      <div className="col-12 p-0 w-100 text-center">
        <h1 className=" text-black">Hey there!</h1>
      </div>
      <div className="col-10 p-2 text-left  bg-white shadow-2xl border-2 border-gray-500 rounded border-solid">
        <h3>I'm a Full-Stack Software Engineer with a passion for growth. From test automation to deploying full-stack applications at scale in the cloud for clients and enterprise organizations, I've been creating some pretty cool applications. I started coding in 2021 after struggling to find a career path in college. I was inspired by the power of software, from video games to social media, and taught myself through online courses until I attended <span><a href="https://boisecodeworks.com/">Boise CodeWorks</a></span> where I spent over 530 hours creating full-stack applications. Since then, I have been working full-time as a software engineer delivering clean software solutions for partners.</h3>
      </div>
    </div>

    <div className="row m-0 mt-2 mb-2 pt-3 w-100 d-flex justify-content-center align-items-center">
      <div className="col-md-6 col-sm-6 p-3 ">
        <div className="row m-0 w-100 d-flex justify-content-center h-50 align-items-center">
          <div className="col-12  text-center p-3">
            <h3>Where I'm From</h3>
          </div>
          <div className="col-12 p-3">
            <h3>I grew up in the beautiful state of Alaska. I participated in a lot of school programs including band, choir, theatre, student government and basketball. Some of my favorite activites were going on walks, biking, ultimate frisbee, fishing and camping. During winter months when it was dark and cold I'd stay inside and play video games. </h3>
          </div>
        </div>

      </div>
      <div className="col-6 p-0 d-flex justify-content-center">
        <img src={valdez} alt="" className="p-3 fluid" />
      </div>
    </div>

    <div className="row m-0 mt-2 mb-2 pt-3 w-100 d-flex justify-content-center align-items-center">
    <div className="col-6 p-0 d-flex justify-content-center">
        <img src={valdez} alt="" className="p-3 fluid" />
      </div>
      <div className="col-md-6 col-sm-6 p-3 ">
        <div className="row m-0 w-100 d-flex justify-content-center h-50 align-items-center">
          <div className="col-12  text-center p-3">
            <h3>Where I'm From</h3>
          </div>
          <div className="col-12 p-3">
            <h3>I grew up in the beautiful state of Alaska. I participated in a lot of school programs including band, choir, theatre, student government and basketball. Some of my favorite activites were going on walks, biking, ultimate frisbee, fishing and camping. During winter months when it was dark and cold I'd stay inside and play video games. </h3>
          </div>
        </div>

      </div>

    </div>

      </div>
    </div>
    
  )
}

export default About;