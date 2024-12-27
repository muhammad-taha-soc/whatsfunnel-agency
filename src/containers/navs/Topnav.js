/* eslint-disable */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { injectIntl } from 'react-intl';

import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  // Input,
} from 'reactstrap';

import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

// import IntlMessages from 'helpers/IntlMessages';
import {
  // menuHiddenBreakpoint,
  searchPath,
  // localeOptions,
  isDarkSwitchActive,
  // buyUrl,
  adminRoot,
} from 'constants/defaultValues';
import { MobileMenuIcon } from 'components/svg';
// import { getDirection, setDirection } from 'helpers/Utils';
import {
  setContainerClassnames,
  clickOnMobileMenu,
  logoutUser,
  changeLocale,
} from 'redux/actions';

// import TopnavEasyAccess from './Topnav.EasyAccess';
import TopnavNotifications from './Topnav.Notifications';
import TopnavDarkSwitch from './Topnav.DarkSwitch';
import { GoDotFill } from 'react-icons/go';
const TopNav = ({
  intl,
  history,
  containerClassnames,
  // menuClickCount,
  // selectedMenuHasSubItems,
  // locale,
  // setContainerClassnamesAction,
  clickOnMobileMenuAction,
  logoutUserAction,
  // changeLocaleAction,
}) => {
  // const [isInFullScreen, setIsInFullScreen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  const search = () => {
    history.push(`${searchPath}?key=${searchKeyword}`);
    setSearchKeyword('');
  };

  // const handleChangeLocale = (_locale, direction) => {
  //   changeLocaleAction(_locale);

  //   const currentDirection = getDirection().direction;
  //   if (direction !== currentDirection) {
  //     setDirection(direction);
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 500);
  //   }
  // };

  // const isInFullScreenFn = () => {
  //   return (
  //     (document.fullscreenElement && document.fullscreenElement !== null) ||
  //     (document.webkitFullscreenElement &&
  //       document.webkitFullscreenElement !== null) ||
  //     (document.mozFullScreenElement &&
  //       document.mozFullScreenElement !== null) ||
  //     (document.msFullscreenElement && document.msFullscreenElement !== null)
  //   );
  // };

  // const handleSearchIconClick = (e) => {
  //   if (window.innerWidth < menuHiddenBreakpoint) {
  //     let elem = e.target;
  //     if (!e.target.classList.contains('search')) {
  //       if (e.target.parentElement.classList.contains('search')) {
  //         elem = e.target.parentElement;
  //       } else if (
  //         e.target.parentElement.parentElement.classList.contains('search')
  //       ) {
  //         elem = e.target.parentElement.parentElement;
  //       }
  //     }

  //     if (elem.classList.contains('mobile-view')) {
  //       search();
  //       elem.classList.remove('mobile-view');
  //       removeEventsSearch();
  //     } else {
  //       elem.classList.add('mobile-view');
  //       addEventsSearch();
  //     }
  //   } else {
  //     search();
  //   }
  //   e.stopPropagation();
  // };

  const handleDocumentClickSearch = (e) => {
    let isSearchClick = false;
    if (
      e.target &&
      e.target.classList &&
      (e.target.classList.contains('navbar') ||
        e.target.classList.contains('simple-icon-magnifier'))
    ) {
      isSearchClick = true;
      if (e.target.classList.contains('simple-icon-magnifier')) {
        search();
      }
    } else if (
      e.target.parentElement &&
      e.target.parentElement.classList &&
      e.target.parentElement.classList.contains('search')
    ) {
      isSearchClick = true;
    }

    if (!isSearchClick) {
      const input = document.querySelector('.mobile-view');
      if (input && input.classList) input.classList.remove('mobile-view');
      removeEventsSearch();
      setSearchKeyword('');
    }
  };

  const removeEventsSearch = () => {
    document.removeEventListener('click', handleDocumentClickSearch, true);
  };

  // const addEventsSearch = () => {
  //   document.addEventListener('click', handleDocumentClickSearch, true);
  // };

  // const handleSearchInputKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     search();
  //   }
  // };

  // const toggleFullScreen = () => {
  //   const isFS = isInFullScreenFn();

  //   const docElm = document.documentElement;
  //   if (!isFS) {
  //     if (docElm.requestFullscreen) {
  //       docElm.requestFullscreen();
  //     } else if (docElm.mozRequestFullScreen) {
  //       docElm.mozRequestFullScreen();
  //     } else if (docElm.webkitRequestFullScreen) {
  //       docElm.webkitRequestFullScreen();
  //     } else if (docElm.msRequestFullscreen) {
  //       docElm.msRequestFullscreen();
  //     }
  //   } else if (document.exitFullscreen) {
  //     document.exitFullscreen();
  //   } else if (document.webkitExitFullscreen) {
  //     document.webkitExitFullscreen();
  //   } else if (document.mozCancelFullScreen) {
  //     document.mozCancelFullScreen();
  //   } else if (document.msExitFullscreen) {
  //     document.msExitFullscreen();
  //   }
  //   setIsInFullScreen(!isFS);
  // };

  const handleLogout = () => {
    logoutUserAction();
    // Optionally, redirect to login
    window.location.href = '/user/login';
  };

  // const menuButtonClick = (e, _clickCount, _conClassnames) => {
  //   e.preventDefault();

  //   setTimeout(() => {
  //     const event = document.createEvent('HTMLEvents');
  //     event.initEvent('resize', false, false);
  //     window.dispatchEvent(event);
  //   }, 350);
  //   setContainerClassnamesAction(
  //     _clickCount + 1,
  //     _conClassnames,
  //     selectedMenuHasSubItems
  //   );
  // };

  const mobileMenuButtonClick = (e, _containerClassnames) => {
    e.preventDefault();
    clickOnMobileMenuAction(_containerClassnames);
  };

  const { messages } = intl;
  console.log(messages);

  return (
    <nav className="navbar fixed-top">
      <div className="d-flex align-items-center navbar-left">
        {/* <NavLink
          to="#"
          location={{}}
          className="menu-button d-none d-md-block"
          onClick={(e) =>
            menuButtonClick(e, menuClickCount, containerClassnames)
          }
        >
          <MenuIcon />
        </NavLink> */}
        <NavLink
          to="#"
          location={{}}
          className="menu-button-mobile d-xs-block d-sm-block d-md-none"
          onClick={(e) => mobileMenuButtonClick(e, containerClassnames)}
        >
          <MobileMenuIcon />
        </NavLink>
      </div>
      <NavLink className="navbar-logo" to={adminRoot}>
        <span className="logo d-none d-xs-block" />
        <span className="logo-mobile d-block d-xs-none" />
      </NavLink>

      <div
        className="navbar-right"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginRight: '-20px',
        }}
      >
        {isDarkSwitchActive && <TopnavDarkSwitch />}
        <div className="header-icons d-inline-block align-middle">
          {/* <TopnavEasyAccess /> */}
          {/* <i className="iconsminds-envelope-2" /> */}
          <div className="position-relative d-none d-sm-inline-block">
            <UncontrolledDropdown className="dropdown-menu-right">
              <DropdownToggle className="header-icon" color="empty">
                {/* <i className="simple-icon-grid" /> */}
                <i
                  className="simple-icon-envelope"
                  style={{ fontSize: '20px' }}
                />
              </DropdownToggle>
              {/* <DropdownMenu
                className="position-absolute mt-3"
                right
                id="iconMenuDropdown"
              >
                <NavLink
                  to={`${adminRoot}/dashboards/default`}
                  className="icon-menu-item"
                >
                  <i className="iconsminds-shop-4 d-block" />{' '}
                  <IntlMessages id="menu.dashboards" />
                </NavLink>

                <NavLink to={`${adminRoot}/ui`} className="icon-menu-item">
                  <i className="iconsminds-pantone d-block" />{' '}
                  <IntlMessages id="menu.ui" />
                </NavLink>
                <NavLink
                  to={`${adminRoot}/ui/charts`}
                  className="icon-menu-item"
                >
                  <i className="iconsminds-bar-chart-4 d-block" />{' '}
                  <IntlMessages id="menu.charts" />
                </NavLink>
                <NavLink
                  to={`${adminRoot}/applications/chat`}
                  className="icon-menu-item"
                >
                  <i className="iconsminds-speach-bubble d-block" />{' '}
                  <IntlMessages id="menu.chat" />
                </NavLink>
                <NavLink
                  to={`${adminRoot}/applications/survey`}
                  className="icon-menu-item"
                >
                  <i className="iconsminds-formula d-block" />{' '}
                  <IntlMessages id="menu.survey" />
                </NavLink>
                <NavLink
                  to={`${adminRoot}/applications/todo`}
                  className="icon-menu-item"
                >
                  <i className="iconsminds-check d-block" />{' '}
                  <IntlMessages id="menu.todo" />
                </NavLink>
              </DropdownMenu> */}
            </UncontrolledDropdown>
          </div>
          <TopnavNotifications />
          {/* <button
            className="header-icon btn btn-empty d-none d-sm-inline-block"
            type="button"
            id="fullScreenButton"
            onClick={toggleFullScreen}
          >
            {isInFullScreen ? (
              <i className="simple-icon-size-actual d-block" />
            ) : (
              <i className="simple-icon-size-fullscreen d-block" />
            )}
          </button> */}
        </div>
        <div className="user d-inline-block">
          <UncontrolledDropdown className="dropdown-menu-right">
            <DropdownToggle
              className="p-0"
              color="empty"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span className="name mr-1 text-right">
                <div
                  style={{
                    fontWeight: '500',
                    fontSize: '14px',
                    color: '#1A1C21',
                    fontFamily: 'Inter',
                  }}
                >
                  Jay Hargodson
                </div>
                <div>Manager</div>
              </span>
              <span className="" style={{ position: 'relative' }}>
                <img alt="Profile" src="/assets/img/profiles/l-1.jpg" />
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-5px',
                    right: '-5px',
                    backgroundColor: 'white',
                    padding: '5px',
                    width: '15px',
                    height: '15px',
                    borderRadius: '50%',
                  }}
                >
                  {/* <i
                    className="simple-icon-camera text-primary"
                    style={{ fontSize: '10px' }}
                  /> */}
                  <GoDotFill
                    className="text-primary"
                    size={18}
                    style={{
                      position: 'absolute',
                      bottom: '-1px',
                      right: '-1px',
                      // backgroundColor: 'white',
                      // padding: '5px',
                      // width: '15px',
                      // height: '15px',
                      // borderRadius: '50%',
                    }}
                  />
                </span>
              </span>
            </DropdownToggle>
            <DropdownMenu className="mt-3" right>
              <DropdownItem onClick={() => history.push('/app/profile')}>
                {' '}
                Account
              </DropdownItem>
              {/* <DropdownItem>Features</DropdownItem>
              <DropdownItem>History</DropdownItem>
              <DropdownItem>Support</DropdownItem>
              <DropdownItem divider /> */}
              <DropdownItem onClick={() => handleLogout()}>
                Sign out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ menu, settings }) => {
  const { containerClassnames, menuClickCount, selectedMenuHasSubItems } = menu;
  const { locale } = settings;
  return {
    containerClassnames,
    menuClickCount,
    selectedMenuHasSubItems,
    locale,
  };
};
export default injectIntl(
  connect(mapStateToProps, {
    setContainerClassnamesAction: setContainerClassnames,
    clickOnMobileMenuAction: clickOnMobileMenu,
    logoutUserAction: logoutUser,
    changeLocaleAction: changeLocale,
  })(TopNav)
);
