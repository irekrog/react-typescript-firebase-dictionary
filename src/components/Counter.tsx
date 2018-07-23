import React from 'react'

interface PropsComponent {
    approvedWords: number;
    toApproved: number;
}

const Counter = ({approvedWords, toApproved}: PropsComponent) => {
    return <div className="counter">
        <p className="approved">Number of words: {approvedWords}</p>
        <p className="toApproved">Number of words to approved: {toApproved}</p>
    </div>
};

export default Counter;