// import React from 'react';
// import './Sidebar.css';
// import { Link } from 'react-router-dom';

// function Sidebar() {
//   return (
//     <div className="sidebar">
//       <Link to='/'><h2 className="sidebar-title">beTa06</h2></Link>
//       <ul className="sidebar-menu">
//         <Link to='/dashboard'><li className="sidebar-item active">Dashboard</li></Link>
//         <Link to='/chatbot'><li className="sidebar-item">Chatbot</li></Link>
//         <Link to='/community'><li className="sidebar-item">Community</li></Link>
//         <Link to='/aboutus'><li className="sidebar-item">About Us</li></Link>
//         <li className="sidebar-heading">Account Pages</li>
//         <li className="sidebar-item">Profile</li>
//         <li className="sidebar-item">Sign In</li>
//         <li className="sidebar-item">Sign Up</li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;


// // Sidebar.js
// // import React, { useState } from 'react';
// // import './Sidebar.css';
// // import { Link } from 'react-router-dom';

// // function Sidebar() {
// //   const [isCollapsed, setIsCollapsed] = useState(true);

// //   const toggleSidebar = () => {
// //     setIsCollapsed(!isCollapsed);
// //   };

// //   return (
// //     <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
// //       <button className="toggle-button" onClick={toggleSidebar}>
// //         {isCollapsed ? '☰' : '✖'}
// //       </button>
// //       {!isCollapsed && (
// //         <>
// //           <h2 className="sidebar-title">beTa06</h2>
// //           <ul className="sidebar-menu">
// //             <Link to="/dashboard"><li className="sidebar-item active">Dashboard</li></Link>
// //             <Link to="/chatbot"><li className="sidebar-item">Chatbot</li></Link>
// //             <Link to="/community"><li className="sidebar-item">Community</li></Link>
// //             <li className="sidebar-item">RTL</li>
// //             <li className="sidebar-heading">Account Pages</li>
// //             <li className="sidebar-item">Profile</li>
// //             <li className="sidebar-item">Sign In</li>
// //             <li className="sidebar-item">Sign Up</li>
// //           </ul>
// //         </>
// //       )}
// //     </div>
// //   );
// // }

// // export default Sidebar;


import React, { useState } from 'react';
import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();
  
  return (
    <div className="sidebar">
      <Link to='/'><h2 className="sidebar-title">beTa06</h2></Link>
      <ul className="sidebar-menu">
        <Link to='/dashboard'>
          <li className={`sidebar-item ${location.pathname === '/dashboard' ? 'active' : ''}`}>Dashboard</li>
        </Link>
        <Link to='/chatbot'>
          <li className={`sidebar-item ${location.pathname === '/chatbot' ? 'active' : ''}`}>Chatbot</li>
        </Link>
        <Link to='/community'>
          <li className={`sidebar-item ${location.pathname === '/community' ? 'active' : ''}`}>Community</li>
        </Link>
        <Link to='/aboutus'>
          <li className={`sidebar-item ${location.pathname === '/aboutus' ? 'active' : ''}`}>About Us</li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;