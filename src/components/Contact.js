import React from 'react';
import './Contact.css';

const online = false;
const name = "Katherine Lewis";
const avatar = "https://randomuser.me/api/portraits/women/95.jpg";


function Contact() {
  return (
    <figure className="Contact">
        <img className="avatar"
        src={avatar}
        alt={name}/>
        <div>
            <div className="name">
                {name}
            </div>
            <div className="status">
                <div className={online ? "status-online" : "status-offline"}>
                </div>
                <div className="status-text">
                    {online ? 'Online' : 'Offline'}
                </div>
            </div>
        </div>
            
    </figure>
  );
}

export default Contact;