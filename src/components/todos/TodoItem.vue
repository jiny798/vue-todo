<template>
  <li
    class="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-gray-700 rounded-md shadow-xl"
  >
    <div>
      <span class="text-lg font-medium text-gray-300">{{ category_icons[todo.category] }}</span>
      <div>
        <h2 data-test="title" class="mb-0 text-lg font-bold text-gray-100 uppercase">
          {{ todo.title }}
        </h2>
        <p class="mt-2 text-base text-gray-200">{{ todo.summary }}</p>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <button class="w-8 text-xl font-semibold cursor-pointer">✏️</button>
      <button
        @click="($event) => todoStore.deleteTodo(todo.id)"
        class="w-8 text-xl font-semibold text-red-300 cursor-pointer"
      >
        X
      </button>
    </div>
  </li>
</template>

<script setup>
import { useTodoStore } from '../../stores/todo.js'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const todoStore = useTodoStore()

defineProps({
  todo: {
    type: Object,
    default() {
      return {
        id: 1,
        category: '',
        title: '',
        summary: ''
      }
    }
  }
})

const category_icons = {
  todo: '📑',
  progress: '👀',
  done: '😀'
}
</script>

<style lang="scss" scoped></style>
