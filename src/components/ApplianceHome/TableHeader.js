import React from 'react';
import { Input, Pagination, Select } from 'antd';
import filterSvg from '../../assets/filter.svg'
import searchSvg from '../../assets/search.svg'
import actions from "../../redux/action";
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';

TableHeader.propTypes = {
    rowCount: PropTypes.number,
}

function TableHeader(props) {
    const dispatch = useDispatch();
    const rowCount = useSelector((state) => state.rowCount);
    const handleCountSelection = (value) => {
       dispatch({
           type: actions.SET_ROW_COUNT,
           payload: value,
       });
    }
    const handleSearch = (event) => {
        dispatch({
            type: actions.SET_TABLE_SEARCH_VALUE,
            payload: event.target.value,
        });
    }
    const handlePageChange = (value) => {
        dispatch({
            type: actions.SET_TABLE_PAGINATION_VALUE,
            payload: value,
        });
    }
    return (
        <div className={'table-header'}>
            <div className={'left'}>
                <Input
                    placeholder={'Search'}
                    width={240}
                    className={'search.svg-input'}
                    suffix={<img src={searchSvg} alt="Search"/>}
                    onChange={handleSearch}
                />
                <div className={'filter'}>
                    <img src={filterSvg} alt="Filter" className={'type-icon'}/> Filter
                </div>
            </div>
            <div className={'right'}>
                <span>Show</span>
                <Select
                    value={rowCount}
                    placeholder={"Select count..."}
                    onChange={handleCountSelection}
                >
                    {Array.from({length: 10}, (_, i) =>(
                        <option key={i} value={i+1}>{i+1}</option>
                    ))}
                </Select>
                <Pagination onChange={handlePageChange} size={'small'} defaultCurrent={1} total={50} />
            </div>
        </div>
    );
}

export default TableHeader;