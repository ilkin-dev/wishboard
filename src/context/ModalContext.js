import React, { createContext, useContext, useState } from 'react';

// Create Modal Context
const ModalContext = createContext();

// Custom hook to use the modal context
export const useModal = () => useContext(ModalContext);

// Modal Provider Component
export const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [modalInfo, setModalInfo] = useState(''); // New state for holding modal info

    const openModal = (content, info = '') => { // Accept info as an optional parameter
        setModalContent(content);
        setModalInfo(info); // Set modal info dynamically
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
        setModalInfo(''); // Reset modal info
    };

    return (
        <ModalContext.Provider value={{ isModalOpen, modalContent, modalInfo, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};
