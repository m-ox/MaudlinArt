import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Loader from 'react-spinners/ClipLoader'
import InfiniteScroll from 'react-infinite-scroll-component'
import Fade from 'react-reveal/Fade'
import {BsBoxArrowRight} from 'react-icons/bs'

//const slinky = "http://localhost:5000/api/"
const linky = "https://maudlin-artist-portfolio.herokuapp.com/api/"

export default function GalleryContainer() {

    const page = useRef(1)
    const [galleryData, setGalleryData] = useState([])
    const [hasMore, setHasMore] = useState(false)

    // COMPONENT MOUNTED
    useEffect(
        () => { 
            console.log('init')
            page.current = 1
            setGalleryData([])
            getPage(1)
            setHasMore(true)
         },
        //eslint-disable-next-line
    [])

    async function getPage(pageNum) {

        await axios
        .get(`${linky}artwork/page/${pageNum}`)
        .then(response => {
            if (response.data.length === 0) {
                setHasMore(false)
            }
            setGalleryData(
                galleryData.concat(response.data)
            )
        })
        .catch(error => {
            console.log('the error', error)
        })
    }
    function nextPage() {
        if (galleryData) {
            getPage(page.current)
        }

    }

    function galleryItems() {

        return (

            <InfiniteScroll
                dataLength={galleryData.length}
                next={() => {

                    console.log("NEXT")
                    page.current += 1
                    nextPage()
                    
                    }}
                children={<div className="gallery-item"></div>}
                scrollThreshold="0"
                hasMore={hasMore}
                loader={
                    <div className="gallery-item">
                        <Loader small={true} color='white' className="myLoader" />
                    </div>
                }
                endMessage={
                    
                    <div className="gallery-item thasit">
                        <h2>You've reached the end...</h2>
                        <a href="https://www.instagram.com/maudlinarts">
                            <p> Maybe there is more on Instagram? <BsBoxArrowRight/> </p> 
                        </a>
                    </div>
                }
            >

                {galleryData.map(artwork => {

                const {
                    _id
                } = artwork

                return (
                    <Link key={_id} to={{
                        pathname: `/g/${_id}`,
                        artwork: artwork
                    }}>
                        <div className="gallery-item"                        >
                            <Fade>
                                <img src={artwork.url} alt={`${artwork.title} painting`}/>
                            </Fade>
                        </div>
                    </Link>
                )
                })}

            </InfiniteScroll>
        )
    }

    return (
        <>
                <div className="gallery-grid" >
                    {galleryItems()}
                </div>
        </>
    )
}
