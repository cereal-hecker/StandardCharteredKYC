import React from 'react';

interface TextFieldProps {
    heading: string;
    variableName: string;
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldCustom: React.FC<TextFieldProps> = ({ heading, placeholder, value, onChange }) => {
    return (
        <div>
            <h3>{heading}</h3>
            <input
                type="text"
                value={value}
                onChange={onChange}
                className="w-full p-2 mt-2 mb-2 font-light rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                placeholder={placeholder}
            />
        </div>
    );
};

export default TextFieldCustom;
