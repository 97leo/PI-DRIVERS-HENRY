import { GET_DIVERS} from './actions-types';
import axios from "axios";

export const getDrivers = () => {
    try {
        return async (dispatch) => {
        const {data} = await axios('http://localhost:3001/drivers');
        if(data && data.length > 0) return dispatch({
            type: GET_DIVERS,
            payload: data
        });
        };
    } catch (error) {
        console.log(error.message);
    }
   
}
