const profileReducer = (state = {data: ""}, action) => {
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
