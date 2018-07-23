import React from 'react';

interface ComponentProps {
    word: string;
}

const ConfirmWord = ({word}: ComponentProps) => {
    return (
        <div className="info">
            This word has been sent to verify
        </div>
    )
}

export default ConfirmWord;