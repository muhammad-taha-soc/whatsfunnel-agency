import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
// import { Row } from 'reactstrap';
import {
  Row,
  Card,
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
  Form,
  FormGroup,
  Label,
  Input,
  // CardBody,
  CardTitle,
  // Badge,
} from 'reactstrap';
import Select from 'react-select';

import { NavLink } from 'react-router-dom';
// import { TbRotateClockwise2 } from 'react-icons/tb';

// import SingleLightbox from 'components/pages/SingleLightbox';
// import recentPostsData from 'data/recentposts';
// import RecentPost from 'components/common/RecentPost';
// import whotoFollowData from 'data/follow';
// import UserFollow from 'components/common/UserFollow';
// import GalleryDetail from 'containers/pages/GalleryDetail';
import classnames from 'classnames';
// import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';
// import Breadcrumb from 'containers/navs/Breadcrumb';
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
// import Schedule from 'containers/newsletter/Schedule';
// import Draft from 'containers/newsletter/Draft';
// import History from 'containers/newsletter/History';
// import TagsInput from 'react-tagsinput';
import CustomSelectInput from 'components/common/CustomSelectInput';
import { IoMdCheckmark } from 'react-icons/io';
import { GoTriangleRight } from 'react-icons/go';
// import { TbRotateClockwise2 } from 'react-icons/tb';
// import TagsInputExample from 'containers/forms/TagsInputExample';

