import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import image from '../../assets/usser.jpg'
interface ReviewCardProps {
    name: string;
    designation: string;
    image: string;
    rating: number;
    review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, designation, rating, review }) => {
    return (
        <div className="max-w-md mx-auto overflow-hidden rounded shadow-lg bg-white">
            <Image alt='' className='rounded-full h-20 w-20' src={image} />
            <div className="px-6 py-4">
                <div className="flex items-center mb-2">
                    <div className="text-xl font-bold">{name}</div>
                    <div className="ml-2 flex">
                        {Array.from({ length: rating }, (_, index) => (
                            <FaStar key={index} className="text-yellow-500" />
                        ))}
                    </div>
                </div>
                <div className="text-gray-500 text-sm mb-2">{designation}</div>
                <p className="text-gray-700 text-base">{review}</p>
            </div>
        </div>
    );
};

export default ReviewCard;
