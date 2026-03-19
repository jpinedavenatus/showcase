import { FC, ForwardRefExoticComponent, RefAttributes, SVGProps, useState } from 'react';
import { Link } from 'react-router-dom';
import { IPageProps, TMenu } from '../types';
import { ADVERTISERS_MENU, PUBLISHERS_MENU } from '../Constants';
import {
  ChevronLeftIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  FilmIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';

const Sidebar: FC<IPageProps> = ({ setPage, currentPage, pageHeader }) => {
  const [isCollapsed, setisCollapsed] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const menu: TMenu[] = pageHeader === 'Publisher' ? PUBLISHERS_MENU : ADVERTISERS_MENU;

  const iconMap: {
    [key: string]: ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;
  } = {
    ChevronLeftIcon,
    DevicePhoneMobileIcon,
    ComputerDesktopIcon,
    VideoCameraIcon,
    FilmIcon,
  };

  /*   const toggleAccordion = (index: number) => {
      setDropdownOpen(dropdownOpen === index ? null : index);
    }; */

  return (
    <>
      {/* <div className=' ml- mt-5 flex max-h-[80vh] min-h-[70vh] overflow-y-auto overflow-x-hidden  z-[9999999] shadow-lg rounded-md fixed'> */}
      {/* Sidebar */}
      <aside
        className={`overflow-hidden hidden md:flex fixed  left-0 z-[9999]  h-screen flex-col bg-white  text-gray-900 transition-all duration-300 ease-in-out border-r border-gray-200 shadow-2xl
        ${isCollapsed ? 'w-20' : 'w-64'}`}
      >
        {/* Toggle Sidebar */}
        <div
          className={`flex items-center  p-4 border-b-2 border-b-gray-200
           ${isCollapsed ? 'justify-center' : 'justify-between'}`}
        >
          {!isCollapsed && <span className="font-bold text-lg">{pageHeader}</span>}
          <button
            onClick={() => setisCollapsed(!isCollapsed)}
            className="border py-1 px-2 rounded-md hover:text-gray-500 "
          >
            {isCollapsed ? '☰' : <ChevronLeftIcon className="w-5 h-5 text-gray-600" />}
          </button>
        </div>

        <div className="mt-4 space-y-2 ">
          {menu.map(
            (menuItems, index) => {
              // const Icon = iconMap[menuItems.collapseLabel];
              const Icon = iconMap[menuItems.collapseLabel as keyof typeof iconMap];
              return (
                <div
                  key={menuItems.category}
                  className={`cursor-pointer  overflow-hidden  
               ${dropdownOpen === index ? 'border-b-2 border-b-venatusred' : ''}
              `}
                >
                  <div
                    className={`px-4 py-2 flex items-center hover:bg-venatusred  hover:text-white
                  ${isCollapsed ? 'justify-center' : 'justify-between'}
                  ${dropdownOpen === index ? 'bg-venatusred text-white ' : ''}
                `}
                    onClick={() => setDropdownOpen(dropdownOpen === index ? -1 : index)} //supports toggle change by setting to
                  >
                    <span>
                      {!isCollapsed
                        ? menuItems.expandLabel
                        : Icon && <Icon className="w-9 h-9 rounded-md text-white bg-venatusred p-2" />}
                    </span>

                    {!isCollapsed && <span className="ml-2">{dropdownOpen === index ? '-' : '+'}</span>}
                  </div>

                  {/* Submenu (pushes other items down) */}

                  <div
                    className={`px-2 grid  transition-all duration-300 ${dropdownOpen === index && !isCollapsed ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} `}
                  >
                    <div className="overflow-hidden">
                      {menuItems.subPages &&
                        menuItems.subPages.map((sub) => (
                          <div key={sub.name}>
                            <Link
                              className={`px-2 py-1 my-2 cursor-pointer w-full block 
                          ${sub.pageId === currentPage ? 'bg-gray-800 text-white' : 'hover:bg-gray-800 hover:text-white'} `}
                              to={`${sub.path}?pageId=${sub.pageId}`}
                              onClick={() => {
                                setPage(sub.pageId);
                              }}
                            >
                              {sub.name}
                            </Link>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              );
            },
            //with  Sub menus
          )}

          {/* Other menu items */}
        </div>
      </aside>
      {/* </div> */}
    </>
  );
};

export default Sidebar;
