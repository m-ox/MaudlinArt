import React, { Component, useState, useEffect, useRef } from 'react'
import axios from 'axios'
import useAxios from 'axios-hooks'
import { Link } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'
import InfiniteScroll from 'react-infinite-scroll-component'

const slinky = "http://localhost:5000/api/"
//const linky = "https://maudlin-artist-portfolio.herokuapp.com/api/"

export default function GalleryContainer() {

    const page = useRef(1)
    const [galleryData, setGalleryData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getPage()
    }, [])

    function getPage() {
        console.log("I am getting the page:", page.current)
        axios
        .get(`${slinky}artwork/page/${page.current}`)
        .then(res => {
            console.log('this is the response:', res, typeof res)
            setGalleryData(
                galleryData.concat(res.data)
            )
        })
    
        .catch(error => {
            console.log("There was an error retrieving the gallery items...", error);
            })
    }


    // function fetchGalleryItems() {
    //     axios
    //         .get(`${slinky}artwork/page/${page}`)
    //         .then(res => {
    //             console.log('this is the response:', res, typeof res)
    //             setGalleryData(
    //                 {...res}
    //             )
    //         })

    //         .catch(error => {
    //             console.log("There was an error retrieving the gallery items...", error);
    //           })
    // }

    // getGalleryItems = () => {
    //     axios
    //         .get(`${slinky}artwork/page/${this.state.page}`)
    //         .then(res => {
    //             this.setState({
    //                 galleryData: res.data
    //             })
    //         })

    //         .catch(error => {
    //             console.log("There was an error retrieving the gallery items", error);
    //           })
    // }

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
                hasMore={true}
                loader={<h3>Loading...</h3>}
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
                        <div className="gallery-item">
                            <img src={artwork.url} alt={`${artwork.title} painting`}/>
                        </div>
                    </Link>
                )
                })}

            </InfiniteScroll>
        )
    }

    // galleryItems() {
    //     return (

    //         <InfiniteScroll
    //             dataLength={this.state.galleryData.length}
    //             next={() => this.setPage(page + 1)}
    //         >

    //             {this.state.galleryData.map(artwork => {

    //             const {
    //                 _id
    //             } = artwork

    //             return (
    //                 <Link key={_id} to={{
    //                     pathname: `/g/${_id}`,
    //                     artwork: artwork
    //                 }}>
    //                     <div className="gallery-item">
    //                         <img src={artwork.url} alt={`${artwork.title} painting`}/>
    //                     </div>
    //                 </Link>
    //             )
    //             })}

    //         </InfiniteScroll>
    //     )
        
    // }

    // componentDidMount() {
    //     this.setState({
    //         loading: true
    //     })
    //     this.getGalleryItems()
    //     this.setState({
    //         loading: false
    //     })
    // }

    return (
        <>
            {/* {
                this.state.loading ? 
                <ClipLoader
                    size={50}
                    color={'#ffffff'}
                    loading={this.state.loading}
                />
                : */}
                <div className="gallery-grid">
                    {galleryItems()}
                </div>
            {/* } */}
        </>
    )
}
