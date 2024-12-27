import React, { useState,useEffect } from 'react';
import { injectIntl } from 'react-intl';
import { Row, Nav, NavItem, TabContent, TabPane, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import IconCardsCarousel from 'containers/dashboards/IconCardsCarousel';
// import UsersChartCard from 'containers/dashboards/UsersChartCard';
import NewsLetter from 'containers/dashboards/NewsLetter';
import MakeMoney from 'containers/dashboards/MakeMoney';
import AccountProfile from 'containers/dashboards/AccountProfile';
import IntlMessages from 'helpers/IntlMessages';
import LandingModal from 'containers/dashboards/LandingModal';

const DefaultDashboard = ({ intl, match }) => {
  const { messages } = intl;
  console.log(messages);

  const [activeSecondTab, setActiveSecondTab] = useState('1');
  const [isLandingModalOpen, setIsLandingModalOpen] = useState(false);

  const hasVisited = localStorage.getItem('hasVisited');
  useEffect(() => {
    if (hasVisited) {
      setIsLandingModalOpen(false);
      return;
    }
    setIsLandingModalOpen(true);
    localStorage.setItem('hasVisited', 'true');
  }, []);

  const handleClose = () => {
    setIsLandingModalOpen(false);
  };

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.dashboards" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Colxx xxs="12" xs="12" sm="12" lg="12" md="12" xxl="12" xl="12">
        <Nav tabs className=" mb-3 ml-0 mr-0">
          <NavItem className="w-14 text-center">
            <NavLink
              to="#"
              location={{}}
              className={classnames({
                active: activeSecondTab === '1',
                'nav-link': true,
              })}
              onClick={() => {
                setActiveSecondTab('1');
              }}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem className="w-14 text-center">
            <NavLink
              to="#"
              location={{}}
              className={classnames({
                active: activeSecondTab === '2',
                'nav-link': true,
              })}
              onClick={() => {
                setActiveSecondTab('2');
              }}
            >
              WhatsApp Account
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeSecondTab}>
          <TabPane tabId="1">
            <Row>
              <Colxx xl="12" md="12" lg="12" className="mb-4 rounded">
                <MakeMoney />
              </Colxx>
            </Row>
            <Row>
              <Colxx lg="12" xl="12" md="12" className="mb-4">
                <IconCardsCarousel />
              </Colxx>
            </Row>
            <Row>
              <Colxx sm="12" md="12" className="mb-4 rounded">
                  <NewsLetter />
              </Colxx>
            </Row>
            <Row>
              <Colxx xl="12" md="12" lg="12" className="mb-4 rounded">
                <NewsLetter />
              </Colxx>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Colxx xxs="12" lg="12" md="12" xl="12" className="">
                <div style={{ backgroundColor: 'white', padding: '10px' }}>
                  <div
                    style={{ borderRadius: '10px' }}
                    className="bg-theme-1 account-profile-background-layer account-profile-background-layer-btn "
                  >
                    <Button
                      color="light"
                      className="default btn btn-primary text-primary font-weight-bold"
                      style={{ borderRadius: '7px' }}
                    >
                      <i
                        className="iconsminds-repeat-2 mr-2"
                        style={{ fontWeight: 'bold' }}
                      />
                      <IntlMessages id="Refresh data" />
                    </Button>{' '}
                  </div>
                </div>
              </Colxx>
              <Colxx xxs="12" lg="12" md="12" xl="12" className="">
                <AccountProfile />
              </Colxx>
            </Row>
          </TabPane>
        </TabContent>
      </Colxx>
      <LandingModal isOpen={isLandingModalOpen} onClose={handleClose} />
    </>
  );
};
export default injectIntl(DefaultDashboard);
