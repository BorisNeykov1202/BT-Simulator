import  {NavLink} from 'react-router-dom'
export default function NavigationBar (){
    return (
        <>
        <div className='navigation'>
            <div className='navigation-menu'>
            <NavLink to='/' className='navigation-link'>Home</NavLink>
            <NavLink to='/play' className='navigation-link'>Play</NavLink>
            <NavLink to='/docs' className='navigation-link'>Get Started</NavLink>  
            <NavLink to='/about' className='navigation-link'>About</NavLink>
            
            </div>     
        </div>
        </>
    );
}
