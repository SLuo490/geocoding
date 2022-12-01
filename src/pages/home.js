import { useState } from 'react';

export default function Home() {
  return (
    <div className='Home'>
      <h1 className='text-center py-3'>Geocoding Application</h1>
      {/* A text field form that accepts a csv file and text field and center form*/}
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <form>
              <div className='form-group'>
                <div class='form-floating'>
                  <textarea
                    class='form-control'
                    placeholder='Enter Address: Address Number, Street Name, City, State, Zip Code'
                    id='floatingTextarea'
                    style={{ height: '200px' }}
                  ></textarea>
                  <label for='floatingTextarea'>
                    Address Number, Street Name, City, State, Zip Code
                    <br></br>
                    695, Park Ave, New York, NY, 10065
                  </label>
                </div>

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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
