import React, { useEffect } from 'react'
import GalleryContainer from '../pages/Gallery/GalleryContainer'

function Gallery() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="gallery">

                <GalleryContainer/>
        </div>
    )
}

export default Gallery