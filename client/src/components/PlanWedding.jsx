import React, { useState } from 'react';
import './PlanWedding.css';
import { Input } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import ReactSelect from 'react-select';
import { Button } from '@chakra-ui/react';

const PlanWedding = () => {

  const [planWeddingData , setplanWeddingData] = useState({
    weddingDate:"",
    celebrationDays:"",
    location:"",
    noOfGuests:"",
    budget:"",
    entertainmentChoices:[],
    ceremonyType:"",
    weddingTheme:"",
    cateringType:"",
    accommodationNeeded :"",
    transportationForGuests  :""
  })

  const handleChange = (e)=>{
    setplanWeddingData({...planWeddingData,[e.target.id]: e.target.value });
  }
  const handleSelectChange = (e) => {
    const selectedValues = e.map(option => option.value); // Extract values from selected options
    setplanWeddingData({ ...planWeddingData, entertainmentChoices: selectedValues });
  };
  
  const handleSubmit = (e) =>{
console.log(planWeddingData);
  }

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
              id="weddingDate"
              className="input"
              placeholder="Select Date and Time"
              size="md"
              type="date"
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="celebration-days">No of Celebration Days : </label>
            <Input
              id="celebrationDays"
              className="input"
              placeholder="Enter No of Days"
              size="md"
              type="number"
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="guest-count">No of Guests : </label>
            <Input
              id="guestCount"
              className="input"
              placeholder="Enter No of Guests"
              size="md"
              type="number"
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="entertainment-preferences">
              Entertainment Preferences :{' '}
            </label>
            <ReactSelect
              id="entertainmentChoices"
              className="input"
              isMulti
              options={entertainmentOptions}
              theme={darkTheme}
              onChange={handleSelectChange}
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
            <Select
              id="ceremonyType"
              placeholder="Please Select"
              className="input"
              onChange={handleChange}
            >
              <option value="outdoor">Outdoor</option>
              <option value="indoor">Indoor</option>
            </Select>
          </div>
          <div className="input-field">
            <label htmlFor="wedding-theme">Wedding Theme : </label>
            <Select
              id="weddingTheme"
              placeholder="Please Select"
              className="input"
              onChange={handleChange}
            >
              <option value="classic">Classic</option>
              <option value="modern">Modern</option>
              <option value="traditional">Traditional</option>
            </Select>
          </div>
          <div className="input-field">
            <label htmlFor="catering-type">Catering Type : </label>
            <Select
              id="cateringType"
              placeholder="Please Select"
              className="input"
              onChange={handleChange}
            >
              <option value="buffet">Buffet</option>
              <option value="plate-system">Plate System</option>
            </Select>
          </div>
          <div className="input-field">
            <label htmlFor="accommodation-needed">Accomodation Needed : </label>
            <RadioGroup id="accommodationNeeded">
              <Stack
                direction="row"
                className="accomodation-needed-stack input"
                onChange={handleChange}
              >
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Stack>
            </RadioGroup>
          </div>
          <div className="input-field">
            <label htmlFor="transportation-for-guests">
              Transportation For Guests :{' '}
            </label>
            <RadioGroup id="transportationForGuests">
              <Stack
                direction="row"
                className="accomodation-needed-stack input"
                onChange={handleChange}
              >
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Stack>
            </RadioGroup>
          </div>
        </form>
        <Button mt={10} mb={10} colorScheme="orange" onClick={handleSubmit}>
          Generate Plan
        </Button>
      </div>
    </div>
  );
};

export default PlanWedding;
