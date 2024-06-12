import React from 'react';
import Image from 'next/image';

type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
  imageUrl: string;
  imageAlt: string;
  description: string;
};

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, imageUrl, imageAlt, description }) => {
  if (!isVisible) return null;

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white rounded-lg p-5 relative">
        <button className="absolute top-2 right-2 text-gray-700" onClick={onClose}>
          &times;
        </button>
        <Image
          className="rounded-lg object-cover mb-4"
          src={imageUrl}
          alt={imageAlt}
          layout="responsive"
          width={500}
          height={300}
        />
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Modal;
