import React from 'react';

interface ComponentProps {
    onchangeWord: any;
    onchangeMeaning: any;
    onsubmit: any;
    onchangeAuthor: any;
}

const AddWord = ({onchangeWord, onchangeMeaning, onsubmit, onchangeAuthor}: ComponentProps) => {
    return (
        <form onSubmit={onsubmit}>
            <div>
                <label htmlFor="word">Word</label>
                <input 
                    maxLength={30}
                    type='text' 
                    id="word" 
                    placeholder="Word" 
                    onChange={onchangeWord} 
                    required={true}
                    />
            </div>
            <div>
                <label htmlFor="meaning">Meaning</label>
                <input type='text' id="meaning" placeholder="Meaning, definition, etc." onChange={onchangeMeaning} required={true} />
            </div>
            <div>
                <label htmlFor="author">Added by</label>
                <input maxLength={15} type="text" id="author" placeholder="(optionally) Name, nickname, etc." onChange={onchangeAuthor} required={false} />
            </div>
            <button type="submit">Add</button>
        </form>
    );
} 



export default AddWord;