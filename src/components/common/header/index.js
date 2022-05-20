// import React from 'react'
// import "./header.css"
// const Header = () => {
//   return (
//     <div className='max-width header'>
//         <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*' alt='Zomato-logo'  className='header-logo'></img>
//         <div className='header-right'>
//             <div className='header-location-search-container'>
//                 <div className='loaction-wrapper'>
//                     <div className='loaction-icon-name'>
//                         <i className='fi fi-rr-marker absolute-center loaction-icon'></i>
//                         <div>Banglore</div>
//                     </div>
//                     <i className='fi fi-rr-caret-down absolute-center'></i>
//                 </div>
//                 {/* <div className="location-search-separator"></div> */}
//                 {/* <div className='header-searchbar'>
//                     <i className='fi fi-rr-search absolute-center search-icon'></i>
//                     <input placeholder='search for restaurant , cuisine or a dish' className='search-input'></input>
//                 </div> */}
//             </div>
//             {/* <div className='profile-wrapper'>
//                 <img src='https://b.zmtcdn.com/data/user_profile_pictures/cbe/cb99d15e99375017db83eedf0bba4cbe.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A' alt='User-Prifile' className='header-profile-image'></img>
//                 <span className='header-username'>Aakash upadhyay</span>
//                 <i className='fi fi-rr-angle-small-down absolute-center profile-option-icon'></i>
//             </div> */}
//         </div>
//     </div>
//   )
// }

// export default Header




import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header max-width">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Bangalore</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              className="search-input"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>

        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/data/user_profile_pictures/cbe/cb99d15e99375017db83eedf0bba4cbe.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            className="header-profile-image"
            alt="Profile"
          />
          <span className="header-username">Aakash</span>
          <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;