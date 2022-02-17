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

    // COMPONENT MOUNTED
    useEffect(
        () => { init() },
        //eslint-disable-next-line
    [])

    // // COMPONENT UNMOUNTED
    // useLayoutEffect(() => {
    //     return () => {
    //         page.current = 1
    //     }
    // }, [])

    // INIT
    function init() {
        console.log('init')
        page.current = 1
        setGalleryData([])
        //window.scrollTo(0, 0)
        getPage()

        //console.log('updated gallery data:', galleryData)
    }

    async function getPage() {
        //console.log('this is my page and gallery data:', page, galleryData)

        await axios
        .get(`${linky}artwork/page/${page.current}`)
        .then(response => {
            //console.log('the response:', response)
            if (response.data.length === 0) {
                setHasMore(false)
            }
            //console.log('this is the gallery data I am concatting to:', galleryData)
            setGalleryData(
                galleryData.concat(response.data)
            )
        })
        .catch(error => {
            console.log('the error', error)
        })
    }

    // // THIS GETS DATA
    // async function getData() {
    //     const res = await axios
    //     .get(`${linky}artwork/page/${page.current}`)
    //     //console.log('axios data:', res)

    //     return res.data
    // }

    // // THIS HANDLES THE DATA
    // async function getPage() {
    //     //console.log('this is the gallery data:', galleryData)
    //     //console.log('calling');
    //     const res = await getData()
    //     //console.log('received!', res);

    //     setGalleryData(
    //         galleryData.concat(res)
    //     )
    // }

    // // GET NEW PAGE DATA
    // async function getPage() {

    //     console.log("this is my galleryData:", galleryData)

    //     // HAVING THIS HERE PROVES MY ASYNC IS OFF
    //     // if (galleryData) {
    //     //     setTimeout(() => {
    //     //         console.log('timer')
    //     //     }, 500);
    //     // }

    //     console.log("I am getting the page:", page.current)

    //     await axios
    //     .get(`${linky}artwork/page/${page.current}`)
    //     .then(res => {

    //         console.log('this is the response:', res, typeof res)

    //         // THIS IS HOW THE LOADING TURNS INTO AN END MESSAGE -- WE NEED IT
    //         if (res.data.length < 6) {
    //             setTimeout(() => {
    //                 setHasMore(false)
    //             }, 1000)
    //         }

    //         setGalleryData(
    //             galleryData.concat(res.data)
    //         )
    //     })
    
    //     .catch(error => {
    //         console.log("There was an error retrieving the gallery items...", error);
    //         })
    // }

    async function nextPage() {
        const res = await getPage()

        return res
        // setTimeout(() => {
        //     getPage()

        //     console.log('updated gallery data:', galleryData)
            
        // }, 1000)

    }

    function galleryItems() {

        return (

            <InfiniteScroll
                dataLength={galleryData.length}
                next={() => {

                    console.log("NEXT")
                    page.current += 1
                    getPage()
                    
                    }}
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
