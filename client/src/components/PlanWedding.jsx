import React from 'react';
import './PlanWedding.css';
import { Input } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import ReactSelect from 'react-select';

const PlanWedding = () => {
  const entertainmentOptions = [
    { value: 'DJ', label: 'DJ' },
    { value: 'Live Band', label: 'Live Band' },
    { value: 'Dancer', label: 'Dancer' },
    { value: 'Stand Up Comedy', label: 'Stand Up Comedy' },
  ];

  const darkTheme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: '#3E2723', // Option hover background color
      primary: '#000', // Selected option color (highlighted)
      neutral0: '#3E2723', // Dropdown background color
      neutral80: '#000', // Control text color
      neutral20: '#000', // Control border color
    },
  });
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
            <label htmlFor="entertainment-preferences">
              Entertainment Preferences :{' '}
            </label>
            <ReactSelect
              id="entertainment-preferences"
              isMulti
              options={entertainmentOptions}
              theme={darkTheme}
              styles={{
                control: (provided) => ({
                  ...provided,
                  backgroundColor: '#3E2723', // Control (input field) background color
                  borderColor: '#000', // Control border color
                }),
                menu: (provided) => ({
                  ...provided,
                  backgroundColor: '#3E2723', // Dropdown menu background color
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isFocused ? '#000' : '#2c3e50', // Hover and default background
                  color: '#ffffff', // Option text color
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: '#000', // Selected value text color
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: '#fff', // Placeholder text color
                }),
              }}
            />
          </div>
          <div className="input-field">
            <label htmlFor="ceremony-type">Ceremony Type : </label>
            <Select id="ceremony-type" placeholder="Please Select">
              <option value="outdoor">Outdoor</option>
              <option value="indoor">Indoor</option>
            </Select>
          </div>
          <div className="input-field">
            <label htmlFor="wedding-theme">Wedding Theme : </label>
            <Select id="wedding-theme" placeholder="Please Select">
              <option value="classic">Classic</option>
              <option value="modern">Modern</option>
              <option value="traditional">Traditional</option>
            </Select>
          </div>
          <div className="input-field">
            <label htmlFor="catering-type">Catering Type : </label>
            <Select id="catering-type" placeholder="Please Select">
              <option value="buffet">Buffet</option>
              <option value="plate-system">Plate System</option>
            </Select>
          </div>
          <div className="input-field">
            <label htmlFor="accommodation-needed">Accomodation Needed : </label>
            <RadioGroup id="accommodation-needed">
              <Stack direction="row" className="accomodation-needed-stack">
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Stack>
            </RadioGroup>
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
// accommodationsNeeded,
// cateringType,
// entertainmentPreferences,
// transportationForGuests,
// specialNeedsForGuests,
