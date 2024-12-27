import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { auth } from 'helpers/Firebase';
import { adminRoot, currentUser } from 'constants/defaultValues';
import { setCurrentUser } from 'helpers/Utils';
// import axios from 'axios';
import axiosInstance from 'helpers/authApiCalls';
import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} from '../contants';

import {
  loginUserSuccess,
  loginUserError,
  registerUserSuccess,
  registerUserError,
  forgotPasswordSuccess,
  forgotPasswordError,
  resetPasswordSuccess,
  resetPasswordError,
} from './actions';

export function* watchLoginUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(LOGIN_USER, loginWithEmailPassword);
  console.log({currentUser});
  
}

// const loginWithEmailPasswordAsync = async (email, password) =>
//   // eslint-disable-next-line no-return-await
//   await auth
//     .signInWithEmailAndPassword(email, password)
//     .then((user) => user)
//     .catch((error) => error);

function* loginWithEmailPassword({ payload }) {
 
  console.log('loginWithEmailPassword -> email', payload);
  
  const { user, history } = payload;
  try {
    const response = yield call(axiosInstance.post, '/auth/login', user);
    const {orderId, token, user: userData } = response.data;

    // Store token in localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('orderId', orderId);

    yield put(loginUserSuccess(userData, token));

    // Redirect to dashboard or desired route
    history.push('/app/contacts/table');
  } catch (error) {
    const errorMsg = error.response?.data?.message || 'Login failed';
    yield put(loginUserError(errorMsg));
  }
}

export function* watchRegisterUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(REGISTER_USER, registerWithEmailPassword);
}

// const registerWithEmailPasswordAsync = async (email, password) =>
//   // eslint-disable-next-line no-return-await
//   await auth
//     .createUserWithEmailAndPassword(email, password)
//     .then((user) => user)
//     .catch((error) => error);

function* registerWithEmailPassword({ payload }) {
  const { user, history } = payload;
  try {
    const response = yield call(axiosInstance.post, '/auth/signup', user);
    const { message } = response.data;

    yield put(registerUserSuccess(message));

    // Optionally, redirect to login or dashboard
    history.push('/user/login');
  } catch (error) {
    const errorMsg = error.response?.data?.message || 'Registration failed';
    yield put(registerUserError(errorMsg));
  }
}

export function* watchLogoutUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(LOGOUT_USER, logout);
}

const logoutAsync = async (history) => {
  await auth
    .signOut()
    .then((user) => user)
    .catch((error) => error);
  history.push(adminRoot);
};

function* logout({ payload }) {
  const { history } = payload;
  setCurrentUser();
  yield call(logoutAsync, history);
}

export function* watchForgotPassword() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}

const forgotPasswordAsync = async (email) => {
  // eslint-disable-next-line no-return-await
  return await auth
    .sendPasswordResetEmail(email)
    .then((user) => user)
    .catch((error) => error);
};

function* forgotPassword({ payload }) {
  const { email } = payload.forgotUserMail;
  try {
    const forgotPasswordStatus = yield call(forgotPasswordAsync, email);
    if (!forgotPasswordStatus) {
      yield put(forgotPasswordSuccess('success'));
    } else {
      yield put(forgotPasswordError(forgotPasswordStatus.message));
    }
  } catch (error) {
    yield put(forgotPasswordError(error));
  }
}

export function* watchResetPassword() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(RESET_PASSWORD, resetPassword);
}

const resetPasswordAsync = async (resetPasswordCode, newPassword) => {
  // eslint-disable-next-line no-return-await
  return await auth
    .confirmPasswordReset(resetPasswordCode, newPassword)
    .then((user) => user)
    .catch((error) => error);
};

function* resetPassword({ payload }) {
  const { newPassword, resetPasswordCode } = payload;
  try {
    const resetPasswordStatus = yield call(
      resetPasswordAsync,
      resetPasswordCode,
      newPassword
    );
    if (!resetPasswordStatus) {
      yield put(resetPasswordSuccess('success'));
    } else {
      yield put(resetPasswordError(resetPasswordStatus.message));
    }
  } catch (error) {
    yield put(resetPasswordError(error));
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogoutUser),
    fork(watchRegisterUser),
    fork(watchForgotPassword),
    fork(watchResetPassword),
  ]);
}
