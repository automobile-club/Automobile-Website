import React from 'react';
import styles from '@/styles/Eventcard.module.css'; // Import the CSS module

const EventCard = () => {
  return (

        <div className="container">
        <div className="row pb-5 m-auto">
        <div className="col-lg-4 d-lg-block d-md-none p-4">
        <div className={`card ${styles.card_event}`}>
        <div
        className={`card-event-img ${styles.card_event_img}`}
        style={{
          backgroundImage:
            "url(http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg)",
        }}
        ></div>
        <div className={`card-event-avatar ${styles.card_event_avatar}`}>
        <img
          className="img-fluid"
          src="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg"
          alt="Avatar"
        />
        </div>
        <div className="card-body" style={{ overflowY: "auto" }}>
        <h4 className="card-title">Card title</h4>
        <p className="card-text">
          Card has a minimum height set but will expand if more space is needed for card body content.
          You can use Bootstrap <a href="https://getbootstrap.com/docs/4.0/components/card/#card-decks" target="_blank">card-decks</a> to align multiple cards nicely in a row.
        </p>
        </div>
        <div className="card-footer" style={{ background: "inherit", borderColor: "inherit" }}>
        <p className={` ${styles.duration}`} > By Host on  09/11/2001</p> 
       
        </div>
        </div>
        </div>

        <div className="col-lg-4 d-lg-block d-md-none p-4">
        <div className={`card ${styles.card_event}`}>
        <div
        className={`card-event-img ${styles.card_event_img}`}
        style={{
          backgroundImage:
            "url(http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg)",
        }}
        ></div>
        <div className={`card-event-avatar ${styles.card_event_avatar}`}>
        <img
          className="img-fluid"
          src="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg"
          alt="Avatar"
        />
        </div>
        <div className="card-body" style={{ overflowY: "auto" }}>
        <h4 className="card-title">Card title</h4>
        <p className="card-text">
          Card has a minimum height set but will expand if more space is needed for card body content.
          You can use Bootstrap <a href="https://getbootstrap.com/docs/4.0/components/card/#card-decks" target="_blank">card-decks</a> to align multiple cards nicely in a row.
        </p>
        </div>
        <div className="card-footer" style={{ background: "inherit", borderColor: "inherit" }}>
        <p className={` ${styles.duration}`} > By Host on  09/11/2001</p> 
        </div>
        </div>
        </div>

        <div className="col-lg-4 d-lg-block d-md-none p-4">
        <div className={`card ${styles.card_event}`}>
        <div
        className={`card-event-img ${styles.card_event_img}`}
        style={{
          backgroundImage:
            "url(http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg)",
        }}
      ></div>
      <div className={`card-event-avatar ${styles.card_event_avatar}`}>
        <img
          className="img-fluid"
          src="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg"
          alt="Avatar"
        />
      </div>
      <div className="card-body" style={{ overflowY: "auto" }}>
        <h4 className="card-title">Card title</h4>
        <p className="card-text">
          Card has a minimum height set but will expand if more space is needed for card body content.
          You can use Bootstrap <a href="https://getbootstrap.com/docs/4.0/components/card/#card-decks" target="_blank">card-decks</a> to align multiple cards nicely in a row.
        </p>
      </div>
      <div className="card-footer" style={{ background: "inherit", borderColor: "inherit" }}>
      <p className={` ${styles.duration}`} > By Host on  09/11/2001</p>   
      </div>
      </div>
      </div>


<div className="col-md-6 d-lg-none p-4">
<div className={`card ${styles.card_event}`}>
<div
        className={`card-event-img ${styles.card_event_img}`}
        style={{
          backgroundImage:
            "url(http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg)",
        }}
      ></div>
      <div className={`card-event-avatar ${styles.card_event_avatar}`}>
        <img
          className="img-fluid"
          src="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg"
          alt="Avatar"
        />
      </div>
      <div className="card-body" style={{ overflowY: "auto" }}>
        <h4 className="card-title">Card title</h4>
        <p className="card-text">
          Card has a minimum height set but will expand if more space is needed for card body content.
          You can use Bootstrap <a href="https://getbootstrap.com/docs/4.0/components/card/#card-decks" target="_blank">card-decks</a> to align multiple cards nicely in a row.
        </p>
      </div>
      <div className="card-footer" style={{ background: "inherit", borderColor: "inherit" }}>
      <p className={` ${styles.duration}`} > By Host on  09/11/2001</p>   
      </div>
      </div>
      </div> 

<div className="col-md-6 d-lg-none p-4">
<div className={`card ${styles.card_event}`}>
<div
        className={`card-event-img ${styles.card_event_img}`}
        style={{
          backgroundImage:
            "url(http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg)",
        }}
      ></div>
      <div className={`card-event-avatar ${styles.card_event_avatar}`}>
        <img
          className="img-fluid"
          src="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg"
          alt="Avatar"
        />
      </div>
      <div className="card-body" style={{ overflowY: "auto" }}>
        <h4 className="card-title">Card title</h4>
        <p className="card-text">
          Card has a minimum height set but will expand if more space is needed for card body content.
          You can use Bootstrap <a href="https://getbootstrap.com/docs/4.0/components/card/#card-decks" target="_blank">card-decks</a> to align multiple cards nicely in a row.
        </p>
      </div>
      <div className="card-footer" style={{ background: "inherit", borderColor: "inherit" }}>
      <p className={` ${styles.duration}`} > By Host on  09/11/2001</p>   
      </div>
      </div>
      </div> 


      </div>
      </div>

  );
};

export default EventCard;
