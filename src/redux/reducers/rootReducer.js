import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { tripReducer } from './tripReducer';
import { planReducer } from './planReducer';
import { tranReducer } from './tranReducer';
import { accomReducer } from './accomReducer';
import * as AuthActions from '../actions/authActions';
import * as TripActions from '../actions/tripActions';
import * as PlanActions from '../actions/planActions';
import * as TranActions from '../actions/tranActions';
import * as AccomActions from '../actions/accomActions';

const initialState = {
  user: {
    lastUpdated: null,
    isAuthenticated: false,
    isFetching: false,
    user: null
  },
  trips: {
    lastUpdated: null,
    isFetching: false,
    isSynced: false,
    trips: []
  },
  plans: {
    lastUpdated: null,
    isFetching: false,
    isSynced: false,
    plans: []
  },
  trans: {
    lastUpdated: null,
    isFetching: false,
    isSynced: false,
    trans: []
  },
  accoms: {
    lastUpdated: null,
    isFetching: false,
    isSynced: false,
    accoms: []
  }
};

export function masterReducer(state = initialState, action) {
  switch (action.type) {
    case AuthActions.SIGNUP_REQUEST:
    case AuthActions.SIGNUP_FAILURE:
    case AuthActions.SIGNUP_SUCCESS:
    case AuthActions.LOGIN_REQUEST:
    case AuthActions.LOGIN_FAILURE:
    case AuthActions.LOGIN_SUCCESS:
    case AuthActions.LOGOUT_REQUEST:
    case AuthActions.LOGOUT_FAILURE:
    case AuthActions.LOGOUT_SUCCESS:
    case AuthActions.GET_USER_INFO_REQUEST:
    case AuthActions.GET_USER_INFO_FAILURE:
    case AuthActions.GET_USER_INFO_SUCCESS:
      return {
        ...state,
        user: authReducer(state.user, action)
      };
    case TripActions.GET_TRIPS_FROM_DB_REQUEST:
    case TripActions.GET_TRIPS_FROM_DB_FAILURE:
    case TripActions.GET_TRIPS_FROM_DB_SUCCESS:
    case TripActions.ADD_TRIP_TO_DB_REQUEST:
    case TripActions.ADD_TRIP_TO_DB_FAILURE:
    case TripActions.ADD_TRIP_TO_DB_SUCCESS:
    case TripActions.ADD_TRIP_TO_STATE:
    case TripActions.UPDATE_TRIP_IN_DB_REQUEST:
    case TripActions.UPDATE_TRIP_IN_DB_FAILURE:
    case TripActions.UPDATE_TRIP_IN_DB_SUCCESS:
    case TripActions.DELETE_TRIP_IN_DB_REQUEST:
    case TripActions.DELETE_TRIP_IN_DB_FAILURE:
    case TripActions.DELETE_TRIP_IN_DB_SUCCESS:
    case TripActions.DELETE_TRIP_IN_STATE:
    case TripActions.GET_TRIP_INFO_FROM_DB_REQUEST:
    case TripActions.GET_TRIP_INFO_FROM_DB_FAILURE:
    case TripActions.GET_TRIP_INFO_FROM_DB_SUCCESS:
      return {
        ...state,
        trips: tripReducer(state.trips, action)
      };
    case PlanActions.GET_PLANS_FROM_DB_REQUEST:
    case PlanActions.GET_PLANS_FROM_DB_FAILURE:
    case PlanActions.GET_PLANS_FROM_DB_SUCCESS:
    case PlanActions.ADD_PLAN_TO_DB_REQUEST:
    case PlanActions.ADD_PLAN_TO_DB_FAILURE:
    case PlanActions.ADD_PLAN_TO_DB_SUCCESS:
    case PlanActions.ADD_PLAN_TO_STATE:
    case PlanActions.UPDATE_PLAN_IN_DB_REQUEST:
    case PlanActions.UPDATE_PLAN_IN_DB_FAILURE:
    case PlanActions.UPDATE_PLAN_IN_DB_SUCCESS:
    case PlanActions.DELETE_PLAN_IN_DB_REQUEST:
    case PlanActions.DELETE_PLAN_IN_DB_FAILURE:
    case PlanActions.DELETE_PLAN_IN_DB_SUCCESS:
    case PlanActions.DELETE_PLAN_IN_STATE:
    case PlanActions.GET_PLAN_INFO_FROM_DB_REQUEST:
    case PlanActions.GET_PLAN_INFO_FROM_DB_FAILURE:
    case PlanActions.GET_PLAN_INFO_FROM_DB_SUCCESS:
      return {
        ...state,
        plans: planReducer(state.plans, action)
      };
    case TranActions.GET_TRANS_FROM_DB_REQUEST:
    case TranActions.GET_TRANS_FROM_DB_FAILURE:
    case TranActions.GET_TRANS_FROM_DB_SUCCESS:
    case TranActions.ADD_TRAN_TO_DB_REQUEST:
    case TranActions.ADD_TRAN_TO_DB_FAILURE:
    case TranActions.ADD_TRAN_TO_DB_SUCCESS:
    case TranActions.ADD_TRAN_TO_STATE:
    case TranActions.UPDATE_TRAN_IN_DB_REQUEST:
    case TranActions.UPDATE_TRAN_IN_DB_FAILURE:
    case TranActions.UPDATE_TRAN_IN_DB_SUCCESS:
    case TranActions.DELETE_TRAN_IN_DB_REQUEST:
    case TranActions.DELETE_TRAN_IN_DB_FAILURE:
    case TranActions.DELETE_TRAN_IN_DB_SUCCESS:
    case TranActions.DELETE_TRAN_IN_STATE:
    case TranActions.GET_TRAN_INFO_FROM_DB_REQUEST:
    case TranActions.GET_TRAN_INFO_FROM_DB_FAILURE:
    case TranActions.GET_TRAN_INFO_FROM_DB_SUCCESS:
      return {
        ...state,
        trans: tranReducer(state.trans, action)
      };
    case AccomActions.GET_ACCOMS_FROM_DB_REQUEST:
    case AccomActions.GET_ACCOMS_FROM_DB_FAILURE:
    case AccomActions.GET_ACCOMS_FROM_DB_SUCCESS:
    case AccomActions.ADD_ACCOM_TO_DB_REQUEST:
    case AccomActions.ADD_ACCOM_TO_DB_FAILURE:
    case AccomActions.ADD_ACCOM_TO_DB_SUCCESS:
    case AccomActions.ADD_ACCOM_TO_STATE:
    case AccomActions.UPDATE_ACCOM_IN_DB_REQUEST:
    case AccomActions.UPDATE_ACCOM_IN_DB_FAILURE:
    case AccomActions.UPDATE_ACCOM_IN_DB_SUCCESS:
    case AccomActions.DELETE_ACCOM_IN_DB_REQUEST:
    case AccomActions.DELETE_ACCOM_IN_DB_FAILURE:
    case AccomActions.DELETE_ACCOM_IN_DB_SUCCESS:
    case AccomActions.DELETE_ACCOM_IN_STATE:
    case AccomActions.GET_ACCOM_INFO_FROM_DB_REQUEST:
    case AccomActions.GET_ACCOM_INFO_FROM_DB_FAILURE:
    case AccomActions.GET_ACCOM_INFO_FROM_DB_SUCCESS:
      return {
        ...state,
        accoms: accomReducer(state.accoms, action)
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  masterReducer
});

export default rootReducer;