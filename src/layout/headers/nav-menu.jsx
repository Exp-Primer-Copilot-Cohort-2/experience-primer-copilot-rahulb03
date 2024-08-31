import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";

const NavMenu = () => {
  return (
    <>
      <ul>
        {menu_data.map((menu_item, i) => (
          <li key={i} className={`${menu_item?.has_dropdown && "has-dropdown"}`}>
            <Link href={menu_item.link}>
              <span></span>
              {menu_item.title}
            </Link>
            {menu_item.has_dropdown && (
              <ul className="submenu">
                {menu_item.mega_menu ? (
                  <div className="mega-menu" >
                    {menu_item.sub_menus.map((sub_menu, i) => (
                      <div key={i} className="mega-menu-column" >
                        <div className="mega-menu-title">{sub_menu.title}</div>
                       
                        <ul >
                          {sub_menu.content.map((item, j) => (
                            <li key={j} >
                              <Link href={item.link}>
                                <span>{item.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>

                      </div>
                    ))}
                  </div>
                ) : (
                  menu_item.sub_menus.map((sub_menu, i) => (
                    <li key={i} >
                      <Link href={sub_menu.link}>
                        <span>{sub_menu.title}</span>
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;