import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from "./TableHeader";
import TableList from "./TableList";
import {Skeleton} from "antd";
import {useSelector} from "react-redux";

Table.propTypes = {
    listLoader: PropTypes.bool,
};

function Table(props) {
    const listLoader = useSelector((state) => state.listLoader);
    return (
        <div className={'appliances-table'}>
            {listLoader ? (
                <Skeleton
                    active
                    title={false}
                    style={{padding: 24}}
                    paragraph={{ rows: 15, width: '100%' }}
                />
            ) : (
                <>
                    <TableHeader/>
                    <TableList />
                </>
            )}
        </div>
    );
}

export default Table;