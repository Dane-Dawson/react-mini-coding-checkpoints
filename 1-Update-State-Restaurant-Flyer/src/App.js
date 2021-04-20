import './App.css';
import React, { Component } from 'react';
import Dots from "./Components/Dots";
import TemplateLogo from "./Components/TemplatateLogo"

const RestaurantURL = "https://random-data-api.com/api/restaurant/random_restaurant"

class App extends Component {
  constructor() {
    super()
    this.state = {
      restaurantId: "",
      name: "-Restaurant Name-",
      type: "-Restaurant type-",
      description: "This is where the restaurant description goes",
      review: "This is where the restaurant review goes",
      logo: "https://dummyimage.com/500x500/c4c4c4/000000.png&text=This+is+where+the+logo+goes.",
      phoneNumber: "(999) 867-5309 x999",
      address: "1400 Lavaca St 7th Floor, Austin, TX 78701",
      hours: {
        monday: {
          opens_at: "Opens @",
          closes_at: "Closes @"
        },
        tuesday: {
          opens_at: "Opens @",
          closes_at: "Closes @"
        },
        wednesday: {
          opens_at: "Opens @",
          closes_at: "Closes @"
        },
        thursday: {
          opens_at: "Opens @",
          closes_at: "Closes @"
        },
        friday: {
          opens_at: "Opens @",
          closes_at: "Closes @"
        },
        saturday: {
          opens_at: "Opens @",
          closes_at: "Closes @"
        },
        sunday: {
          opens_at: "Opens @",
          closes_at: "Closes @"
        },
      }
    }
  }


  handleGetRestaurantInfoClick = () => {
    fetch(RestaurantURL)
    .then(resp => resp.json())
    .then(data => this.handleUpdateState(data))
  }

  handleUpdateState(data){
    this.setState({
      restaurantId: data.id,
      name: data.name,
      type: data.type,
      description: data.description,
      review: data.review,
      logo: data.logo,
      phoneNumber: data.phone_number,
      address: data.address,
      hours: {...data.hours}
    })
  }

  render() {
    return (
      <div className="App">
        <Dots />
        <h1 className="name">{this.state.name}</h1>
        <TemplateLogo />
        <h2 className="type">The Best {this.state.type}</h2>
        <div className="logo-container">
          <img className="logo" src={`${this.state.logo}?${this.state.restaurantId}`} alt="Restaurant"></img> {/* By loading the src using a query string, we force a re-render of the image. If not, the image would stay the same due to it being cached. */}
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
              <p>Monday</p>
              <p className="open-close">{this.state.hours.monday.opens_at} - {this.state.hours.monday.closes_at}</p>
              <p>Tuesday</p>
              <p className="open-close">{this.state.hours.monday.opens_at} - {this.state.hours.monday.closes_at}</p>
              <p>Wednesday</p>
              <p className="open-close">{this.state.hours.monday.opens_at} - {this.state.hours.monday.closes_at}</p>
              <p>Thursday</p>
              <p className="open-close">{this.state.hours.monday.opens_at} - {this.state.hours.monday.closes_at}</p>
              <p>Friday</p>
              <p className="open-close">{this.state.hours.monday.opens_at} - {this.state.hours.monday.closes_at}</p>
              <p>Saturday</p>
              <p className="open-close">{this.state.hours.saturday.opens_at} - {this.state.hours.saturday.closes_at}</p>
              <p>Sunday</p>
              <p className="open-close">{this.state.hours.sunday.opens_at} - {this.state.hours.sunday.closes_at}</p>
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
        <button className="get-restaurant-button" onClick={this.handleGetRestaurantInfoClick}>Get Restaurant Info</button>
      </div>
    )
  }
}
export default App;