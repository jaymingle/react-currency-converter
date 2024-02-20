import React, {useState, useEffect} from 'react';
import axios from "axios";

const UseAxios = (url) => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {

        const fetchData = async () => {

            try{
                setLoaded(true)
                const response = await axios(url)
                setData(response.data)
            }catch(e){
                setError(e)
            }finally{
                setLoaded(false)
            }

        }

        fetchData();

    }, [url])

    return  [data, error, loaded];

};

export default UseAxios;
