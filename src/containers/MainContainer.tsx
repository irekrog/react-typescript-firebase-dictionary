import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import React, { Component } from 'react';
import AddWordContainer from '../containers/AddWordContainer';
// import SearchWordContainer from '../containers/SearchWordContainer';
import WordListContainer from './WordListContainer';

import '../App.css';
import CounterContainer from './CounterContainer';


firebase.initializeApp({
    apiKey: "AIzaSyDPYAHoLIZ2GhkewVOMTtRW3tdcT_D5_F4",
    authDomain: "dictionary-test-2f2ca.firebaseapp.com",
    databaseURL: "https://dictionary-test-2f2ca.firebaseio.com",
    messagingSenderId: "802588895515",
    projectId: "dictionary-test-2f2ca",
    storageBucket: "dictionary-test-2f2ca.appspot.com"
});

const db = firebase.firestore();


const settings = { 
    timestampsInSnapshots: true
}

db.settings(settings);

interface ComponentProps {
    props: string
}

interface ComponentState {
    words: string
}

const initializeState: ComponentState = {
    words: ''
}

export class MainContainer extends Component<ComponentProps, {}> {
    public state = initializeState;
    
    public render() {
        return (
            <div className="container">
                <div className="left-container">
                <h1 className="title">Dictionary</h1>
                <p>Dev version (no verification)</p>
                <CounterContainer db={db} />
                <AddWordContainer db={db} />
                </div>
                
                {/* <SearchWordContainer db={db} /> */}
                <WordListContainer db={db} />
            </div>
        )
    }
}

