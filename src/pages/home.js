import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

export default function Home() {
  // use state that store a string of addresses
  const [address, setAddress] = useState('');
  const [borough, setBorough] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const changeHandler = debounce((e) => {
    setAddress(e.target.value);
  }, 1000);

  // parse the borough, if borough is manhattan return "1", if borough is bronx return "2". etc
  const parseBorough = (borough) => {
    // trim the string and make it all lowercase
    const boroughTrimmed = borough.trim().toLowerCase();
    console.log(boroughTrimmed);
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

  // parse through the address string and return an list of address number and street name new line
  const parseAddress = (address) => {
    const addressList = address.split('\n');
    const parse = addressList.map((address) => {
      const addressArray = address.split(',');
      const addressNumAndStreetNum = addressArray[0].split(' ');
      const addressNum = addressNumAndStreetNum[0];
      const streetName = addressNumAndStreetNum.slice(1).join(' ');
      const boroughNum = parseBorough(addressArray[1]);
      setBorough(boroughNum);
      return [addressNum, streetName];
    });
    return parse;
  };

  // use effect that runs when the address state changes
  useEffect(() => {
    if (address) {
      // parse the address
      const addressNumAndStreetName = parseAddress(address);
      console.log(borough);
      // loop through addressNumAndStreetName and make fetch request to each address
      addressNumAndStreetName.forEach((address) => {
        const [addressNum, streetName] = address;
        const getData = setTimeout(() => {
          fetch(
            `/geoservice/geoservice.svc/Function_1A?Borough=${borough}&AddressNo=${addressNum}&StreetName=${streetName}&Key=${process.env.REACT_APP_API_KEY}`
          )
            .then((resp) => {
              return resp.json();
            })
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            });
        }, 1000); // wait 1 second before making the request
        return () => clearTimeout(getData);
      });
    }
  }, [address]);

  return (
    <div className='Home'>
      <h1 className='text-center py-3'>Geocoding Application</h1>
      {/* A text field form that accepts a csv file and text field and center form*/}
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
    </div>
  );
}
