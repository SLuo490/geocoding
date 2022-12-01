import { useState, useEffect } from 'react';

export default function Home() {
  // use state that store a string of addresses
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // parse through the address string and return an array of address number and street name
  const parseAddress = (address) => {
    const addressArray = address.split(',');
    return addressArray;
  };

  // const addressList = address.split('\n');
  // const addressListParsed = addressList.map((address) => {
  //   const addressNumber = address.match(/\d+/g);
  //   const addressStreet = address.match(/[a-zA-Z]+/g);
  //   return [addressNumber, addressStreet];
  // });
  // return addressListParsed;

  // use effect that runs when the address state changes
  useEffect(() => {
    // if the address state is not empty
    if (address) {
      // parse the address
      const [addressNumber, streetName] = parseAddress(address);
      // log the address number and street name
      console.log(addressNumber, streetName);
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
                    onChange={(e) => setAddress(e.target.value)}
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
