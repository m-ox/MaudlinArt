import React from 'react'
import GalleryContainer from '../pages/Gallery/GalleryContainer'

function Gallery() {

    function handleScroll(e) {
        console.log('scrolling')
        const target = e.target

        if (target.scrollHeight - target.scrollTop === target.clientHeight) {
            console.log('I am the bottom')
        }
    }

    return (
        <div className="gallery">

                <GalleryContainer
                    onScroll={console.log('scrolly')}
                 />
        </div>
    )
}

export default Gallery