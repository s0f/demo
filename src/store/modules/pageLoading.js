/**
 * Created by ssf on 2017/5/18.
 */
const pageLoading = {
    state: {
        isLoading: false
    },
    mutations: {
        updateLoadingStatus (state, payload) {
            console.log(payload.isLoading);
            state.isLoading = payload.isLoading;
        }
    }
};

export default pageLoading;
