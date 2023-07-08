import css from './ImageGalery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({showModal, images}) => {
	return (
		<ul className={css.gallery}>
			<ImageGalleryItem
				images={images}
				showModal={showModal}
			/>
		</ul>
	);
};

export default ImageGallery;