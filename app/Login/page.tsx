import axios from "axios";
import LoginForm from "./form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";



const Login = async () => {
//   const handleLogin = async (e: React.FormEvent) => {
//   e.preventDefault();
//   // registerUser(formData);
//   // let response = await axios.post("https://hobby-zone.kirellos.com/api/V1/register",{
//   //   "phone": "0121321546" ,
//   //     "pssword": "88888888888888",
//   //     "username":"ZZZ",
//   //     "email": " KKK@gmail.com"
//   // } , );

//   // console.log(response.data);
  
//   let response  =  await axios({
//     method:"post" ,
//     url : `https://hobby-zone.kirellos.com/api/V1/login`,
//     headers : {
//       "Accept": "application/json",
      
      
//     },
//     withCredentials:false,
//       data :  JSON.stringify({
//         // "phone": "01213215461121" ,
//         "password": formData.password,
//         // "name":"ZZZ",
//         "email": formData.email 
//       }),
//   });
//   console.log(response.data);
// };









//   ///Google Handler Login 

 

//   const [user , setUser] = useState();

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     console.log(formData.email);
//   };

const session =  await getServerSession();
if (session) {
  redirect("/");
}
  return (
    
   <LoginForm/>
  );
};

export default Login;
