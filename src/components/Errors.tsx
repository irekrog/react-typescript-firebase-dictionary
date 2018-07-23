import React from 'react';
import { Error } from '../errors/Error';

interface PropsComponent {
    error: string;
}

const Errors = ({error}: PropsComponent) => {
    switch(error) {
        case Error.Validate: return <Validate />; break;
        case Error.Limit: return <Limit />; break;
        case Error.Exist: return <Exist />; break;
        default: return null;
    }
}

const Validate = () => (
    <div className="info -error">Error. Try again later.
    </div>
)

const Limit = () => (
    <div className="info -error">Limit</div>
)

const Exist = () => (
    <div className="info -warning">This word exist in the dictionary or is still in verification
    </div>
)

export default Errors;