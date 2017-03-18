const profileReducer = (state = {data: ""}, action) => {
	console.log(action.payload);
    switch(action.type) {
        case "DATA_RECEIVE":
        state = {
                ...state,
                data: action.payload
            };
        break;
    }
   return state;
};
export default profileReducer;
