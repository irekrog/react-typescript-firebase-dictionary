import React, { Component, FormEvent } from 'react';
import SearchWord from '../components/SearchWord';

interface PropsComponent {
    db: any;
}

interface ComponentState {
    foundWord: string;
    word: string;
}

const initialState: ComponentState = {
    foundWord: '',
    word: ''
}

export default class SearchWordContainer extends Component<PropsComponent, ComponentState> {
    
    public state  = initialState;

    public handleSubmit = (e: any): void => {
        e.preventDefault();

        const citiesRef = this.props.db.collection("words");.
        citiesRef.where("word", "==", this.state.word)
        .get()
        .then((querySnapshot: any) => {
            if (querySnapshot.size !== 0) {
                querySnapshot.forEach((doc: any) => {
                    this.setState({
                        foundWord: doc.data().word.toString()
                    })
                });
            } else {
                this.setState({
                    foundWord: 'Nie znaleziono słowa w słowniku'
                })
            }
        })
        .catch((error: any) => {
            console.log(0);
            this.setState({
                foundWord: ''
            })
            console.log(error);
        })
        
    }
    
    public handleInput = (e: FormEvent<HTMLInputElement>): void => {
        this.setState({
            word: e.currentTarget.value
        }, () => {
            console.log(this.state.word);
        });
    }

    public render() {
        const word = this.state.foundWord;
        return (
            <div  className="search-word">
                <SearchWord
                    word={this.state.word}
                    onsubmit={(e: any) => this.handleSubmit(e)} // tslint:disable-line
                    onchange={this.handleInput} 
                />
                <p>Znaleziono słowo: {word}</p>
                <p>Definicja: </p>

            </div>
            )
    }
}