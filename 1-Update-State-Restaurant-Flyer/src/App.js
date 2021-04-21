import './App.css';
import React, { Component } from 'react';
import Dots from "./Components/Dots";
import TemplateLogo from "./Components/TemplatateLogo"

const RestaurantURL = "https://random-data-api.com/api/restaurant/random_restaurant"

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  handleGetRestaurantInfoClick = () => {
    // We will need to do something here to get new restaurant data. Note the kind of function we are using here for handling an event.
  }

  render() {
    return (
      <div className="App">
        <Dots />

        <h1 className="name">{/* The restaurant name goes here */}</h1>

        <TemplateLogo />

        <h2 className="type">The Best {/* The restaurant type goes here */}</h2>

        <div className="logo-container">

          <img className="logo" src={this.state.logo ? `${null /* This is where the restaurant logo goes */}?${null /* This is where the restaurant id goes */}` : "https://i.pinimg.com/originals/26/0f/97/260f975bede7d62c1422bb9067be0405.jpg"} alt="Restaurant Logo"></img> 

          <hr />
          <div className="description">

            <p>{/* The restaurant description goes here */}</p>

          </div>
        </div>
        <div className="review-hour-wrapper">
          <div className="info-container">
            <h2>Review</h2>
            <div className="section">

              <p>"{/* The restaurant review goes here */}"</p>

            </div>
          </div>
          <div className="info-container">
            <h2>Hours</h2>
            <div className="section">
              <p>Monday</p>

              <p className="open-close">{/* Restaurant hours */} - {/* Restaurant hours */}</p>

              <p>Tuesday</p>

              <p className="open-close">{/* Restaurant hours */} - {/* Restaurant hours */}</p>

              <p>Wednesday</p>

              <p className="open-close">{/* Restaurant hours */} - {/* Restaurant hours */}</p>

              <p>Thursday</p>

              <p className="open-close">{/* Restaurant hours */} - {/* Restaurant hours */}</p>

              <p>Friday</p>

              <p className="open-close">{/* Restaurant hours */} - {/* Restaurant hours */}</p>

              <p>Saturday</p>

              <p className="open-close">{/* Restaurant hours */} - {/* Restaurant hours */}</p>

              <p>Sunday</p>

              <p className="open-close">{/* Restaurant hours */} - {/* Restaurant hours */}</p>

            </div>
          </div>
        </div>
        <div className="contact-info-wrapper">
          <div className="info-wrapper">
            <img src="https://www.iconsdb.com/icons/preview/gray/phone-68-xxl.png" className="icon" alt="Phone Icon"></img>

            <p>{/* This is where the restaurant phone number goes */}</p>

          </div>
          <div className="info-wrapper">
            <img src="https://www.iconsdb.com/icons/preview/gray/pin-5-xxl.png" className="icon" alt="Pin Icon"></img>

            <p>{/* This is where the restaurant address goes */}</p>

          </div>
        </div>
        <Dots />

        <button className="get-restaurant-button" onClick={this.handleGetRestaurantInfoClick}>Get Restaurant Info</button>

      </div>
    )
  }
}
export default App;