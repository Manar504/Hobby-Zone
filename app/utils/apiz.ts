
import { BASE_URL } from '../constants';
export const registerUser = async (userData: { username: string; phone: string; email: string; password: string }) => {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      
      },
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      throw new Error('Registration failed');
    }
    console.log(response.json);
    
    return response.json();
    // let response  =  await axios({
    //   method:"post" ,
    //   url : `${BASE_URL}/register`,
    //   headers : {
    //     "Accept": "application/json"
    //   },
    //   data : {
    //     "phone": "0121321546" ,
    //     "pssword": "88888888888888",
    //     "username":"ZZZ",
    //     "email": " KKK@gmail.com"
    //   },
    // });
 

    // let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // console.log(res.data);
    
    // console.log((await response).data);
  };