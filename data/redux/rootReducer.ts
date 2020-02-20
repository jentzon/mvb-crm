import { combineReducers } from 'redux';
import config from './config/configReducer';
import overview from './overview/overviewReducer';
import auth from './auth/authReducer';

export default combineReducers({ config, overview, auth });
