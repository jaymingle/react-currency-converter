import React, {useState, useEffect} from 'react';

const Axios = ({url}) => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {

        const fetchData = async () => {

            try{
                setLoaded(true)
            }catch(e){

            }finally{

            }

        }

    }, [url])

    return (
        <div>

        </div>
    );
};

export default Axios;
