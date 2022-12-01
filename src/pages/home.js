import { useState } from 'react';

export default function Home() {
  return (
    <div className='Home'>
      <h1 className='text-center py-3'>Geocoding Application</h1>
      {/* A text field form that accepts a csv file and text field and center form*/}
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 offset-md-0'>
            <form>
              <div className='form-group'>
                <h5>Copy and paste a list of locations, or upload a csv.</h5>
                <p>
                  <small>
                    When pasting or uploading files, your first column should be
                    the headers. Columns should be separated by tabs or commas.
                  </small>
                </p>
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
              </div>
            </form>
          </div>
          <div className='col-md-3 offset-md-0'>
            <form>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
