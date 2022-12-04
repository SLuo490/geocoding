import { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
export default function Output(props) {
  const [showResult, setShowResult] = useState('');
  const { result } = props;

  const parseBorough = (borough) => {
    switch (borough) {
      case '1':
        return 'Manhattan';
      case '2':
        return 'Bronx';
      case '3':
        return 'Brooklyn';
      case '4':
        return 'Queens';
      case '5':
        return 'Staten Island';
      default:
        return '';
    }
  };

  useEffect(() => {
    if (result) {
      const cleanResult = (result) => {
        const clean = result.filter((item) => item.length > 0);
        const cleanResultArray = clean.map((address) => {
          const [addressNum, streetName, boroughNum, stateAndZip, lat, lon] =
            address;
          const addressNumAndStreetName = `${addressNum} ${streetName}`;
          const boroughName = parseBorough(boroughNum);
          const newBoroughName = ' ' + boroughName;
          const newLat = ' ' + lat;
          const newLon = ' ' + lon;

          return [
            addressNumAndStreetName,
            newBoroughName,
            stateAndZip,
            newLat,
            newLon,
          ];
        });
        const newCleanResultArray = cleanResultArray.join('\n');

        setShowResult(newCleanResultArray);
      };
      cleanResult(result);
    }
  }, [result]);

  return (
    // Returns a text field of the address's coordinates
    <div className='Output'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <form>
              <div className='form-group pt-4'>
                <h5>
                  Copy and paste coordinates to spreadsheet, or
                  <CSVLink data={showResult} className='text-decoration-none'>
                    download a csv.
                  </CSVLink>
                </h5>
                <div className='form-floating'>
                  <textarea
                    className='form-control'
                    placeholder='Address'
                    id='floatingTextarea'
                    style={{ height: '200px' }}
                    defaultValue={showResult}
                    onChange={(e) => setShowResult(e.target.value)}
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
