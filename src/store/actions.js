import {AUPDATEINFO, UPDATEINFO} from './mutation-types'
export default {
    // context 上下文
    /***
     * 1.使用普通的回调函数
     */
    // [AUPDATEINFO](context, payload){
    //     setTimeout(() => {
    //         context.commit(UPDATEINFO)
    //         console.log(payload.message);
    //         payload.success()
    //     }, 1000)
    // }
    /***
     * 2.使用promise 使得代码更加的优雅,使用peomise用来封装异步操作
     */
    [AUPDATEINFO](context, payload){
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(payload);
                context.commit(UPDATEINFO)
                resolve('我处理完了，可以进行回调了')
            })
        })
    }
}