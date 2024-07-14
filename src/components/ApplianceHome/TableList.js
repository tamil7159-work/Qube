import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'antd';
import { useSelector } from 'react-redux';
import {tableColumns} from "../../utility/constant";

TableList.propTypes = {
    applianceList: PropTypes.array,
    rowCount: PropTypes.number,
    searchValue: PropTypes.string,
    paginationValue: PropTypes.number,
};
function TableList(props) {
    const applianceList = useSelector((state) => state.applianceList);
    const rowCount = useSelector((state) => state.rowCount);
    const searchValue = useSelector((state) => state.searchValue);
    const paginationValue = useSelector((state) => state.paginationValue);
    const [filteredData, setFilteredData] = useState(applianceList);
    useEffect(() => {
        const filtered = applianceList.filter((item) =>
            item.theatreName.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchValue]);

    useEffect(() => {
        setFilteredData(() => applianceList.slice((paginationValue-1)*10, paginationValue*10))
    }, [paginationValue]);
    return (
        <Table
            columns={tableColumns}
            dataSource={filteredData.slice(0,rowCount)}
            pagination={false}
        />
    );
}

export default TableList;