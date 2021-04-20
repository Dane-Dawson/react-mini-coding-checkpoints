import './App.css';
import React, { Component } from 'react';
import Dots from "./Components/Dots";
import TemplateLogo from "./Components/TemplatateLogo"

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "-Restaurant Name-",
      type: "-Restaurant type-",
      description: "This is where the restaurant description goes",
      review: "This is where the restaurant review goes",
      logo: "https://dummyimage.com/500x500/c4c4c4/000000.png&text=This+is+where+the+logo+goes.",
      phoneNumber: "(999) 867-5309 x999",
      address: "1400 Lavaca St 7th Floor, Austin, TX 78701",
      hours: {
        monday: {
          opensAt: "7:44 AM",
          closesAT: "11:52 PM",
          isClosed: false
        },
        tuesday: {
          opensAt: "7:44 AM",
          closesAT: "11:52 PM",
          isClosed: false
        },
        wednesday: {
          opensAt: "7:44 AM",
          closesAT: "11:52 PM",
          isClosed: false
        },
        thursday: {
          opensAt: "7:44 AM",
          closesAT: "11:52 PM",
          isClosed: false
        },
        friday: {
          opensAt: "7:44 AM",
          closesAT: "11:52 PM",
          isClosed: false
        },
        saturday: {
          opensAt: "",
          closesAT: "",
          isClosed: true
        },
        sunday: {
          opensAt: "",
          closesAT: "",
          isClosed: true
        },
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Dots />
        <h1 className="name">{this.state.name}</h1>
        <TemplateLogo />
        <h2 className="type">The Best {this.state.type}</h2>
        <div className="logo-container">
          <img className="logo" src={this.state.logo} alt="Restaurant"></img>
          <hr />
          <div className="description">
            <p>{this.state.description}</p>
          </div>
        </div>
        <div className="review-hour-wrapper">
          <div className="info-container">
            <h2>Review</h2>
            <div className="section">
              <p>"{this.state.review}"</p>
            </div>
          </div>
          <div className="info-container">
            <h2>Hours</h2>
            <div className="section">
              <p>Render restaurant hours here</p>
            </div>
          </div>
        </div>
        <div className="contact-info-wrapper">
          <div className="info-wrapper">
            <img src="https://www.iconsdb.com/icons/preview/gray/phone-68-xxl.png" className="icon" alt="Phone Icon"></img>
            <p>{this.state.phoneNumber}</p>
          </div>
          <div className="info-wrapper">
            <img src="https://www.iconsdb.com/icons/preview/gray/pin-5-xxl.png" className="icon" alt="Pin Icon"></img>
            <p>{this.state.address}</p>
          </div>
        </div>
        <Dots />
        <button className="get-restaurant-button">Get Restaurant Info</button>
      </div>
    )
  }
}
export default App;