import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';


const Random = ()=> {

    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false')

    // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

    
    async function fetchData(){
        setLoading(true);
        const url= `https://api.giphy.com/v1/gifs/random?api_key=uReq3Hu7kESMJ5C4PouTydaBPBLUHT1N&tag=&rating=g`
        const {data} = await axios.get(url);
        console.log(data)
        const imagesource = data.data.images.downsized_large.url;
        setGif(imagesource);
        setLoading(false);
    }
    useEffect( () => {
        fetchData();
    },[])
    function clickHandler(){
        fetchData()
    }

  return (
    <div className='w-1/2  bg-green-500  rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] '>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random Gif</h1>
        {
            loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
        }
        
        <button className='w-9/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]' onClick={clickHandler}>
            Generate
        </button>
    </div>
  )
}



export default Random