import actions from "./action";

const initState = {
    applianceList: [],
    selectedApplianceInfo: {},
    listLoader: false,
    infoLoader: false,
    rowCount: 10,
    searchValue: '',
    paginationValue: 1,
};

const applianceReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.FETCH_APPLIANCE_LIST:
            return {
                ...state,
                listLoader: true,
            };
        case actions.FETCH_APPLIANCE_LIST_SUCCESS:
            return {
                ...state,
                applianceList: action.payload,
                listLoader: false,
            };
        case actions.FETCH_APPLIANCE_LIST_FAILED:
            return {
                ...state,
                listLoader: false,
            };
        case actions.FETCH_SELECTED_APPLIANCE_INFO:
            return {
                ...state,
                infoLoader: true,
            };
        case actions.FETCH_SELECTED_APPLIANCE_INFO_SUCCESS:
            return {
                ...state,
                selectedApplianceInfo: action.payload,
                infoLoader: false,
            };
        case actions.FETCH_SELECTED_APPLIANCE_INFO_FAILED:
            return {
                ...state,
                infoLoader: false,
            };
        case actions.SET_ROW_COUNT:
            return {
              ...state,
              rowCount: action.payload,
            };
        case actions.SET_TABLE_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload,
            };
        case actions.SET_TABLE_PAGINATION_VALUE:
            return {
                ...state,
                paginationValue: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
}

export default applianceReducer;