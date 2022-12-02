import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

export default function Input() {
  // use state that store a string of addresses
  const [address, setAddress] = useState('');
  // use state to store a list of pair of coordinates
  const [coordinates, setCoordinates] = useState([[]]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCoordinates([[]]);

    // parse through the address string and return an list of address number and street name new line
    const parseAddress = (address) => {
      const addressList = address.split('\n');
      const parse = addressList.map((address) => {
        const addressArray = address.split(',');
        const addressNumAndStreetNum = addressArray[0].split(' ');
        const addressNum = addressNumAndStreetNum[0];
        const streetName = addressNumAndStreetNum.slice(1).join(' ');
        const boroughNum = parseBorough(addressArray[1]);
        return [addressNum, streetName, boroughNum];
      });
      return parse;
    };

    if (address) {
      // parse the address
      const currentAddressArray = parseAddress(address);
      // loop through addressNumAndStreetName and make fetch request to each address
      currentAddressArray.forEach((address) => {
        const [addressNum, streetName, boroughNum] = address;
        const getData = setTimeout(() => {
          fetch(
            `/geoservice/geoservice.svc/Function_1A?Borough=${boroughNum}&AddressNo=${addressNum}&StreetName=${streetName}&Key=${process.env.REACT_APP_API_KEY}`
          )
            .then((resp) => {
              return resp.json();
            })
            .then((data) => {
              // set the coordinates state to the coordinates of the address
              const lat = data.display.out_lat_property;
              const lon = data.display.out_lon_property;
              setCoordinates((coordinates) => [...coordinates, [lat, lon]]);
            })
            .catch((err) => {
              console.log(err);
            });
        }, 1000); // wait 1 second before making the request
        return () => clearTimeout(getData);
      });
    }
  };

  const changeHandler = debounce((e) => {
    setAddress(e.target.value);
  }, 1000);

  // parse the borough, if borough is manhattan return "1", if borough is bronx return "2". etc
  const parseBorough = (borough) => {
    // trim the string and make it all lowercase
    const boroughTrimmed = borough.trim().toLowerCase();
    return boroughTrimmed === 'new york'
      ? '1'
      : boroughTrimmed === 'bronx'
      ? '2'
      : boroughTrimmed === 'brooklyn'
      ? '3'
      : boroughTrimmed === 'queens'
      ? '4'
      : boroughTrimmed === 'staten island'
      ? '5'
      : '';
  };

  // use effect that runs when the address state changes
  useEffect(() => {
    console.log(coordinates);
  }, [coordinates]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 offset-md-0'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <h5>Copy and paste a list of locations, or upload a csv.</h5>
              <p>
                <small>
                  When pasting or uploading files, your first column should be
                  the headers. Columns should be separated by tabs or commas.
                </small>
              </p>
              <div className='form-floating'>
                <textarea
                  className='form-control'
                  placeholder='Address'
                  id='floatingTextarea'
                  style={{ height: '200px' }}
                  onChange={changeHandler}
                ></textarea>
                <label htmlFor='floatingTextarea'>
                  Address Number Street Name, City, State, Zip Code (one per
                  line)
                </label>
              </div>
              <div className='form-group'>
                <label htmlFor='file'>File</label>
                <input
                  type='file'
                  className='form-control'
                  id='file'
                  placeholder='Enter file'
                />
                <button type='submit' className='btn btn-primary mt-3'>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
