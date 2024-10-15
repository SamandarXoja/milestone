import axios from "axios";
import {useState, useEffect} from 'react';



const useFetch = (objective) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 
   

  const options = {
    method: 'GET',
    url: `http://localhost:8888/practice?category=${objective}&limit=1`
  }
  

  


}


export default useFetch