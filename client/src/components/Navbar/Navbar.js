import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import * as Fa from 'react-icons/fa'
import * as Ai from 'react-icons/ai'
import moth from '../../images/moth.png'

import { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{ color: '#fafafa'}}>
            <div className="navbar">
                <Link to="#" className="hamburger">
                    <Fa.FaBars onClick={showSidebar}/>
                    <p>Maudlin</p>
                </Link>
                <img src={moth} alt="logo"/>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <div className='nav-menu-items' onClick={showSidebar}>
                    <div className="navbar-toggle">
                        <Link to="#" className="hamburgers">
                            <Ai.AiOutlineClose />
                        </Link>
                    </div>
                    {SidebarData.map((item, idx) => {
                        return (
                            <div key={idx} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
