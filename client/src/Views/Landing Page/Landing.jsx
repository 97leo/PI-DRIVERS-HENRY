import { NavLink } from 'react-router-dom';
import style from './Landing.module.css';
const Landing = () => {
    return (
        <div className={style.landingContainer}>
           <h1>DRIVERS APP</h1>
           <button>
                <NavLink to="/home">
                    Home Page
                </NavLink>
            </button>
        </div>
    )
    }
    export default Landing;