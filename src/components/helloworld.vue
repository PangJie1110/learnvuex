<template>
    <div>
        <h2>~~~~~~我是hello world组件~~~~~~~~</h2>

        <h2>pj的信息</h2>
        <span>{{$store.state.info}}</span>
        <p>{{$store.state.count}}</p>
        <h2>我是helloworld 我也要输出count的平方</h2>
        <span>{{$store.getters.powerCount}}</span>

        <h2>我helloworld也要输出年龄大于14岁的人员(通过vuex)</h2>
        <span>{{$store.getters.more14stu}}</span>

        <h2>我helloworld也要输出年龄大于age的人员 age自己传（vuex）</h2>
        <span>{{$store.getters.moreAgeStu(25)}}</span>
    </div>
</template>

<script>
    export default {
        name: "helloworld",
        //父子组件通信
        // props:{
        //     count: Number
        // }
    }
</script>

<style scoped>

</style>