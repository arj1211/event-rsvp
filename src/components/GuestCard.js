import React from 'react';
import CustomCheckbox from './CustomCheckbox';

const GuestCard = ({ index, rsvpStatus, guest, handleCheckboxChange }) => {

    // const { guestName, guestRSVP } = guest;
    const guestName = guest.name;
    const guestRSVP = guest.rsvped;

    const checkStatus = index === 0 ? rsvpStatus : guestRSVP;
    // const checkStatus = guestRSVP;

    return (
        <div className="box">
            <div className='container'>
                <div className='columns is-multiline'>
                    <div className='column'>
                        <h2 className="title">Guest</h2>
                        <h4 className='subtitle'>{guestName}</h4>
                    </div>
                    <div className='column'>
                        <h3 className='subtitle'>{checkStatus ? 'RSVPed' : 'Not RSVPed'}</h3>
                        <div>
                            <CustomCheckbox
                                checked={checkStatus}
                                onChange={handleCheckboxChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuestCard;