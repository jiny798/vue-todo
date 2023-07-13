<template>
  <DefaultLayout>
    <AppHeader />
    <AppSection @add-todo="addTodo" :todos="dataArr" />
    <!-- :하위컴포넌트에서 사용할 변수 = "상위컴포넌트에서 전달할 데이터 변수명"-->
  </DefaultLayout>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppSection from '../components/AppSection.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { ref } from 'vue'
import { useTodoStore } from '../stores/todo'
import { storeToRefs } from 'pinia'
//pinia의 store를 사용하려면 해당 store를 import
const todoStore = useTodoStore()
const { filteredTpdpsByCategory } = storeToRefs(todoStore)
const dataArr = filteredTpdpsByCategory

// const { todos } = todoStore
// 디스트럭처링할 경우 반응성 깨짐
// console.log(todos)
// const { todos } = storeToRefs(todoStore)
// console.log(todos)
// const dataArr = todos
// const dataArr = ref(todoStore.todos)

const addTodo = (todo) => {
  todo.id = num++
  console.log(todo)
  dataArr.value.push(todo)
  console.log(dataArr)
}
</script>

<style lang="scss" scoped></style>
