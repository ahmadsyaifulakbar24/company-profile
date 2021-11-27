import { createStore } from "redux"

const initialState = {
    image_url: './assets/images/'
}

const rootReducer = (state = initialState, action) => {
    return state
}

const store = createStore(rootReducer);