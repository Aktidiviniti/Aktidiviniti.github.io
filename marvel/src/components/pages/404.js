import { NavLink } from "react-router-dom"
import Error404 from '../../resources/img/error404.jpg'
const Page404 = () => {
    return(
        <div className="" style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={Error404} alt="ERROR404" style={{display: 'block', width: '100%', height: '50vh'}}/>
            <NavLink to='/'style={({isActive}) => ({fontSize: '50px'})}>Return to main page</NavLink>
        </div>
    )
}
export default Page404;