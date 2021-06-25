import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class GalleryItem extends Component {
    constructor(props) {
        super(props)

        console.log(props)
    }

    render() {
        const { id, date, description, medium, title, url } = this.props.item

        return (
            
            <Link to={`/gallery/${id}`}>
                <div className="gallery-item-wrapper">
                    <div className="image-wrapper">
                        <img src={url} />
                    </div>
                
                    <div className="description">{description}</div>
                </div>
            </Link>
        )
    }
}
