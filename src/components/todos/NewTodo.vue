<template>
  <form @submit.prevent="addTodo" class="my-2">
    <p>
      <label class="block mb-2 text-xl text-white" htmlFor="title">Title</label>
      <input
        v-model="title"
        class="w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded"
        type="text"
        id="title"
      />
    </p>
    <p>
      <label class="block mb-2 text-xl text-white" htmlFor="summary">Summary</label>
      <textarea
        v-model="summary"
        class="w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded"
        id="summary"
        rows="5"
      />
    </p>
    <p>
      <label class="block mb-2 text-xl text-white" htmlFor="category">Category</label>
      <select
        class="w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded"
        id="category"
        defaultValue="moderate"
        v-model="category"
      >
        <option value="todo">📑 To do</option>
        <option value="progress">👀 On progress</option>
        <option value="done">😀 Done</option>
      </select>
    </p>
    <p v-if="isFormInvalid" class="mt-2 text-red-500">Please fill out all forms!</p>
    <p class="flex justify-end gap-4">
      <button class="text-xl text-white" type="button" @click="($event) => emit('close-modal')">
        Cancel
      </button>
      <button class="px-6 py-3 text-xl text-red-200" type="submit">Add</button>
    </p>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../../stores/todo'

const title = ref('')
const summary = ref('')
const category = ref('todo')

const emit = defineEmits(['close-modal', 'add-todo'])
const isFormInvalid = ref(false)

const todoStore = useTodoStore()

const addTodo = () => {
  //입력값 검사
  if (title.value.trim().length === 0 || summary.value.trim().length === 0) {
    console.log('DD')
    isFormInvalid.value = true
    return
  }
  //HomeView 가 가지고 있는 dummyTodos 배열에 새로운 Todo 객체 추가
  const newTodo = {
    //v-model 떄문에 value를 안넣으면 ref값이 들어감
    title: title.value,
    summary: summary.value,
    category: category.value
  }
  // emit('add-todo', newTodo) //상위 컴포넌트롤 전달할 이벤트명, 데이터
  todoStore.addTodo(newTodo)
  emit('close-modal')
}
</script>

<style lang="scss" scoped></style>
