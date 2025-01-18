import Modal from 'react-modal';
import css from './ImageModal.module.css';
import sprite from '../../assets/images/sprite.svg';
import { IModalImageProps } from './ImageModal.types';
import { useEffect } from 'react';

const ImageModal: React.FC<IModalImageProps> = ({ isOpen, image, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <button onClick={onClose} className={css['modal-close-button']}>
        <svg width="20" height="20">
          <use href={`${sprite}#icon-close`} />
        </svg>
      </button>

      {image && <img src={image} alt="camper" className={css['modal-image']} />}
    </Modal>
  );
};

export default ImageModal;
