import {createStore} from "vuex";

const applicationStore = createStore({
    state () {
        return {
            title: 'app.name'
        }
    },
    mutations: {
        setTitle (state:any, title:String) {
            state.title = title;
        }
    }
});
export default applicationStore;