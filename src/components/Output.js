import { useState, useEffect } from 'react';
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

  // // clean result
  // const cleanResult = (result) => {
  //   const clean = result.filter((item) => item.length > 0);

  //   // change the 3rd element of each array to the borough name
  //   const cleanResultArray = clean.map((address) => {
  //     const [addressNum, streetName, boroughNum, lat, lon] = address;
  //     const boroughName = parseBorough(boroughNum);
  //     return [addressNum, streetName, boroughName, lat, lon];
  //   });
  //   setShowResult(cleanResultArray);
  // };
  // cleanResult(result);

  const cleanResult = (result) => {
    const clean = result.filter((item) => item.length > 0);

    const cleanResultArray = clean.map((address) => {
      const [addressNum, streetName, boroughNum, lat, lon] = address;
      const boroughName = parseBorough(boroughNum);
      return [addressNum, streetName, boroughName, lat, lon];
    });
    setShowResult(cleanResultArray);
  };

  useEffect(() => {
    cleanResult(result);
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
                  Copy and paste coordinates to spreadsheet, or download a csv.
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
