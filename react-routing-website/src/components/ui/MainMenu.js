import { Link } from 'react-router'
import FaHome from 'react-icons/lib/fa/home'

const MainMenu = () => {
    return (
        <nav>
            <Link to="/"><FaHome/></Link>
            <Link to="about"
            	  activeStyle={{
            	  backgroundColor: "white",
            	  color: "slategray"
            	}}>
            	About
            </Link>
            <Link to="members"
            	  activeStyle={{
            	  	backgroundColor: "white",
            	  	color: "slategray"
            	  }}>
            	  Events
           	</Link>
			<Link to="Values"
            	  activeStyle={{
            	  	backgroundColor: "white",
            	  	color: "slategray"
            	  }}>
            	  Our Values
           	</Link>
        </nav>
    )
}

export default MainMenu
