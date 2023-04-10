import React, { useState } from 'react';

function Employee() {
    const [showCheckFields, setShowCheckFields] = useState(false);
    const [showReasonField, setShowReasonField] = useState(false);
    const [checkNumber, setCheckNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [reason, setReason] = useState('');
    const handleButtonClick = (buttonType) => {
        if (buttonType === 'Yes') {
            setShowCheckFields(true);
        } else if (buttonType === 'No') {
            setShowCheckFields(false);
        } else if (buttonType === 'Right') {
            setShowReasonField(true);
        }
    };
    const handleCheckNumberChange = (event) => {
        setCheckNumber(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleReasonChange = (event) => {
        setReason(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Check Number: ', checkNumber);
        console.log('Amount: ', amount);
        console.log('Reason: ', reason);
    };
    return (
        <div>
            <h1>Form with Buttons</h1>
            <button onClick={() => handleButtonClick('Yes')}>Yes</button>
            <button onClick={() => handleButtonClick('No')}>No</button>
            <button onClick={() => handleButtonClick('Right')}>Right</button>
            {showCheckFields && (
                <div>
                    <label htmlFor="check-number">Check Number: </label>
                    <input
                        type="text"
                        id="check-number"
                        value={checkNumber}
                        onChange={handleCheckNumberChange}
                    />

                    <label htmlFor="amount">Amount: </label>
                    <input
                        type="text"
                        id="amount"
                        value={amount}
                        onChange={handleAmountChange}
                    />
                    <br />
                </div>
            )}
            {showReasonField && (
                <div>
                    <label htmlFor="reason">Reason: </label>
                    <textarea
                        id="reason"
                        value={reason}
                        onChange={handleReasonChange}
                    ></textarea>
                    <br />
                </div>
            )}
            <button type="submit" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
}

export default Employee;