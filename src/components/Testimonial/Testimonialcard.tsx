// components/TestimonialCard.js
import React from 'react';
type propType = {
    name: string;
    position: string;
    company: string;
    testimonial: string;
}
const TestimonialCard: React.FC<propType> = ({ name, position, company, testimonial }) => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-gray-800">{testimonial}</p>
            <div className="mt-4">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-sm text-gray-600">{position}, {company}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
