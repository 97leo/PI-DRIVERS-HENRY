import { GET_DIVERS,GET_TEAMS,GET_BY_ID} from './actions-types';
import axios from "axios";

export const getDrivers = () => {
    try {
        return async (dispatch) => {
        const {data} = await axios('http://localhost:3001/drivers');
        if(data && data.length > 0){
           return  dispatch({
                type: GET_DIVERS,
                payload: data
            });
        } 
        };
    } catch (error) {
        console.log(error.message);
    }
};

export const getTeams = () => {
    try {
        return async (dispatch) => {
            const {data} = await axios('http://localhost:3001/teams');
            if(data && data.length > 0){
                return  dispatch({
                     type: GET_TEAMS,
                     payload: data
                 });
             } 
        }
    } catch (error) {
        console.log(error.message);
    }
    };

    export const getDriverId = (id) => {
        try {
            return async (dispatch) => {
                const {data} = await axios(`http://localhost:3001/teams/${id}`);
                if(data && data.nombre){
                    return  dispatch({
                         type: GET_BY_ID,
                         payload: data
                     });
                 } 
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    

    