import React from 'react';

interface TextFieldProps {
    heading: string;
    variableName: string;
}

const TextFieldCustom: React.FC<TextFieldProps> = ({ heading, variableName }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(`${variableName}:`, event.target.value);
    };

    return (
        <div>
            <h3>{heading}</h3>
            <input type="text" onChange={handleInputChange} />
        </div>
    );
}

export default TextFieldCustom;
