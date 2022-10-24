import React from "react";
import ReactDOM from 'react-dom/client';
import {Helmet} from "react-helmet";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Helmet>
            <title>Hello World</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content="Instagram Clone"/>
        </Helmet>
        <App/>
    </React.StrictMode>
)