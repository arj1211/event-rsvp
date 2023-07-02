import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import GuestCard from './GuestCard';

const RsvpForm = ({ scrollRef }) => {
  const [name, setName] = useState('');
  const [rsvpStatus, setRsvpStatus] = useState(false);
  const [guestList, setGuestList] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [notOnGuestlist, setNotOnGuestlist] = useState(false);

  useEffect(() => {
    setGuestList([]);
    setNotOnGuestlist(false);
  }, [name]);

  const handleLookup = async (e) => {
    e.preventDefault();
    try {
      const rsvpsRef = firebase.firestore().collection('rsvps');
      const querySnapshot = await rsvpsRef.where('name', '==', name).get();
      // console.log('querySnapshot',querySnapshot)
      if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data();
        const guestsData = docData.guests || [];
        setGuestList([{ name: docData.name, rsvped: docData.rsvped }, ...guestsData]);
        setRsvpStatus(docData.rsvped);
      } else {
        setGuestList([]);
        setNotOnGuestlist(true);
      }
      // console.log('setGuestList',setGuestList)
    } catch (error) {
      console.error('Lookup error:', error);
    }
  };

  const handleCheckboxChange = (index, checked) => {
    if (index === 0) {
      setRsvpStatus(checked);
    } else {
      const updatedGuestList = [...guestList];
      updatedGuestList[index].rsvped = checked;
      setGuestList(updatedGuestList);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const rsvpsRef = firebase.firestore().collection('rsvps');
      const querySnapshot = await rsvpsRef.where('name', '==', name).get();

      if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0].ref;
        await docRef.update({
          rsvped: rsvpStatus,
          guests: guestList.slice(1), // Exclude the person (first entry) from the guests array
        });
        setShowPopup(true);
        setName(''); // Reset the name input field
      }
    } catch (error) {
      console.error('RSVP update error:', error);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <section ref={scrollRef} className="section">
      <div className="container box">
        {showPopup ? (
          <div className="popup">
            <div className="popup-content">
              <h2 className="popup-title title">Thank you for RSVPing!</h2>
              <p className="popup-message subtitle">We look forward to seeing you at the event.</p>
              <button className="button is-primary" onClick={handlePopupClose}>
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="title">RSVP Form</h2>
            <form onSubmit={handleLookup}>
              <div className="field">
                <label className="label">Name:</label>
                <div className="control">
                  <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button is-primary">Check Guestlist</button>
                </div>
              </div>
            </form>
            {notOnGuestlist ? (
              <p>You are not on the guestlist. Please contact the event organizer for assistance.</p>
            ) : (
              guestList.length > 0 && (
                <div>
                  <div className='tile is-ancestor is-vertical'>
                    {guestList.map((guest, index) => (
                      <div className='tile is-parent'>
                        <article className="tile is-child">
                          <div className="guest" key={index}>
                            <GuestCard index={index} rsvpStatus={rsvpStatus} guest={guest} handleCheckboxChange={(e) => handleCheckboxChange(index, e.target.checked)} />
                          </div>
                        </article>
                      </div>
                    ))}
                  </div>
                  <div className="field">
                    <div className="control">
                      <button className="button is-primary" onClick={handleSubmit}>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default RsvpForm;
