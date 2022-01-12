import BingMapsReact from 'bingmaps-react';
import React, { useState } from 'react';

const displayStyle = {
  border: '1px solid grey',
  flexGrow: '4',
  height: 'auto',
};

const Everest = {
  center: {
    latitude: 27.98785,
    longitude: 86.925026,
  },
  options: {
    title: 'Mt. Everest',
  },
  infobox: {
    description: 'test',
  },
};
/* 
  Thoughts: 
    1. render places on the map
      a. Pass pushPins array down as a prop 
    2. Center the map on the location the user is viewing.
      a. find the users latitute and longitude
    3. Fix the .env file
      a. Currently we are hard coding a api key, which is a big no no!
*/
const MapSection = ({ PropertiesData }) => {
  const reformatData = (data) => {
    const reformatedData = [];
    for (let item in data) {
      let pushPin = {
        center: {
          latitude: data[item].location.latitude,
          longitude: data[item].location.longitude,
        },
        options: {
          title: data[item].property_type,
        },
        infobox: {
          title: data[item].property_type,
          description: data[item].address,
        },
      };
      reformatedData.push(pushPin);
    }
    return reformatedData;
  };
  return (
    <section style={displayStyle}>
      <BingMapsReact
        bingMapsKey={`${process.env.REACT_APP_BING_API_KEY}`}
        pushPinsWithInfoboxes={reformatData(PropertiesData)}
        viewOptions={{ center: { latitude: 27.98785, longitude: 86.925026 } }}
      />
    </section>
  );
};
export default MapSection;
