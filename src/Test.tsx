/* tslint:disable */

import React from 'react';

interface HelloProps {
    hello: string;
}

const Test = ({hello}: HelloProps) => {
    return <div>{hello}</div>
}

export default Test;