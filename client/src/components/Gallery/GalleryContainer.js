import React, { Component } from 'react'
import axios from 'axios'

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
                date,
                description,
                medium,
                title,
                url,
                _id
             } = artwork

            return (
                <div key={_id} className="gallery-item">
                    <img src={url}/>
                    <p>{description}</p>
                </div>
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
