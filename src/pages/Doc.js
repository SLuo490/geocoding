import Nav from '../components/Nav';

export default function Doc() {
  return (
    <div className='Doc'>
      <Nav />
      <h1 className='text-center py-3'>Documentation</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <p
              className='text-center'
              style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              This application is a geocoding application that takes in a list
              of addresses and returns the coordinates of each address.
            </p>
            <p
              className='text-center'
              style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              The application is built using React and Node.js.
            </p>
            <p
              className='text-center'
              style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              The application is deployed on Heroku.
            </p>
            <p
              className='text-center'
              style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              The application is hosted on GitHub.
            </p>
            <p
              className='text-center'
              style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              The application is built using the following technologies:
            </p>
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>React-Bootstrap</li>
              <li>React-Csv</li>
              <li>React-Router-Dom</li>
              <li>Heroku</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
