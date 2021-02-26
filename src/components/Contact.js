import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


function Contact(props) {
  return (
    <figure className="Contact">
        <img className="avatar"
        src={props.avatar}
        alt={props.name}/>
        <div>
            <div className="name">
                {props.name}
            </div>
            <div className="status">
                <div className={props.online ? "status-online" : "status-offline"}>
                </div>
                <div className="status-text">
                    {props.online ? 'Online' : 'Offline'}
                </div>
            </div>
        </div>
            
    </figure>
  );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online : PropTypes.bool.isRequired
  };

export default Contact;