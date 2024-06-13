"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Modal from './Modal'; // Import the Modal component

type ProductCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  linkUrl: string;
  linkText: string;
  modalImageUrl: string; // Add a prop for the modal image
  imgHeight?: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, imageAlt, title, description, linkUrl, linkText, modalImageUrl, imgHeight }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleShowMoreClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg transition delay-0 hover:shadow-xl">
      <Link href={linkUrl}>
        <div className="relative w-full" style={{ height: imgHeight ? `${imgHeight}px` : '24rem' }}>
          <Image
            className="rounded-t-lg object-fill"
            src={imageUrl}
            alt={imageAlt}
            layout="fill"
          />
        </div>
      </Link>
      <div className="p-5">
        <Link href={linkUrl}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700">
          {description}
        </p>
        <button
          onClick={handleShowMoreClick}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-md transition delay-500 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          {linkText}
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
      <Modal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        imageUrl={modalImageUrl}
        imageAlt={imageAlt}
        description={description}
      />
    </div>
  );
};

export default ProductCard;
