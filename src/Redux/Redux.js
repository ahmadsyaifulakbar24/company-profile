import { createStore } from "redux"

const initialState = {
    image_url: '/assets/images/',
    asset_url: '/assets/'
}

const rootReducer = (state = initialState, action) => {
    return state
}

const store = createStore(rootReducer);

export default store;