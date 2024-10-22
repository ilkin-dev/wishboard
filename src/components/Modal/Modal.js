import React from 'react';
import { useModal } from '../../context/ModalContext';
import './Modal.scss';

const Modal = () => {
    const { isModalOpen, modalContent, modalInfo, closeModal } = useModal();

    if (!isModalOpen) return null;

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={closeModal}>X</button>
                {modalInfo && <p className="modal-info">{modalInfo}</p>}
                {modalContent}
            </div>
        </div>
    );
};

export default Modal;
