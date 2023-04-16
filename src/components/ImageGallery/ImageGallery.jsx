import { Component } from 'react';
import css from './ImageGalery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    currentImage: null,
  };
  render() {
    return (
      <ul className={css.gallery}>
        <ImageGalleryItem
          images={this.props.images}
          showModal={this.props.showModal}
        />
      </ul>
    );
  }
}

export default ImageGallery;