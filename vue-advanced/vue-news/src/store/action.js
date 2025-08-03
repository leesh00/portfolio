import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchcommentItem,fetchList } from '../api/index'


export default {
    // promise
    // FETCH_NEWS(context) {
    //     fetchNewsList()
    //         .then(response => {
    //             context.commit('SET_NEWS', response.data);
    //             return response;
    //         })
    //         .catch(error => console.log(error))
    // },
    // async
    async FETCH_NEWS(context) {
        try {
            const response = await fetchNewsList();
            context.commit('SET_NEWS', response.data);
            return response;
        } catch (error) {
            console.log(error)
        }

    },
    async FETCH_JOBS({ commit }) {
        try {
            const response = await fetchJobsList();
            commit('SET_JOBS', response.data)
            return response
        } catch (error) {
            console.log(error)
        }
    },
    async FETCH_ASKS({ commit }) {
            const response = await fetchAskList();
            commit('SET_ASKS', response.data);
            return response
    },
    async FETCH_USER({ commit }, name) {
        const response = fetchUserInfo(name)
        commit('SET_USER', data);
        return response;
    },
    async FETCH_ITEM({ commit }, id) {
        const response = await fetchcommentItem(id)
            commit('SET_ITEM', response.data);
            return response;
    },
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName)
        commit('SET_LIST', response.data)
        return response;
    }
}