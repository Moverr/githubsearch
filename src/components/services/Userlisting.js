import React,{useEffect} from 'React';
import axios from 'axios';

const Userlisting = () =>{

    const url = "https://api.github.com/search/users";
    const Authorization = 'token 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';

   const fetchUsers = async () =>{
    const response = axios.get(`${url}`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': Authorization
        }
      })
      .catch((error) =>{
          console.log("Err",error)
      })
      
      ;
   }
}

export default Userlisting;