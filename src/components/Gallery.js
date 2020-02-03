import React from 'react';
import "../App.css";

import Unsplash, { toJson } from 'unsplash-js'

const unsplash = new Unsplash({
    accessKey: "8d03670f0440e759f71263ae254c0daf35b2029a75914bf99fe0d90f5e74472b",
    secret: "2179a72826ca75edc25df89c7deb20ec1c10de8bc935605cf1361a2f5cc6a062"
});


class Gallery extends React.Component {

    constructor(){
        super();
        this.state = {images: []}
    }

    componentDidMount() {
        unsplash.search.photos("product", 1, 20)
        .then(toJson)
        .then(data => {
            console.log("data fetched")
            this.setState({ images: data.results });
		})
		.catch(err => {
			console.log('Error happened during fetching!', err);
		});

    }



    render() {
        const images =  this.state.images;
        console.log(images);
        return (
            <div className="masonry">
              {images.map( image => (
                <div className="item" key={image.id}>
                    <img src={image.urls.regular} alt={images.alt_description}/>
                </div>
              ))}
            </div>
          )
    }
}

export default Gallery