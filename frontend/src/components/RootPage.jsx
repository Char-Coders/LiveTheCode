import React from "react";
import Footer from "./Footer/Footer.jsx";
import Navbar from "./Navbar/Navbar.jsx";

export default function RootPage(props) {

    return (
        <>
            <Navbar/>
            {props.children}
        </>

    );
}