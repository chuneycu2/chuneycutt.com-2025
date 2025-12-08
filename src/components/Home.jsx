import React from 'react';
import Sidebar from "./Sidebar";
import Content from "./Content";

export default function Home() {
    return (
        <div className="container-main home row m-0">
            <Sidebar/>
            <Content/>
        </div>
    )
}