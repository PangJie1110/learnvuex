export default {
    powerCount(state) {
        return state.count * state.count
    },
    more14stu(state){
        return state.student.filter(s => s.age > 14)
    },
    more14stuLength(state, getters){
        return getters.more14stu.length
    },
    moreAgeStu(state){
        return function (age) {
            return state.student.filter(s => s.age > age)
        }
    }
}