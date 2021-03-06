import { ORDER_CREATE_FAIL 
    , ORDER_CREATE_REQUEST 
    , ORDER_CREATE_SUCCESS 
    , ORDER_DETAILS_FAIL 
    , ORDER_DETAILS_SUCCESS 
    , ORDER_DETAILS_REQUEST, 
    ORDER_PAY_FAIL,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_REQUEST,
    ORDER_LIST_MY_REQUEST,
    ORDER_LIST_MY_SUCCESS,
    ORDER_LIST_MY_FAIL} from "../constants/orderConstants";
import axios from "axios";
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
       const {data} = await axios.post('/api/orders' , order , config);
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

 export const getOrderDetails =(id) => async(dispatch , getState) =>{
    try{
       dispatch({
           type: ORDER_DETAILS_REQUEST
       })
        const {userLogin : {userInfo}} = getState();
        console.log("user update profile requet");
        console.log(userInfo);
        
       const config={
           headers:{
               Authorization : `Bearer ${userInfo.token}`
           }
       }
       console.log("user token recived")
       console.log(userInfo.token)
       const {data} = await axios.get(`http://localhost:5000/api/orders/${id}` , config);
       dispatch({
           type: ORDER_DETAILS_SUCCESS,
           payload: data
       });
       
    }catch(error){
     dispatch({
         type: ORDER_DETAILS_FAIL,
         payload: error.response && error.response.data.message 
         ? error.response.data.message 
         : error.message
     })
 
    }
 }

 export const payOrder =(paymentResult , id) => async(dispatch , getState) =>{
    try{
       dispatch({
           type: ORDER_PAY_REQUEST
       })
        const {userLogin : {userInfo}} = getState();
        console.log("user update profile requet");
        console.log(userInfo);
        
       const config={
           headers:{
               'Content-Type':'application/json',
               Authorization : `Bearer ${userInfo.token}`
           }
       }
       console.log("user token recived")
       console.log(userInfo.token)
       const {data} = await axios.put(`/api/orders/${id}/pay` ,paymentResult, config);
       dispatch({
           type: ORDER_PAY_SUCCESS,
           payload: data
       });
       
    }catch(error){
     dispatch({
         type: ORDER_PAY_FAIL,
         payload: error.response && error.response.data.message 
         ? error.response.data.message 
         : error.message
     })
 
    }
 }

 export const listMyOrders = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_LIST_MY_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`http://localhost:5000/api/orders/myorders`, config);
      console.log(data);
  
      dispatch({
        type: ORDER_LIST_MY_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: ORDER_LIST_MY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }