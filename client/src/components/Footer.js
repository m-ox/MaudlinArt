import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillInstagram } from 'react-icons/ai'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-links-wrapper">
                <Link to="/about">
                    About
                </Link>
                <Link to="/contact">
                    Contact
                </Link>
                <Link to="/gallery">
                    Gallery
                </Link>
            </div>
            <div className="social-media-links">
                <div className="social-link">
                <a href="https://www.instagram.com/maudlinarts">
                    <AiFillInstagram />
                </a>
                </div>
            </div>
            <div className="legal-stuff">
                <p>All rights reserved | Site by Maudlin Oxalis</p>
                <p>All artwork included on this website is created, owned, and sold exclusively by the artist</p>
                <p>&copy; Maudlin Oxalis 2021</p>
            </div>
          </div>
    )
}
