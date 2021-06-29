import React, { Component } from 'react'
import axios from 'axios'

export default class GalleryDetail extends Component {
    constructor(props) {
        super(props)

        const pathname = this.props.location.pathname
        const slug = pathname.slice(3);

        this.state = {
            _id: '',
            available: '',
            date: '',
            description: '',
            medium: '',
            title: '',
            url: '',
            slug: slug
        }
    
      }

    getGalleryItem = () => {
        axios
            .get(`http://localhost:5000/api/artwork/${this.state.slug}`)
            .then(res => {
                const {
                    _id,
                    available,
                    date,
                    description,
                    medium,
                    title,
                    url
                 } = res.data

                 this.setState({
                    _id,
                    available,
                    date,
                    description,
                    medium,
                    title,
                    url
                 })

                 console.log('Artwork successfully retrieved', res.data)
            })
            .catch(error => {
                console.log("There was an error retrieving the gallery item", error);
              })
    }
    
    componentDidMount() {
        this.getGalleryItem()
    }

    render() {
        return (
            <div className='artwork-wrapper'>
                <img src={this.state.url} alt={this.state.description}/>
                <p>{this.state.description}</p>
            </div>
        )
    }
}
