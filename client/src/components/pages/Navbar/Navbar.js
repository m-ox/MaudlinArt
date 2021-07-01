import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import * as Fa from 'react-icons/fa'
import moth from '../../../images/moth.png'

import { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{ color: '#fafafa'}}>
            <div className="navbar">

                <div className="hamburger">
                    <Link to="#">
                        <Fa.FaBars onClick={showSidebar}/>
                    </Link>
                    <Link to ="/" className="name">
                        {/* <h2></h2> */}
                    </Link>
                </div>

                <h5>Maudlin Oxalis Studio</h5>

                <Link to ="/">
                    <img src={moth} alt="logo"/>
                </Link>
                
            </div>

            <div className="the-centerer">
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

                <div className='nav-menu-items' onClick={showSidebar}>
                    {SidebarData.map((item, idx) => {
                        return (
                            <div key={idx} className={item.cName} onMouseLeave={showSidebar}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </div>
                        )
                    })}
                </div>

                </nav>
            </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
