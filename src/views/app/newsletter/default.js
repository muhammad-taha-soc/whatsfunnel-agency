import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
// import { Row } from 'reactstrap';
import {
  Row,
  // Card,
  // CardBody,
  // CardTitle,
  // CardHeader,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  Button,
  // CardTitle,
  // Badge,
  // Button,
  // Badge,
  // CardText,
  // CardSubtitle,
  // Table,
  // CardImg
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import SingleLightbox from 'components/pages/SingleLightbox';
// import recentPostsData from 'data/recentposts';
// import RecentPost from 'components/common/RecentPost';
// import whotoFollowData from 'data/follow';
// import UserFollow from 'components/common/UserFollow';
// import GalleryDetail from 'containers/pages/GalleryDetail';
import classnames from 'classnames';
// import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
// import RecentOrders from 'containers/dashboards/RecentOrders';
// import Logs from 'containers/dashboards/Logs';
// import Tickets from 'containers/dashboards/Tickets';
// import Calendar from 'containers/dashboards/Calendar';
// import BestSellers from 'containers/dashboards/BestSellers';
// import ProfileStatuses from 'containers/dashboards/ProfileStatuses';
// import GradientCardContainer from 'containers/dashboards/GradientCardContainer';
// import Cakes from 'containers/dashboards/Cakes';
// import GradientWithRadialProgressCard from 'components/cards/GradientWithRadialProgressCard';
// import SortableStaticticsRow from 'containers/dashboards/SortableStaticticsRow';
// import AdvancedSearch from 'containers/dashboards/AdvancedSearch';
// import SmallLineCharts from 'containers/dashboards/SmallLineCharts';
// import SalesChartCard from 'containers/dashboards/SalesChartCard';
// import ProductCategoriesPolarArea from 'containers/dashboards/ProductCategoriesPolarArea';
// import WebsiteVisitsChartCard from 'containers/dashboards/WebsiteVisitsChartCard';
// import ConversionRatesChartCard from 'containers/dashboards/ConversionRatesChartCard';
// import NewsLetter from 'containers/dashboards/NewsLetter';
// import IntlMessages from 'helpers/IntlMessages';
// import AccountProfile from 'containers/dashboards/AccountProfile';
import IntlMessages from 'helpers/IntlMessages';
import Schedule from 'containers/newsletter/Schedule';
import Draft from 'containers/newsletter/Draft';
import History from 'containers/newsletter/History';
import { FiPlusCircle } from 'react-icons/fi';

// import CustomersTable from 'containers/contacts/CustomersTable';
import MessageTemplates from 'containers/newsletter/MessageTemplates';

const DefaultNewsLetter = ({ intl, match, history }) => {
  const { messages } = intl;
  // const navigate = useHistory();
  console.log(messages);
  console.log('match ---', match);

  const [activeSecondTab, setActiveSecondTab] = useState('1');

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="dashboards.news-letter" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Colxx xxs="12" xs="12" sm="12" lg="12" md="12" xxl="12" xl="12">
        <div className="d-flex flex-row justify-content-between">
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
                Overview
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
                Message templates
              </NavLink>
            </NavItem>
          </Nav>
          <div className="">
            <Button
              color="light"
              className="btn-primary bg-theme-1 text-white font-weight-bold d-flex align-items-center"
              onClick={
                activeSecondTab === '1'
                  ? () => history.push('/app/news-letter/create-news-letter')
                  : () => history.push('/app/news-letter/create-new-template')
              }
              style={{ borderRadius: '0.5rem' }}
            >
              <FiPlusCircle size={20} className="mr-1" />
              <IntlMessages
                id={`${
                  activeSecondTab === '1' ? 'Create Newsletter' : 'New Template'
                }`}
              />
            </Button>{' '}
          </div>
        </div>
        {activeSecondTab === '2' && (
        <div className='text-muted mt-2 mb-3' >
        <IntlMessages id="WhatsApp templates are pre-approved messages that you must use to send a broadcast. Meta usually approves these templates within a few minutes, but approval can take up to 24 hours." />
        </div>)}
        <TabContent activeTab={activeSecondTab}>
          <TabPane tabId="1">
            <Row>
              <Colxx xl="12" md="12" lg="12" className="mb-4 rounded">
                <Schedule />
              </Colxx>
            </Row>
            <Row>
              <Colxx lg="12" xl="12" md="12" className="mb-4 rounded">
                <Draft />
              </Colxx>
            </Row>
            <Row>
              <Colxx xl="12" md="12" lg="12" className="mb-4 rounded">
                <History />
              </Colxx>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Colxx xxs="12" lg="12" md="12" xl="12" className="rounded">
                <MessageTemplates />
              </Colxx>
            </Row>
          </TabPane>
        </TabContent>
      </Colxx>
    </>
  );
};
export default injectIntl(DefaultNewsLetter);
