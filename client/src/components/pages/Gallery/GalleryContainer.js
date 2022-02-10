import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import useAxios from 'axios-hooks'
import { Link } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'
import InfiniteScroll from 'react-infinite-scroll-component'

const slinky = "http://localhost:5000/api/"
//const linky = "https://maudlin-artist-portfolio.herokuapp.com/api/"

export default function GalleryContainer() {

        const [page, setPage] = useState(1)
        const [galleryData, setGalleryData] = useState([])
        const [loading, setLoading] = useState(false)

        useEffect(() => {
            axios
            .get(`${slinky}artwork/page/${page}`)
            .then(res => {
                console.log('this is the response:', res, typeof res)
                setGalleryData(
                    res.data
                )
            })
        
            .catch(error => {
                console.log("There was an error retrieving the gallery items...", error);
              })
        }, [])


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

    function galleryItems() {
        
        console.log('the gallery data:', galleryData, typeof galleryData)

        return (

            <InfiniteScroll
                dataLength={0}
                next={() => setPage(page + 1)}
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
