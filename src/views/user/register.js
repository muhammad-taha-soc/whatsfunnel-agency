import React, { useState } from 'react';
import {
  Row,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from 'redux/actions';

import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';
import { adminRoot } from 'constants/defaultValues';

const Register = ({ history, registerUserAction }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [name] = useState('Sarah Kortney');
  const values = { email, password };
  const onUserRegister = () => {
    if (values.email !== '' && values.password !== '') {
      history.push(adminRoot);
    }

    registerUserAction(values, history);
  };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side ">
            <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
            <p className="white mb-0">
              Please use this form to register. <br />
              If you are a member, please{' '}
              <NavLink to="/user/login" className="white">
                login
              </NavLink>
              .
            </p>
          </div>
          <div className="form-side">
            <NavLink to="/" className="white">
              <span className="logo-single" />
            </NavLink>
            <CardTitle className="mb-4">
              <IntlMessages id="Sign Up" />
            </CardTitle>
            <Form>
              {/* <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="user.fullname" />
                </Label>
                <Input type="name" defaultValue={name} />
              </FormGroup> */}

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="user.email" />
                </Label>
                <Input
                  type="email"
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="user.password" defaultValue={password} />
                </Label>
                <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>

              <div className="d-flex  justify-content-between align-items-center">
                <Button
                  color="primary"
                  className="btn-shadow w-100"
                  size="lg"
                  onClick={() => onUserRegister()}
                >
                  <IntlMessages id="Sign Up" />
                </Button>
              </div>
              <div className="mt-2 text-center">
                {/* <NavLink to="/user/forgot-password"> */}
                <IntlMessages id="Already have an account?" />
                {/* </NavLink> */}
              </div>
            </Form>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};
const mapStateToProps = () => {};

export default connect(mapStateToProps, {
  registerUserAction: registerUser,
})(Register);
