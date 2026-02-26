import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../images/venatus-logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { Dispatch, FC, SetStateAction, useState } from 'react';

type tNavBar = {
  name: string;
  path: string;
  current: boolean;
  subMenu?: tNavBar[];
};

const navigation: tNavBar[] = [
  { name: 'Home', path: '/home', current: false },
  {
    name: 'Publishers',
    path: '/publisher',
    current: false,
  },
  {
    name: 'Advertisers',
    path: '/advertiser',
    current: false,
  },
  {
    name: 'Sandbox Demo',
    path: '/sandbox-demo',
    current: false,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}
interface INavProps {
  setPage: Dispatch<SetStateAction<string>>;
}

const NavBar: FC<INavProps> = ({ setPage }) => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname == '/' ? '/home' : location.pathname);

  return (
    <>
      <Disclosure as='nav' className='bg-white mb-10 shadow-lg border-b-gray-300 border ' id='header'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto'>
          <div className='flex w-full py-4 px-6'>
            <div className='flex items-center  justify-between w-full '>
              <div className='shrink-2 overflow-hidden'>
                <img alt='Your Company' src={logo} className='w-36 lg:w-36' />
              </div>

              <div className='hidden md:block'>
                <div className='flex items-baseline'>
                  {navigation.map((tab) => (
                    <Link
                      key={tab.name}
                      to={tab.path}
                      onClick={() => {
                        setActivePath(tab.path);
                        setPage('');
                      }}
                      aria-current={tab.current ? 'page' : undefined}
                      className={classNames(
                        activePath === tab.path ? 'text-venatusred' : 'text-slate-950  hover:text-venatusred',
                        ' px-3 text-lg font-medium',
                      )}
                    >
                      {tab.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className='-mr-2 flex md:hidden'>
              {/* Mobile menu button */}
              <DisclosureButton className='group relative inline-flex tabs-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-700 hover:text-white  focus:outline-none focus:ring-2 focus:ring-gray-200 '>
                <span className='absolute -inset-0.5' />
                <span className='sr-only'>Open main menu</span>
                <Bars3Icon aria-hidden='true' className='block size-6 group-data-[open]:hidden' />
                <XMarkIcon aria-hidden='true' className='hidden size-6 group-data-[open]:block' />
              </DisclosureButton>
            </div>
          </div>
        </div>

        <DisclosurePanel className='md:hidden'>
          <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3 '>
            {navigation.map((tab) => (
              <Link
                key={tab.name}
                to={tab.path}
                onClick={() => setActivePath(tab.path)}
                aria-current={tab.current ? 'page' : undefined}
                className={classNames(
                  activePath === tab.path ? 'bg-red-700 text-white' : 'text-gray-950 hover:bg-red-900 hover:text-white',
                  'block rounded-sm px-3 py-1 text-base font-medium',
                )}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
};

export default NavBar;
