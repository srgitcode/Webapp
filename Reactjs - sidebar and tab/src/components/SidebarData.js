import React from 'https://cdn.skypack.dev/react@17.0.1';
import * as FaIcons from 'https://cdn.skypack.dev/react-icons@v4.3.1/fa';
import * as AiIcons from 'https://cdn.skypack.dev/react-icons@v4.3.1/ai';
import * as IoIcons from 'https://cdn.skypack.dev/react-icons@v4.3.1/io';
//
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];

export default SidebarData;
