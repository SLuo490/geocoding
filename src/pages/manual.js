import Nav from '../components/Nav';

export default function Manual() {
  return (
    <div className='Doc'>
      <Nav />
      <h1 className='text-center py-3'>User Manual</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center'>
              This application is a geocoding application that takes in a list
              of addresses and maps the coordinates of each address. In
              addition, the application also provides CSV functionalities like
              import and export of the addresses.
            </p>
          </div>
          <div className='col-12 py-3'>
            <h3>1. Inputting Addresses</h3>
            <p>
              To input addresses, simply type in the address in the text field
              and click the 'Submit' button. The address will be added to the
              list of addresses.
              <br />
              <b>Make sure new addresses are separated by a new line</b>
            </p>
            <p>
              <b>Note:</b> When inputting addresses, please make sure that the
              address is in the following format:
              <i> Address Number, Street Name, Borough, State Zip Code. </i>
              <br />
              Keep in mind of the commas separating the Address Number, the
              Street Name, and Borough
            </p>
          </div>
          <div className='col-12 py-3'>
            <h3>2 Importing Addresses</h3>
            <p>
              To import addresses, click the 'Choose File' button and select a
              CSV file.
            </p>
            <p>
              <b>Note:</b> When importing addresses, please make sure that the
              CSV file's <b>header</b> is in the following format:
              <i> Address Number, Street Name, Borough, State, Zip Code. </i>
              <br />
            </p>
          </div>
          <div className='col-12 py-3'>
            <h3>3. Exporting Addresses</h3>
            <p>
              To export addresses, click the 'download as CSV' button. The
              application will download a CSV file with the addresses.
            </p>

            <p>
              <b>Note:</b> When the file is exported, the CSV file will contain
              no header. The CSV file will only contain the addresses. The
              header will be in the following format:
              <i> Address Number, Street Name, Borough, State, Zip Code. </i>
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
