import { ORDER_CREATE_FAIL , ORDER_CREATE_REQUEST , ORDER_CREATE_SUCCESS } from "../constants/orderConstants";
export const createOrder =(order) => async(dispatch , getState) =>{
    try{
       dispatch({
           type: ORDER_CREATE_REQUEST
       })
        const {userLogin : {userInfo}} = getState();
        console.log("user update profile requet");
        console.log(userInfo);
        
       const config={
           headers:{
               'Content-Type': 'application/json',
               Authorization : `Bearer ${userInfo.token}`
           }
       }
       console.log("user token recived")
       console.log(userInfo.token)
       const {data} = await axios.post('/api/users/orders' , order , config);
       dispatch({
           type: ORDER_CREATE_SUCCESS,
           payload: data
       });
       
    }catch(error){
     dispatch({
         type: ORDER_CREATE_FAIL,
         payload: error.response && error.response.data.message 
         ? error.response.data.message 
         : error.message
     })
 
    }
 }