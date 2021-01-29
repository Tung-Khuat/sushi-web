import { sushiEndpoints } from './endpoints';
import { sushiActionTypes } from './action-types';

const axios = require('axios');

export const _fetch = () => async (dispatch) => {
  const response = await axios.get(sushiEndpoints.fetchSushiList);
  return dispatch(
    {
      type: sushiActionTypes.FETCH_SUSHI_LIST,
      payload: response.data,
    },
  );
}

export const _create = ( newSushi ) => async (dispatch) => {
    const request = axios({
        method: 'post',
        url: sushiEndpoints.fetchSushiList,
        data: newSushi,
    });
    try {
        await request;
        const response = await axios.get(sushiEndpoints.fetchSushiList);
        return dispatch(
            {
                type: sushiActionTypes.FETCH_SUSHI_LIST,
                payload: response.data,
            },
        );
    } catch (error) {
        if (error.response && error.response.data) {
        console.log(error);
        window.alert(error.response.data.message);
        }
    }
}

export const _update = ( newSushi, id ) => async (dispatch) => {
    const request = axios({
        method: 'patch',
        url: sushiEndpoints.sushiById(id),
        data: newSushi,
    });
    try {
        await request;
        const response = await axios.get(sushiEndpoints.fetchSushiList);
        return dispatch(
            {
                type: sushiActionTypes.FETCH_SUSHI_LIST,
                payload: response.data,
            },
        );
    } catch (error) {
        if (error.response && error.response.data) {
        console.log(error);
        window.alert(error.response.data.message);
        }
    }
}

export const _delete = ( id ) => async (dispatch) => {
    const request = axios.delete(sushiEndpoints.sushiById(id))

    try {
        await request;
        const response = await axios.get(sushiEndpoints.fetchSushiList);
        return dispatch(
            {
                type: sushiActionTypes.FETCH_SUSHI_LIST,
                payload: response.data,
            },
        );
    } catch (error) {
        if (error.response && error.response.data) {
        console.log(error);
        window.alert(error.response.data.message);
        }
    }
}


