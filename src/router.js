import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ListHome from "./components/ApplianceHome/ListHome";
import InfoHome from "./components/ApplianceInfo/InfoHome";
import NotFound from "./components/NotFound";

function PublicRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/appliances'} /> } />
                <Route path={'/appliances'} element={<ListHome />} />
                <Route path={'/appliances/:serialNo'} element={<InfoHome />} />
                <Route path={'*'} element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default PublicRoutes;