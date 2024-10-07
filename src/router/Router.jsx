import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "../pages/Login";

const Router = () => {
    return (
        <Routes>
            <Route path="/login" index element={<Login />} />
            <Route path="/" element={<Navigate to="/Login" />} />
        </Routes>
    );
}

export default Router;
