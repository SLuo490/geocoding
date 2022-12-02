export default function Output() {
  return (
    // Returns a text field of the address's coordinates
    <div className='Output'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <form>
              <div className='form-group pt-4'>
                <h5>
                  Copy and paste coordinates to spreadsheet, or download a csv.
                </h5>
                <div className='form-floating'>
                  <textarea
                    className='form-control'
                    placeholder='Address'
                    id='floatingTextarea'
                    style={{ height: '200px' }}
                  ></textarea>
                  <label htmlFor='floatingTextarea'>
                    Address Number, Street Name, City, State, Zip Code,
                    Latitude, Longitude
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
