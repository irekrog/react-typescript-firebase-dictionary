import React, { Component } from 'react';

import ItemWordList from '../components/ItemWordList';

interface PropsComponent {
    db: any
}

interface StateComponent {
    words: string[];

}

const initializeState: StateComponent = {
    words: []
}

export default class WordListContainer extends Component<PropsComponent, StateComponent> {
    public state = initializeState;

    public componentDidMount() {
        this.props.db
        .collection('words')
        .orderBy('word')
        .onSnapshot({includeMetadataChanges: true},(querySnapshot: any) => {
            const source = querySnapshot.metadata.hasPendingWrites ? "Local" : "Server";
            if (source === 'Server') {
                const words = querySnapshot.docs.filter((doc: any) => {
                    return doc.data().verified;
                })
                .map((item: any) => [item.data().word, item.data().meaning, item.data().author]);
    
                this.setState({
                    words
                })
            }
        });
    }

    public render() {
        return (this.state.words.length ? <ItemWordList words={this.state.words} /> : <p className="item-list">Ładowanie...</p>);
    }
}
