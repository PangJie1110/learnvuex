<template>
  <div id="app">
    <h2>~~~~~我是App组件~~~~~</h2>

    <h2>使用modules中的state</h2>
    <span>{{$store.state.a.name}}</span>
    <h2>使用getter</h2>
    <span>{{$store.getters.updateName}}</span>
    <h2>使用mutation</h2>
    <button @click="updateName('pj')">修改name</button>
    <h2>pj的信息</h2>

    <h2>使用module中的actions</h2>
    <button @click="asycnUpdateName">异步修改name</button>

    <div><span>{{$store.state.info}}</span></div>
    <button @click="updateInfo">修改信息</button>
    <h2>{{$store.state.count}}</h2>
    <h2>我要输出counter的平方 {{$store.getters.powerCount}}</h2>
    <button @click="addition">+</button>
    <button @click="subs">-</button>
    <h2>mutation传递参数（单个）</h2>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <h2>mutation传递参数多个</h2>
    <button @click="addStudent">添加一个学生</button>

    <h2>我要输出年龄大于14岁的人员(利用vue的computed的属性)</h2>
    <span>{{more14stu}}</span>

    <h2>我要输出年龄大于14岁的人员（利用vuex的getter属性）</h2>
    <span>{{$store.getters.more14stu}}</span>

    <h2>我要输出年龄大于14岁的长度（vuex）</h2>
    <span>{{$store.getters.more14stuLength}}</span>
    <h2>我要输出年龄大于age岁的人员，age我自己传给vuex的getter</h2>
    <span>{{$store.getters.moreAgeStu(25)}}</span>

    <helloworld/>
<!--    父子组件通信-->
<!--    <helloworld :count="count"></helloworld>-->

  </div>
</template>

<script>
  import helloworld from "@/components/helloworld";
  import {INCREMENT,DECREMENT, ADDSTUDENT, ADDCOUNT, AUPDATEINFO} from './store/mutation-types'
  export default {
    name: 'App',
    //父子组件通信
    components: {
      helloworld
    },
    data() {
      return {
        count: 0
      }
    },
    computed:{
      more14stu(){
        return this.$store.state.student.filter((s) => {
          return s.age > 14
        })
      }
    },
    methods: {
      updateName(name) {
        this.$store.commit('MUpdateName', name)
      },
      addition() {
        this.$store.commit(INCREMENT)
      },
      subs() {
        this.$store.commit(DECREMENT)
      },
      addCount(count) {
        //1.mutation的普通提交风格
        // this.$store.commit('addCount', count)
      //  2.mutation的特殊提交风格
        this.$store.commit({
          type: ADDCOUNT,
          count
        })
      },
      addStudent() {
        this.$store.commit(ADDSTUDENT, {'name':'alen', 'age': 38})
      },
      updateInfo() {
        //1.通过mutation的commit对数据进行修改 但是如果有异步操作就需要使用action
        // this.$store.commit(UPDATEINFO)
        /***
         * 2.异步操作就需要使用action的dispatch
         * 2.1 对于异步操作我们需要知道什么时候处理完 需要一个回调函数可以在参数传入回调函数
         */
        // this.$store.dispatch(AUPDATEINFO, {
        //   message: '我是传递进来的参数',
        //   success(){
        //     console.log('我是传进来的success函数，处理完了的回调函数')
        //   }
        // })
        /***
         * 2.2 但是有更加优雅的处理方式，使用promise
         */
        this.$store.dispatch(AUPDATEINFO, '我是传进去的参数')
                .then((data) => {
                  console.log(data);
                })
      },
      asycnUpdateName() {
        this.$store.dispatch('updateName', '我是传进去的参数').then((data) => {
          console.log(data)
        })
      }
    }
  }
</script>

<style>

</style>
