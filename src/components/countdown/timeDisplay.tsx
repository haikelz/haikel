import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }: { value: any, type: any, isDanger: any }) => {
    return (
        <div className={isDanger ? 'countdown danger' : 'countdown'}>
            <p>{value}</p>
            <span>{type}</span>
        </div>
    );
};

export default DateTimeDisplay;