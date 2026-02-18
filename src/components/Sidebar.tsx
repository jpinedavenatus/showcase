import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { IPageProps, TMenu } from '../types';
import { PublishersMenu } from '../Constants';


const Sidebar: FC<IPageProps> = ({ setPage, currentPage }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(-1);

  const menu: TMenu[] = PublishersMenu;

  return (
    <div className=' ml-2 flex max-h-[80vh] min-h-[70vh] overflow-y-auto overflow-x-hidden absolute z-[9999999] shadow-lg rounded-md'>
      {/* Sidebar */}
      <aside
        className={`bg-white   transition-all  duration-300  
        ${collapsed ? 'w-16' : 'w-64'}`}
      >
        {/* Toggle Sidebar */}
        <div className='flex items-center justify-between p-4'>
          {!collapsed && <span className='font-bold text-lg'>Showcase</span>}
          <button onClick={() => setCollapsed(!collapsed)} className='border py-1 px-2 rounded-md hover:text-gray-500'>
            {collapsed ? '☰' : '↩'}
          </button>
        </div>

        {
          //! ALL MENUS
        }
        <ul className='mt-4 space-y-2'>
          {/* Dropdown Button */}

          {menu.map((menuItems, index) =>
            //with  Sub menus
            menuItems.subPages ? (
              <li
                key={menuItems.category}
                className={`cursor-pointer  
               ${dropdownOpen === index ? 'border border-venatusred rounded-sm' : ''}
              `}
              >
                <div
                  className={`px-4 py-2 flex items-center hover:bg-venatusred  hover:text-white
                  ${collapsed ? 'justify-center' : 'justify-between'}
                  ${dropdownOpen === index ? 'bg-venatusred text-white ' : ''}
                `}
                  onClick={() => setDropdownOpen(dropdownOpen === index ? -1 : index)} //supports toggle change by setting to
                >
                  <span>{!collapsed ? menuItems.expandLabel : menuItems.collapseLabel}</span>

                  {!collapsed && <span className='ml-2'>{dropdownOpen === index ? '▲' : '▼'}</span>}
                </div>

                {/* Submenu (pushes other items down) */}
                {dropdownOpen === index && !collapsed && (
                  <ul className='my-2 space-y-2 px-2'>
                    {menuItems.subPages.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          className={`px-2 py-1 rounded-md cursor-pointer w-full block
                          ${sub.pageId === currentPage ? 'bg-venatusred text-white' : 'hover:bg-venatusred hover:text-white'} `}
                          key={sub.pageId}
                          to={`${sub.path}?pageId=${sub.pageId}`}
                          onClick={() => {
                            setPage(sub.pageId);
                          }}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) :
              //no  Sub menus
              (
              <li
                  key={menuItems.category}
                  className='px-4 py-2 hover:bg-venatusred  hover:text-white cursor-pointer justify-between'
              >
                <span>{!collapsed ? menuItems.expandLabel : menuItems.collapseLabel}</span>
              </li>
            ),
          )}

          {/* Other menu items */}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
