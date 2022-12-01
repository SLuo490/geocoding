export default function Home() {
  return (
    <div className=''>
      <h1>Geocoding Application</h1>
      {/* A text field form that accepts a csv file and text field */}
      <form>
        <div>
          <input
            type='text'
            placeholder='Enter Addresses separated with commas'
          />
        </div>
        <input type='file' accept='.csv' />
      </form>
    </div>
  );
}
