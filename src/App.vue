<template>
  <div class="main">
    <GlobalHeader :user="user"></GlobalHeader>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import { defineComponent, ref } from 'vue'
import ColumnList from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
const user: UserProps = {
  isLogin: true,
  name: 'Ding'
}
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup() {
    const testData = ref([
      {
        id: 1,
        title: 'test1专栏',
        description: '这是test1专栏',
        avatar:
          'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
      },
      {
        id: 2,
        title: 'test2专栏',
        description: '这是test2专栏',
        avatar:
          'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
      },
      {
        id: 3,
        title: 'test3专栏',
        description: '这是test3专栏'
      }
    ])
    return {
      list: testData,
      user
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  padding: 0 40px;
}
</style>
