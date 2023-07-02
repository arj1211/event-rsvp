import React, { useRef } from 'react';
import largeImage from '../assets/large-image.jpg';

const EventDetails = ({ scrollToTarget }) => {
  // Dummy event information
  const event = {
    title: 'Awesome Event',
    date: 'June 30, 2023',
    location: '123 Main St, City, Country',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.184054837547!2d-80.52823152421387!3d43.47762917111092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf3f449b66693%3A0x2004ba3a476a3dcb!2sLazeez%20Shawarma!5e0!3m2!1sen!2sca!4v1687759405281!5m2!1sen!2sca',
  };

  return (
    <section className='section'>
      <div className='container'>
        <div className='columns is-flex-direction-row-reverse'>
          <div className='column is-half'>
            <section className="section mb-4" style={{ position: 'relative', top: '10%' }}>
              <h2 className="title mb-4">{event.title}</h2>
              <p className='mb-4'>Date: {event.date}</p>
              <p className='mb-4'>Location: {event.location}</p>
              <div className='mb-4'>
                <iframe
                  title="Event Location"
                  src={event.mapUrl}
                  width="100%"
                  height="20%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
              <div className='container'>
                <div>
                  <button className='button is-primary is-large is-fullwidth is-outlined' onClick={scrollToTarget}>RSVP</button>
                </div>
              </div>
            </section>
          </div>
          <div className='column is-half'>
            <section className="section">
              <img src={largeImage} alt="Large Image" />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
