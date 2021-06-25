import React, { Component } from 'react'
import axios from 'axios'

export default class GalleryContainer extends Component {
    constructor() {
        super()

        this.getGalleryItems = this.getGalleryItems.bind()
    }

    getGalleryItems() {
        axios
            .get("http://localhost:5000/api/artwork")
            .then(res => {
                console.log(res)
            })
    }

    componentDidMount() {
        this.getGalleryItems()
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
