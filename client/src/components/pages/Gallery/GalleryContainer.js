import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'

export default class GalleryContainer extends Component {
    constructor() {
        super()

        this.state = {
            galleryData: [],
            loading: false
        }

        this.getGalleryItems = this.getGalleryItems.bind()
    }

    getGalleryItems = () => {
        axios
            .get("https://maudlin-artist-portfolio.herokuapp.com/api/artwork")
            .then(res => {
                this.setState({
                    galleryData: res.data
                })
            })
            .catch(error => {
                console.log("There was an error retrieving the gallery items", error);
              })
    }

    galleryItems() {
        const artwork = this.state.galleryData.map(artwork => {

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
        })

        return artwork
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        this.getGalleryItems()
        this.setState({
            loading: false
        })
    }

    render() {

        return (
            <>
            {
                this.state.loading ? 
                <ClipLoader
                    size={50}
                    color={'#ffffff'}
                    loading={this.state.loading}
                />
                :
                <div className="gallery-grid">
                    {this.galleryItems()}
                </div>
            }
            </>
        )
    }
}
