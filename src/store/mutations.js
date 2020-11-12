import {ADDCOUNT, ADDSTUDENT, DECREMENT, INCREMENT, UPDATEINFO} from "@/store/mutation-types";

export default {
    [INCREMENT](state) {
        state.count ++
    },
    [DECREMENT](state) {
        state.count --
    },
    [ADDCOUNT](state, payload) {
        console.log(payload)
        state.count = state.count + payload.count
    },
    [ADDSTUDENT](state, stu) {
        state.student.push(stu)
    },
    [UPDATEINFO](state){
        //1.同步操作
        state.info.age = 18
        // state.info['address'] = '陕西' //这种方式的添加不是响应式的
        // Vue.set(state.info, 'address', '陕西') // 这种方式的添加是响应式的
        // delete state.info.name //这种方式的删除不是响应式的
        // Vue.delete(state.info, 'name')  //这种方式的删除是响应式的
        //    2.异步操作时，界面数据发生了改变，但是deltools工具中没有记录(此时需要通过actions做异步操作)
        //     setTimeout(() => {
        //         state.info.age = 18
        //     }, 1000)
    }
}