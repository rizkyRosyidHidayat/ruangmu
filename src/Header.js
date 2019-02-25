import React, { Component } from 'react';
import { Input, Avatar, Icon, Badge, Popover, List } from 'antd';
import FormLogin from './FormLogin.js';
import FormSignup from './FormSignup.js';
import MenuBooking from './MenuBooking.js';
import Notif from './Notif.js';

// const content = (
//   // <React.Fragment>
// )

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          showLogin: false,
          showSignup: false,
          showBooking: false
        };
    }

    render() {
        let ModalClose = () => this.setState({ 
          showLogin: false, 
          showSignup: false,
          showBooking: false 
        });
        return (
            <div id="top" className="navbar navbar-expand-lg bg-white navbar-light mt-5">
              <div className="container">
                <a href="/" className="navbar-brand">
                  
                </a>
                  <Input.Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                    size="large"
                  />
                  <div className="navbar-nav ml-auto">
                  {
                    // <a className="nav-item nav-link" onClick={() => this.setState({ showSignup: true })}>Signup</a>
                    // <FormSignup
                    // visible={this.state.showSignup}
                    // onOk={ModalClose}
                    // onCancel={ModalClose} />
                    // <a className="nav-item nav-link" onClick={() => this.setState({ showLogin: true })}>Login</a>
                    // <FormLogin
                    // visible={this.state.showLogin}
                    // onOk={ModalClose}
                    // onCancel={ModalClose} />
                  }
                  
                  <a className="nav-item nav-link h5" href="/Akun/Booking">
                    <Badge dot count={1}>
                      Booking
                    </Badge>
                  </a>
                  <MenuBooking
                  visible={this.state.showBooking}
                  onClose={ModalClose} />
                  <a className="nav-item nav-link h5">
                    <Popover
                    placement="bottomRight"
                    title={false}
                    content={<Notif />}
                    trigger="click" >
                      <Badge dot count={1}>
                        Notification
                      </Badge>
                    </Popover>
                  </a>
                  </div>

                  <div className="navbar-nav">
                    <a className="nav-item nav-link">
                      <Popover
                      placement="bottomRight"
                      title={<a href="/Akun/Data">Rizky Rosyid Hidayat</a>}
                      content={<a>Log out</a>}
                      trigger="click" >
                        <Avatar src={require('./img/nyaman.jpg')} size="large" />
                      </Popover>
                    </a>
                  </div>
              </div>
            </div>
        );
    }
}

export default Navbar;
