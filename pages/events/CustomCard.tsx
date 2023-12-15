import React from 'react';
import styles from '@/styles/Customcard.module.css'; // Import the CSS module

const CustomCard = () => {
  return (

        <div className="container">
        <div className="row pt-5 m-auto">

        <div className="col-md-6 col-lg-4 pb-3">
        <div className={`card ${styles.card_custom}`}>
        <div
        className={`card-custom-img ${styles.card_custom_img}`}
        style={{
          backgroundImage:
            "url(http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg)",
        }}
        ></div>
        <div className={`card-custom-avatar ${styles.card_custom_avatar}`}>
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
        <a href="#" className="btn btn-primary">
          Option
        </a>
        <a href="#" className="btn btn-outline-primary">
          Other option
        </a>
        </div>
        </div>
        </div>

        <div className="col-md-6 col-lg-4 pb-3">
        <div className={`card ${styles.card_custom}`}>
        <div
        className={`card-custom-img ${styles.card_custom_img}`}
        style={{
          backgroundImage:
            "url(http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg)",
        }}
        ></div>
        <div className={`card-custom-avatar ${styles.card_custom_avatar}`}>
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
        <a href="#" className="btn btn-primary">
          Option
        </a>
        <a href="#" className="btn btn-outline-primary">
          Other option
        </a>
        </div>
        </div>
        </div>

        <div className="col-md-6 col-lg-4 pb-3">
        <div className={`card ${styles.card_custom}`}>
        <div
        className={`card-custom-img ${styles.card_custom_img}`}
        style={{
          backgroundImage:
            "url(http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg)",
        }}
      ></div>
      <div className={`card-custom-avatar ${styles.card_custom_avatar}`}>
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
        <a href="#" className="btn btn-primary">
          Option
        </a>
        <a href="#" className="btn btn-outline-primary">
          Other option
        </a>
      </div>
      </div>
      </div>

      </div>
      </div>
  );
};

export default CustomCard;
