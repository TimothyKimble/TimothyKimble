import { Link } from "react-router-dom"
const Navbar =()=>{
      return (
            <div className="row m-0 d-flex justify-content-around text-center">
                  <div className="mt-2 mb-2 col-md-3 p-0 col-12">
                        <h4><Link to="/TimothyKimble/">Home</Link></h4>
                  </div>
                  <div className="mt-2 mb-2 col-md-3 p-0 col-12">
                        <h4><Link to="/TimothyKimble/about">About</Link></h4>
                  </div>
                  <div className="mt-2 mb-2 col-md-3 p-0 col-12">
                        <h4><Link to="/TimothyKimble/experience">Experience</Link></h4>
                  </div>
            </div>
      )
}
export default Navbar;