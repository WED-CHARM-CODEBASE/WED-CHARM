import React from "react";
import "./PlanWedding.css";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";

const PlanWedding = () => {
  return (
    <div>
      <div className="wrapper"></div>
      <div className="plan-wedding">
        <div className="heading">
          <h1>Plan Your Wedding</h1>
          <p>
            Provide us with some details to generate the wedding plan according
            to your preferences.
          </p>
        </div>
        <form className="plan-wedding-form">
          <div className="input-field">
            <label htmlFor="wedding-date">Wedding Date : </label>
            <Input
              id="wedding-date"
              className="input"
              placeholder="Select Date and Time"
              size="md"
              type="date"
            />
          </div>
          <div className="input-field">
            <label htmlFor="celebration-days">No of Celebration Days : </label>
            <Input
              id="celebration-days"
              className="input"
              placeholder="Enter No of Days"
              size="md"
              type="number"
            />
          </div>
          <div className="input-field">
            <label htmlFor="location">Location : </label>
            <Input
              id="location"
              className="input"
              placeholder="Enter Location"
              size="md"
              type="text"
            />
          </div>
          <div className="input-field">
            <label htmlFor="guest-count">No of Guests : </label>
            <Input
              id="guest-count"
              className="input"
              placeholder="Enter No of Guests"
              size="md"
              type="number"
            />
          </div>
          <div className="input-field">
            <label htmlFor="budget">Budget : </label>
            <Input
              id="budget"
              className="input"
              placeholder="Enter Budget in Rs."
              size="md"
              type="number"
            />
          </div>
          <div className="input-field">
            <label htmlFor="ceremony-type">Ceremony Type : </label>
            <Select>
              <option selected value="option1">Outdoor</option>
              <option value="option2">Indoor</option>
            </Select>
          </div>
          <div className="input-field">
            <label htmlFor="wedding-theme">Wedding Theme : </label>
            <Select>
              <option selected value="option1">Classic</option>
              <option value="option2">Modern</option>
              <option value="option3">Traditional</option>
            </Select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanWedding;

// needed fields
// weddingDate,
// No of Celebration days
// location,
// numberOfGuests,
// budget,
// ceremonyPreference,
// weddingTheme,
// events,
// accommodationsNeeded,
// cateringType,
// entertainmentPreferences,
// transportationForGuests,
// specialNeedsForGuests,
