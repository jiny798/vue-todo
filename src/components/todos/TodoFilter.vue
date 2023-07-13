<template>
  <select
    @change="($event) => todoStore.filtertodo(selectedCategory)"
    class="p-2 text-gray-100 bg-gray-800 rounded"
    data-cy="todo-filter"
  >
    <option value="all" selected>All</option>
    <option value="todo">📑 To do</option>
    <option value="progress">👀 On progress</option>
    <option value="done">😀 Done</option>
  </select>
</template>

<script setup>
import { useTodoStore } from '../../stores/todo'
import { ref } from 'vue'
const todoStore = useTodoStore()

const selectedCategory = ref('all')
</script>

<style lang="scss" scoped></style>
