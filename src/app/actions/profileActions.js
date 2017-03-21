import fetch from 'isomorphic-fetch';
import { DATA_RECEIVE } from '../constants/ActionTypes';
import axios from "axios";

export function LoadImages() {
     return dispatch => {
        return fetch(`http://jsonplaceholder.typicode.com/albums/1/photos`,
          {
                method: 'GET'
          })
            .then(res => res.json())
            .then(json => dispatch({type: DATA_RECEIVE, payload: json}));
    }
}
