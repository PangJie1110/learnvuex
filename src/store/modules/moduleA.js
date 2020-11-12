export default {
    state:{
        name: 'zhangsan'
    },
    getters: {
        updateName(state, getter, rootState) {
            return state.name + rootState.count
        }
    },
    mutations: {
        MUpdateName(state, name) {
            state.name = name
        }
    },
    actions: {
        updateName(context, payload) {
            return new Promise((resolve) => {
                console.log(payload);
                context.commit('MUpdateName', 'qwe')
                resolve('data')
            })
        }
    }
}