import { call, put, takeLatest } from 'redux-saga/effects';
import actions from "./action";
import axios from "../axios.client";
import {errorResponse} from "../utility/helper";
import {message} from 'antd'
function* fetchApplianceList() {
    try {
        let response = yield call(() => axios.get('appliances'));
        yield put({
           type: actions.FETCH_APPLIANCE_LIST_SUCCESS,
           payload: response,
        });
        message.success('Fetch appliances Successfully');
    } catch (error) {
        errorResponse(error);
        yield put({
            type: actions.FETCH_APPLIANCE_LIST_FAILED,
        })
    }
}

function* fetchSelectedApplianceInfo(params) {
    try {
        const response = yield call(() => axios.get(`appliances/${params.serialNo}/info`));
        yield put({
           type: actions.FETCH_SELECTED_APPLIANCE_INFO_SUCCESS,
           payload: response[0],
        });
        message.success('Fetch appliance info Successfully');
    } catch (error) {
        errorResponse(error);
        yield put({
            type: actions.FETCH_SELECTED_APPLIANCE_INFO_FAILED,
        })
    }
}
export default function* rootSaga() {
    yield takeLatest(actions.FETCH_APPLIANCE_LIST, fetchApplianceList);
    yield takeLatest(actions.FETCH_SELECTED_APPLIANCE_INFO, fetchSelectedApplianceInfo);
}