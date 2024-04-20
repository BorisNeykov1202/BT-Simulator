import { NavLink } from "react-router-dom";
import { MY_SOCIAL_MEDIA_OBJ } from "../../../common/constants";
export default function Footer(){
    return (
        <>
        <div className="footer-container">    
        <NavLink to={MY_SOCIAL_MEDIA_OBJ.linkedin} className='navigation-link'><i class="fa-brands fa-linkedin"></i></NavLink>
        <NavLink to={MY_SOCIAL_MEDIA_OBJ.github} className='navigation-link'><i class="fa-brands fa-github"></i></NavLink>
        <NavLink to={MY_SOCIAL_MEDIA_OBJ.emailMe} className='navigation-link'><i className="fa-solid fa-envelope"></i></NavLink>
        </div>
        </>
    );
}