const CreateNewsLetter = ({ intl, match }) => {
  const { messages } = intl;
  console.log(messages);
  console.log(match);
  const selectData = [
    { label: 'Cake', value: 'cake', key: 0 },
    { label: 'Cupcake', value: 'cupcake', key: 1 },
    { label: 'Dessert', value: 'dessert', key: 2 },
  ];

  const [activeSecondTab, setActiveSecondTab] = useState('1');
  const [selectedOptionLT, setSelectedOptionLT] = useState('');
  // const [tagsLT, setTagsLT] = useState([]);
  return (
    <>
      <Row>
        <Colxx xxs="12">
          {/* <Breadcrumb heading="dashboards.news-letter" match={match} />
          <Separator className="mb-5" /> */}
          <div className="d-flex flex-row justify-content-between align-items-center mb-4">
            <div className="d-flex flex-row justify-content-around align-items-center font-weight-bold">
              <IntlMessages id={`${'Dashboard'}`} />
              <GoTriangleRight className="ml-2 mr-2" />
              <IntlMessages id={`${'Newsletter'}`} />
              <GoTriangleRight className="ml-2 mr-2" />
              <div className="text-muted">
                <IntlMessages id={`${'Create Newsletter'}`} />
              </div>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <p
                className="text-muted font-weight-bold mr-2 mt-3"
                // color="light"
              >
                <IoMdCheckmark size={20} className="mr-1" />
                Saved
              </p>
              <Button
                color="light"
                className="default btn-primary bg-theme-1 mr-1 text-white font-weight-bold"
                style={{ borderRadius: '0.5rem' }}
              >
                <IntlMessages id={`${'Create Newsletter'}`} />
              </Button>{' '}
              <Button
                color="light"
                className="w-10 bg-theme-1 text-white font-weight-bold"
                style={{ borderRadius: '0.5rem' }}
              >
                <img
                  className=""
                  style={{ margin: 'auto -10px' }}
                  alt="calendar"
                  src="/assets/img/newsletter/clock-small-icon.svg"
                  // width="20px"
                  height="20px"
                />
              </Button>{' '}
            </div>
          </div>
        </Colxx>
      </Row>
      <Card>
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
                  Create NewsLetter
                </NavLink>
              </NavItem>
            </Nav>
            {/* <div className="">
              <Button
                color="light"
                className="default btn btn-primary bg-primary text-white font-weight-bold"
              >
                <i className="simple-icon-plus mr-2" />
                <IntlMessages
                  id={`${
                    activeSecondTab === '1'
                      ? 'Create Newsletter'
                      : 'New Template'
                  }`}
                />
              </Button>{' '}
            </div> */}
          </div>
          <TabContent activeTab={activeSecondTab}>
            <TabPane tabId="1">
              <Row>
                <Colxx lg="6" xl="6" md="6" className="mb-4">
                  <Form>
                    <FormGroup className="">
                      {/* <Label>
                        <IntlMessages id="Select existing template" />
                      </Label> */}
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        value={selectedOptionLT}
                        onChange={(val) => setSelectedOptionLT(val)}
                        options={selectData}
                        placeholder="Select existing template"
                      />
                    </FormGroup>
                    <CardTitle>
                      <IntlMessages id="Target group & dispatch" />
                    </CardTitle>
                    <FormGroup className="mb-2">
                      <Label>
                        <IntlMessages id="Name of the newsletter" />
                      </Label>
                      <Input type="name" placeholder="Enter name" />
                    </FormGroup>
                    <FormGroup className="mb-2 mt-4">
                      <Label>
                        <IntlMessages id="Target group" />
                      </Label>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        value={selectedOptionLT}
                        onChange={(val) => setSelectedOptionLT(val)}
                        options={selectData}
                        placeholder=""
                        isMulti
                      />
                    </FormGroup>
                    <FormGroup className="mb-4 mt-4">
                      <Label>
                        <IntlMessages id="Select an option" />
                      </Label>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        value={selectedOptionLT}
                        onChange={(val) => setSelectedOptionLT(val)}
                        options={selectData}
                        placeholder="Send now"
                      />
                    </FormGroup>
                    <CardTitle>
                      <IntlMessages id="Target group & dispatch" />
                    </CardTitle>
                    <FormGroup className="mb-2">
                      <Label>
                        <IntlMessages id="Name of the newsletter" />
                      </Label>
                      <Input type="name" placeholder="Enter name" />
                    </FormGroup>
                    <FormGroup className="mb-2 mt-4">
                      <Label>
                        <IntlMessages id="Target group" />
                      </Label>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        value={selectedOptionLT}
                        onChange={(val) => setSelectedOptionLT(val)}
                        options={selectData}
                        placeholder=""
                        isMulti
                      />
                    </FormGroup>
                    <FormGroup className="mb-4 mt-4">
                      <Label>
                        <IntlMessages id="Select an option" />
                      </Label>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        value={selectedOptionLT}
                        onChange={(val) => setSelectedOptionLT(val)}
                        options={selectData}
                        placeholder="Send now"
                      />
                    </FormGroup>
                    {/* </FormGroup> */}
                    {/* <FormGroup className="form-group has-top-label mb-2">
                      <Label>
                        <IntlMessages id="Enter name" />
                      </Label>
                      <Input type="name" />
                    </FormGroup>
                    <CardBody>
                      <CardTitle>
                        <IntlMessages id="form-components.tags" />
                      </CardTitle>
                      <TagsInputExample />
                    </CardBody>
                    <FormGroup className="form-group has-top-label">
                      <Label>
                        <IntlMessages id="Send now" />
                      </Label>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        value={selectedOptionLT}
                        onChange={(val) => setSelectedOptionLT(val)}
                        options={selectData}
                        placeholder=""
                      />
                    </FormGroup> */}
                  </Form>
                </Colxx>
              {/* </Row> */}
              {/* <Row> */}
                <Colxx lg="6" xl="6" md="6" className="text-center">
                  <img
                    className=""
                    // style={{ margin: 'auto -10px' }}
                    alt="whatsapp"
                    src="/assets/img/newsletter/whatsapp.svg"
                    // width="20px"
                    // height="20px"
                  />
                </Colxx>
              </Row>
              {/* <Row> */}
              {/* <Colxx xl="12" md="12" lg="12" className="mb-4">
                  <History />
                </Colxx> */}
              {/* </Row> */}
            </TabPane>
          </TabContent>
        </Colxx>
      </Card>
    </>
  );
};
export default injectIntl(CreateNewsLetter);
