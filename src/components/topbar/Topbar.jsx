import React from 'react';
import './topbar.css'
const Topbar = () => {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Marvel | Developers</span>
            </div>
            <div className="topbarRight">
                <ul>
                    <li className="list">Why Marvel<select><option></option></select></li>
                    <li className="list">Interprice</li>
                    <li className="list">Prising</li>
                    <li className="list">Sign in</li>
                    <li className="list "><div className="signup"> Sign up free</div></li>
                </ul>
            </div>











      {/* <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search for friend, post or video" className="searchInput"/>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/0.png" alt="" className="topbarImg"/>
      </div> */}
    </div>
    );
};

export default Topbar;