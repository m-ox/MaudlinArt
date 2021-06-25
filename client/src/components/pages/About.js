import React from 'react'

import me from "../../images/me.png"

function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="picofme">
                    <img src={me} alt="picture of maud"/>
                </div>
                <div className="content-wrapper">
                    <div className="about-description">
                        Maudlin is an artist from Missoula MT. There is not one particular theme throughout all work, but it definitely involves the occasional tentacles mixing into waves and body horror.<br/><br/><br/><br/>
                        ▂▃▅▇█▓▒░ Also she coded this entire website ░▒▓█▇▅▃▂
                    </div> 
                    <div className="featured-works">
                        <h2>Where to find me and my work</h2>
                        <ul>
                            <li>Painted Clocks, located at the Loose Moose in downtown Missoula Montana </li>
                            <li>Self-hosted small public art night events during the fall</li>
                            <li>Portrait drawing in downtown Coeur d'Alene Idaho semi-frequently in the summer</li>
                            <li>Slant Street Zine, issues 000-004</li>
                            <li>Instagram</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About