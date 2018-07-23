import React, { Component } from 'react';
import Counter from '../components/Counter';

interface StateComponent {
    allWords: number;
    approvedWords: number;
}

interface PropsComponent {
    db: any;
}

const initalizeState: StateComponent = {
    allWords: 0,
    approvedWords: 0
}

export default class CounterContainer extends Component<PropsComponent, StateComponent> {
    public state = initalizeState;

    public componentDidMount() {
        this.props.db
        .collection('words')
        .orderBy('word')
        .onSnapshot({includeMetadataChanges: true},(querySnapshot: any) => {
            const source = querySnapshot.metadata.hasPendingWrites ? "Local" : "Server";
            if (source === 'Server') {
                const approved = querySnapshot.docs.filter((doc: any) => {
                    return doc.data().verified;
                });
                this.setState({
                    allWords: querySnapshot.size,
                    approvedWords: approved.length
                })
            }
        });
    }

    public render() {
        return (!!this.state.allWords && <Counter toApproved={this.state.allWords - this.state.approvedWords} approvedWords={this.state.approvedWords} />);
    }
}
