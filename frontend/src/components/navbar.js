//frontend - navbar.js - hansel delos santos Dec. 2,2022
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
       <h1><center>University of Technology and Applied Sciences</center></h1>
       <h1><center>IT Department</center></h1>  
        </Link>
        <h3><i><center>Hansel Delos Santos - Lecturer</center></i></h3>
        <h2><center>MERN - Full Stack Web App Dev</center></h2>
        <h2><center>Workout Tracking System App</center></h2>
        
      </div>
    </header>
  )
}

export default Navbar