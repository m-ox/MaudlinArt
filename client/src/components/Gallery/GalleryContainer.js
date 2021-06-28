import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class GalleryContainer extends Component {
    constructor() {
        super()

        this.state = {
            galleryData: [],
            isLoading: true,
        }

        this.getGalleryItems = this.getGalleryItems.bind()
    }

    getGalleryItems = () => {
        axios
            .get("http://localhost:5000/api/artwork")
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
                _id,
                description
             } = artwork

            return (
                <Link key={_id} to={{
                    pathname: `/g/${_id}`,
                    artwork: artwork
                }}>
                    <div className="gallery-item">
                        <img src={artwork.url} alt={description}/>
                        <p>{artwork.description}</p>
                    </div>
                </Link>
            )
        })

        return artwork
    }

    componentDidMount() {
        this.getGalleryItems()
    }

    render() {

        return (
            <div className="gallery-grid">
                {this.galleryItems()}
            </div>
        )
    }
}
