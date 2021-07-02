import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class GalleryItem extends Component {
    constructor(props) {
        super(props)

        const pathname = this.props.location.pathname
        const slug = pathname.slice(3);

        console.log('pathname:', pathname)
        console.log('slug:', slug)

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

        this.formatDate = this.formatDate.bind(this)
    
      }

    formatDate = (givendate) => {
        const fDate = givendate.slice(0,10) 

        return fDate
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

                 this.formatDate(date)

                 this.setState({
                    _id,
                    available,
                    date: this.formatDate(date),
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
                <div className="header-wrapper">
                    <h2>{this.state.title}</h2>
                    <p>Posted on: {this.state.date}</p>
                </div>

                
                    <div className="image-wrapper">
                        <a href={this.state.url} target="_blank" rel="noreferrer">
                            <img src={this.state.url} alt={this.state.description}/>
                        </a>
                    </div>

                <div className="details-wrapper">
                    <div className="available-media">
                        <p className="medium">{this.state.medium}</p>

                        {this.state.available === "available" ?
                            <Link
                                to={{
                                    pathname: "/contact",
                                    state: { msg: `Hello, I am interested in the ${this.state.title} painting.` }}}
                                >
                                <p className={this.state.available}>{this.state.available} </p>
                            </Link>
                        :
                            <p className={this.state.available}>{this.state.available}</p>
                        }

                    </div>
                    <p>{this.state.description}</p>
                </div>
            </div>
        )
    }
}
