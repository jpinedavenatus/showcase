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

const Sidebar: FC<IPageProps> = ({ setPage, currentPage, category }) => {
  const saveHeader = (category: string) => {
    localStorage.setItem('category', category)
  }

  const getHeader = () => {
    return localStorage.getItem('category') ?? ''
  }

  const [isCollapsed, setisCollapsed] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  if (category != '' && category != undefined) {
    saveHeader(category)
  }

  const sideBarLabel = getHeader();
  const menu: TMenu[] = getHeader() === 'Publisher' ? PUBLISHERS_MENU : ADVERTISERS_MENU;

  const iconMap: {
    [key: string]: ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;
  } = {
    ChevronLeftIcon,
    DevicePhoneMobileIcon,
    ComputerDesktopIcon,
    VideoCameraIcon,
    FilmIcon,
  };
  type TInnerAccordionProps = {
    index: number;
    isOpen: boolean;
    category: string;
    onToggle: () => void;
    children: React.ReactNode;
  };
  const [activeSubIndex, setActiveSubIndex] = useState<number | null>(null);

  const toggleSubAccordion = (index: number) => {
    setActiveSubIndex(activeSubIndex === index ? null : index);
  };

  /*   const toggleAccordion = (index: number) => {
      setDropdownOpen(dropdownOpen === index ? null : index);
    }; */

  const InnerAccordion = ({ isOpen, category, onToggle, children }: TInnerAccordionProps) => (
    <div className="border bg-slate-100 border-gray-300 overflow-hidden my-2">
      <button
        onClick={() => onToggle()}
        className="pl-5 text-md w-full flex justify-between items-center px-2 py-1 font-semibold text-left text-white bg-gray-700 hover:bg-venatusred hover:text-white transition"
      >
        {category}
        <span className="text-lg">{isOpen ? '-' : '+'}</span>
      </button>

      {/* Content */}
      <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="p-2 border-t">
            <div className=" gap-2">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );

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
          {!isCollapsed && <span className="font-bold text-lg">{sideBarLabel}</span>}
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

                      {menuItems.subCategory ? <>
                        {menuItems.subCategory.map((item, subIndex) => {
                          return (
                            <InnerAccordion
                              index={subIndex}
                              isOpen={activeSubIndex === subIndex}
                              onToggle={() => toggleSubAccordion(subIndex)}
                              category={item.category}
                            >
                              {item?.subPages.map((subitems) => (
                                <Link
                                  className={`px-2 py-1  cursor-pointer w-full block 
                          ${subitems.pageId === currentPage ? 'bg-gray-800 text-white' : 'hover:bg-gray-800 hover:text-white'} `}
                                  to={`${subitems.path}?pageId=${subitems}`}
                                  onClick={() => {
                                    setPage(subitems.pageId);
                                  }}
                                >
                                  {subitems.name}
                                </Link>
                              ))}
                            </InnerAccordion>
                          );
                        })}
                      </>
                        :
                        <>
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
                        </>
                      }

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
