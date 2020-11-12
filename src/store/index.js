import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "@/store/mutations";
import getters from "@/store/getters";
import actions from "@/store/actions";
import moduleA from "@/store/modules/moduleA";
//1.安装插件
Vue.use(Vuex)
//2.创建对象
const state = {
    /***
     * vuex的响应式原理
     * 1.当变量在state中已经初始化了过了，那么修改的时候是响应式的
     * 2.如果没有初始化过 (添加&删除)
     *  2.1 info['address'] = '洛杉矶' 不是响应式的
     *  2.2 vue.set(info, 'address', '洛杉矶') 是响应式的  添加
     *  2.3 delete info.address 不是响应式的
     *  2.4 vue.delete(info.address)是响应式的
     */
    count : 1000,
    student: [
        {'name': 'pj', 'age': 18},
        {'name': 'kobe', 'age': 24},
        {'name': 'james', 'age': 34},
        {'name': 'ckul', 'age': 12},
    ],
    info: {
        'name': 'pj',
        'age': 27
    }
}
const store = new Vuex.Store({
    state,
    //利用mutation可以帮助devtools（chrome插件）记录state的修改信息 但是如果操作中有异步的操作没办法记录 此时异步的操作需要写在actions中
    mutations,
    //state中的数据有变化需要多个组件使用时
    getters,
    //异步操作写在这里，actions异步操作通过调用mutations才能使用devtools记录
    actions,
    modules: {
        a: moduleA
    }
})
//3.导出store对象
export default store