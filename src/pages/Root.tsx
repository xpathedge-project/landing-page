import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Root = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <hr className="border-gray-700" />
      <div className="mx-auto w-10/12">
        <Outlet />
      </div>
      <hr className="border-gray-700" />
      <div className="mx-auto w-10/12">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
