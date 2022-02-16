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
    const [hasMore, setHasMore] = useState(true)

    useEffect(
        () => { init() },
        //eslint-disable-next-line
    [])

    useLayoutEffect(() => {
        return () => {
            page.current = 1
        }
    }, [])

    function init() {
        window.scrollTo(0, 0)
        getPage()
    }

    async function getPage() {

        console.log("this is my galleryData:", galleryData)

        // HAVING THIS HERE PROVES MY ASYNC IS OFF
        // if (galleryData) {
        //     setTimeout(() => {
        //         console.log('timer')
        //     }, 500);
        // }

        console.log("I am getting the page:", page.current)

        await axios
        .get(`${linky}artwork/page/${page.current}`)
        .then(res => {

            console.log('this is the response:', res, typeof res)

            // THIS IS HOW THE LOADING TURNS INTO AN END MESSAGE -- WE NEED IT
            if (res.data.length < 6) {
                setTimeout(() => {
                    setHasMore(false)
                }, 1000)
            }

            setGalleryData(
                galleryData.concat(res.data)
            )
        })
    
        .catch(error => {
            console.log("There was an error retrieving the gallery items...", error);
            })
    }

    function nextPage() {

        page.current = page.current + 1
        setTimeout(() => {
            getPage()
        }, 1000)

    }

    function galleryItems() {

        return (

            <InfiniteScroll
                dataLength={galleryData.length}
                next={() => nextPage()}
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
