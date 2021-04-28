import "./App.css";
import React, { Component } from "react";
import Dots from "./Components/Dots";
import TemplateLogo from "./Components/TemplatateLogo"

class App extends Component {
  constructor() {
    super()
    this.state = {
      id: 0,
      name: "Donkey Mo's",
      type: "Korean Fried Chicken",
      description: "Having worked at the finest restaurants in the country, YoungMin Noh is always seeking the perfect bite and the perfect meal.  A graduate of The Culinary Institute of America in New York, he worked in exclusive kitchens such as Veritas, Modern, and Hanjan.  He and his wife have settled in Austin, TX to pursue his dream of becoming a restaurateur, with an ultimate goal of opening a signature restaurant to help capture his vision with food.",
      review: "I cannot recommend this place enough. Even though the location at HMart in Cedar Park closed for reasons due to the relationship of DM owners and HMart, it is still worth taking the annoying trip inside of Lakeline mall to taste this amazing food. The Kimchi Fries are insanely good. They are topped with bacon, green onions, Sriracha mayo, and of course, kimchi. They pair well with the Soy garlic chicken tenders. My mouth is watering uncontrollably just writing this. 10 out of 10, you need this in you life like now. Right now. Go.",
      logo: "https://images.squarespace-cdn.com/content/v1/5c7c910901232c45a119f095/1551684561292-NMYCML8UZCAU77QPYIZS/ke17ZwdGBToddI8pDm48kAS-mQX5EkRHsd9_J4k9yNFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIQz9PgSrls-wdiiWtXoSpIubvOIR1xaLCyrVX6N6i3Oo/Screen+Shot+2019-03-03+at+11.10.42+PM.png",
      phone_number: "(512) 276-2438",
      address: "11200 Lakeline Mall Dr Ste VC8 - Lakeline Mall Food Court, Cedar Park, TX 78613",
      hours: {
        monday: {
          opens_at: "11 AM",
          closes_at: "7 PM"
        },
        tuesday: {
          opens_at: "11 AM",
          closes_at: "7 PM"
        },
        wednesday: {
          opens_at: "11 AM",
          closes_at: "7 PM"
        },
        thursday: {
          opens_at: "11 AM",
          closes_at: "7 PM"
        },
        friday: {
          opens_at: "11 AM",
          closes_at: "8 PM"
        },
        saturday: {
          opens_at: "11 AM",
          closes_at: "8 PM"
        },
        "sunday": {
          opens_at: "12 AM",
          closes_at: "6 PM"
        }
      }
    }
  }


  render() {
    return (
      <div className="App">
        <Dots />

        <h1 className="name">{/* The restaurant name goes here */}</h1>

        <TemplateLogo />

        <h2 className="type">The Best {/* The restaurant type goes here */}</h2>

        <div className="logo-container">

          <img className="logo" src={`${/* This is where the restaurant logo goes */null}?${/* This is where the restaurant id goes */null}`} alt="Restaurant Logo"></img> 

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

        <button className="get-restaurant-button" onClick={null}>Get Restaurant Info</button>

      </div>
    );
  }
}
export default App;
