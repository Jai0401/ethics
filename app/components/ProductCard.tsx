import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

type ProductCardProps = {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
    linkUrl: string;
    linkText: string;
  };

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, imageAlt, title, description, linkUrl, linkText }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow transition delay-100 hover:scale-105">
      <Link href={linkUrl}>
          <Image className="rounded-t-lg" src={imageUrl} alt={imageAlt} width={400} height={250} />
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
        <Link href={linkUrl} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600">
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
        </Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default ProductCard;
