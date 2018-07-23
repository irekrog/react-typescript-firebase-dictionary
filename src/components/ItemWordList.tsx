import React from 'react';

interface PropsComponent {
    words: string[];
}

const ItemWordList = ({words}: PropsComponent) => {
    const wordList = words.map((wordAndMeaning: any, index: number) => {
        const word = wordAndMeaning[0];
        const meaning = wordAndMeaning[1]; 
        const author = wordAndMeaning[2];
        return <li key={index}>
            <p>
                <span className="word">{word}</span>
                <span className="meaning">{meaning}</span>
                <span className="author">
                Dodane przez: {author}
            </span>
            </p>
            
        </li>
    })
    return (
        <ul className="item-list">
            {wordList}
        </ul>
    )
}

export default ItemWordList;