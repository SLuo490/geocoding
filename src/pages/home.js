import Input from '../components/Input';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div className='Home'>
      <Nav />
      <h1 className='text-center py-3'>Geocoding Application</h1>
      <Input />
    </div>
  );
}
