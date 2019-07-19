import React from 'react';
import Gallery from 'react-grid-gallery';
 
const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnailWidth: 750,
        thumbnailHeight: 300,
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 750,
        thumbnailHeight: 300,
        caption: "Boats (Jeshu John - designerspics.com)"
},
 
{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 750,
        thumbnailHeight:300
}]

export default class Galeria extends React.Component{
    render() {
       return (
        <Gallery 
            images={IMAGES}
            isSelected={false}
            enableLightbox={false}
            enableImageSelection={false}
            rowHeight="180"
        />)
}}