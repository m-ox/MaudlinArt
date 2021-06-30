import React from 'react'

import me from "../../images/me.png"

function About() {
    return (
        <div className="about">

            <div className="picofme">
                <img src={me} alt="maud"/>
            </div>

            <div className="content-wrapper">

                <div className="about-description">
                    Maudlin is an artist from Missoula MT. There is not one particular theme throughout all their work, but it definitely involves the occasional tentacles mixing into waves and body horror.
                </div> 

                <div className="featured-works">
                    <h2>Where to find me and my work</h2>

                    <ul>
                        <li><a href="https://www.instagram.com/p/B9Z8OrLn4Zx/">Painted Clocks, located at the Loose Moose in downtown Missoula Montana</a></li>
                        <li>Self-hosted small public art night events during the fall</li>
                        <li>Portrait drawing in downtown Coeur d'Alene Idaho semi-frequently in the summer</li>
                        <li><a href="https://www.facebook.com/slantstreetzine/">Slant Street Zine, issues 000-004</a></li>
                    </ul>
                </div>

                <p className="flexing">▂▃▅▇█▓▒░ Also she coded this entire website ░▒▓█▇▅▃▂</p>

            </div>
        </div>
    )
}

export default About