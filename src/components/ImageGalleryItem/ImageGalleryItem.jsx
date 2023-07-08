import { useState } from 'react';
import css from './ImageGalleryItem.modules.css';

const ImageGalleryItem = ({showModal, images }) => {
	const [currentImage, setCurrentImage] = useState(null);

	const showModalImg = (image) => {
		setCurrentImage(image);
		showModal(currentImage);
	};

	const showImage = e => {
		e.preventDefault();
		setCurrentImage(e.target.src);
		showModal(e.target.src);
	};

	return (
		<>
			{images && (
				images.map(img => {
					return (
					   <li key={img.id} className={css.gallery__item}>
					      <img
					         src={img.webformatURL}
					         className={css.gallery__img}
					         alt={img.tags}
					         onClick={showImage}
					      />
					   </li>
					);
				})
			)}
		</>
	)
}
export default ImageGalleryItem;