import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    }
  }
  render() {
    return (
    <figure className="Contact">
        <img className="avatar"
        src={this.props.avatar}
        alt={this.props.name}/>
        <div>
            <div className="name">
                {this.props.name}
            </div>
            <div className="status">
                <div className={this.state.online ? "status-online" : "status-offline"}
              onClick={event => {
                const newOnline = !this.state.online;
                this.setState({ online: newOnline });
              }}>
                </div>
                <div className="status-text">
                {this.state.online ? "Online" : "Offline"}
                </div>
            </div>
        </div>
            
    </figure>
  );
  }
}
  

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online : PropTypes.bool.isRequired
  };

export default Contact;