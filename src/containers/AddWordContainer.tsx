import React, { Component, FormEvent } from 'react';
import AddWord from '../components/AddWord';
import ConfirmWord from '../components/ConfirmWord';

import Errors from '../components/Errors';
import { Error } from '../errors/Error';

interface ComponentProps {
    db: any
}

interface ComponentState {
    added: boolean;
    author: string;
    meaning: string;
    word: string;
    error: string;
    wait: boolean;
}

const initialState: ComponentState = {
    added: false,
    author: 'anonim',
    error: '',
    meaning: '',
    wait: false,
    word: ''
}

class AddWordContainer extends Component<ComponentProps, ComponentState> {
    public state = initialState;

    public handleClick = (e: any): void => {
        e.preventDefault();

        this.setState({
            wait: true
        })

        const newWordRef = this.props.db.collection('words').doc(this.state.word);
        
        newWordRef
        .get()
        .then((docSnapshot: any) => {
            if (!docSnapshot.exists) {
                newWordRef.set({
                    author: this.state.author,
                    date: new Date().toString(),
                    meaning: this.state.meaning,
                    timestamp: new Date(),
                    verified: true,
                    word: this.state.word
                })
                .then(() => {
                    this.setState({
                        added: true,
                        error: '',
                        wait: false
                    })
                })
                .catch((error: any) => {
                    this.setState({
                        error: Error.Validate,
                        wait: false
                    })
                    console.error("Error: ", error);
                });
            } else {
                this.setState({
                    error: Error.Exist,
                    wait: false
                })
            }
      });
    }

    public handleInputWord = (e: FormEvent<HTMLInputElement>): void => {
        this.setState({
            word: e.currentTarget.value.trim().toLowerCase()
        });
    }

    public handleInputMeaning = (e: FormEvent<HTMLInputElement>): void => {
        this.setState({
            meaning: e.currentTarget.value.trim()
        });
    }

    public handleInputAuthor = (e: FormEvent<HTMLInputElement>): void => {
        this.setState({
            author: e.currentTarget.value.trim()
        });
    }

    public render() {
        return (
            <div className="add-word">
            <AddWord
                onsubmit={(e: any) => this.handleClick(e)} // tslint:disable-line
                onchangeWord={this.handleInputWord}
                onchangeMeaning={this.handleInputMeaning}
                onchangeAuthor={this.handleInputAuthor}
                />
            {this.state.wait && <p>Czekaj...</p>}
            {(this.state.added && !this.state.error && !this.state.wait) && <ConfirmWord word={this.state.word} />}
            {(this.state.error && !this.state.wait) && <Errors error={this.state.error} />}
            </div>
            
        )}
};

export default AddWordContainer;