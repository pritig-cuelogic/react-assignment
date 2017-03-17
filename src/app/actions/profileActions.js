import $ from "jquery";
import {DATA_RECEIVE} from '../constants/ActionTypes';

export function LoadImages() {
    return dispatch => {
        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {   
        tags: "apples",  
        tagmode: "any",           
        format: "json"       
        })
        .then(res => {
            console.log(res);
         dispatch({
             type: DATA_RECEIVE,
             payload: res.items
         })
      });
    }
}