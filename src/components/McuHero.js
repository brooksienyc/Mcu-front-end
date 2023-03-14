//READ A HERO

// going to use 'use params' and use 'useAxios' hooks to fetch data

import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';
import useAxios from "../hooks/useAxios";
import { API_URL } from "../constants";
import { Link } from 'react-router-dom';


function McuHero () {
    // using hook: useParams to 'get' data from the 'name'
    const { name } = useParams();

    //here we are setting up the hook: useAxios to fetch this data
    const [setUrl, data, loading, setLoading, error] = useAxios();

        //useEffect is a way to have a side-effect for a component - very specific for purpose
        useEffect(
            () => {
                setUrl(API_URL + "/oneCharacter/" + name);
                console.log("API URL is:" + API_URL + "/oneMcuCharacter/" + name);
                setLoading(true);
            },
            []
        );

    

    return (
        <>
            <h1>Hero: { name }</h1>

            {
                (!loading && data) ?
                    <>
                        <h2>Movie debut: {data.payload[0].debut}</h2>
                        <h3>Debut year: {data.payload[0].debutYear}</h3>

                    </>

                    :
                    <h1>Loading...</h1>

            }
        </>
    );
}

export default McuHero;


