import { FC } from 'react';
import logo from '../images/venatus-logo.svg';

const Footer: FC = () => {
  return (
    <footer
      id='footer'
      className='w-full h-[200px] pb-20 flex flex-col justify-center items-center  border-t border-gray-300 mx-auto z-[99999] relative'
    >
      {/* footer content here */}
      <img alt='Your Company' src={logo} className='w-36 lg:w-36 mb-2' />
      <h1>Copyright © 2026 Venatus Media Limited</h1>
    </footer>
  );
};

export default Footer;
