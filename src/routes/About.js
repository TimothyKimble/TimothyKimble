import me from '../styles/me.jpg';

function About() {
  return (
    <div className="mt-3 row m-0 w-100 d-flex justify-content-center">
      <div className="col-12 p-0 d-flex justify-content-center">
        <h3>Hey there! My name is Timothy Kimble and I'm a </h3>
      </div>
      <div className="col-12 p-0 d-flex justify-content-center">
        <h3><span className="i-am"></span></h3>
      </div>
      <div className="col-sm-12 col-md-3 p-1 m-1">
        <img src={me} alt="" className="profile-image fluid"/>
      </div>

    </div>
  )
}

export default About;