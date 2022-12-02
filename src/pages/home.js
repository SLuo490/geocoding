import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

export default function Home() {
  // use state that store a string of addresses
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const changeHandler = (e) => {
  //   setAddress(e.target.value);
  // };

  const changeHandler = debounce((e) => {
    setAddress(e.target.value);
  }, 1000);

  // parse through the address string and return an list of address number and street name new line
  const parseAddress = (address) => {
    const addressList = address.split('\n');
    const parse = addressList.map((address) => {
      const addressArray = address.split(',');
      const addressNumAndStreetNum = addressArray[0].split(' ');
      const addressNum = addressNumAndStreetNum[0];
      const streetName = addressNumAndStreetNum.slice(1).join(' ');
      return [addressNum, streetName];
    });
    return parse;
  };

  // use effect that runs when the address state changes
  useEffect(() => {
    if (address) {
      // parse the address
      const addressNumAndStreetName = parseAddress(address);
      console.log(addressNumAndStreetName);
      const addressNum = addressNumAndStreetName[0][0];
      const streetName = addressNumAndStreetName[0][1];

      const getData = setTimeout(() => {
        fetch(
          `/geoservice/geoservice.svc/Function_1A?Borough=3&AddressNo=${addressNum}&StreetName=${streetName}&Key=BPQ10Hwf9dJlkPxH`
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
    }
  }, [address]);

  // call geoservice api(https://geoservice.planning.nyc.gov/geoservice/geoservice.svc/Function_1A?Borough=1&AddressNo=120&StreetName=bwy&Key=BPQ10Hwf9dJlkPxH) to get the latitude and longitude of the address  without cors error

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
