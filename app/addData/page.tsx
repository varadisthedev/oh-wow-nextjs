"use client";

import axios from 'axios';
import { useEffect, useState } from "react";
export default function page() {
    // using axios to post data to /api/addData


    try {
        const response = await axios.post('/api/users', formData);
        console.log('Response:', response.data);

    }
    catch (error) {
        console.log("error in posting data to /api/addData", error.message);
    }
    return (
        <>
            <h1>this is to add data via the POST route to mongo</h1>


        </>
    )
}
