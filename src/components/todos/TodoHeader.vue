<template>
  <div class="flex items-center justify-between mb-2" id="task-control">
    <button
      @click="openModal"
      class="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
      data-cy="add-todo-button"
    >
      Add Todo
    </button>
    <Teleport to="body">
      <DefaultModal :isModalOpen="isModalOpen" @close-modal="closeModal">
        <!--DefaultModal 안에 slot있음 #header로 모달안에 name 이름 매핑-->
        <template #header>
          <h3>New Todo</h3>
        </template>
        <template #body>
          <NewTodo @close-modal="closeModal" @add-todo="addTodo" />
          <!--하위컴포넌트 이벤트, 실행할 함수-->
        </template>
      </DefaultModal>
    </Teleport>

    <TodoFilter />
  </div>
</template>

<script setup>
import DefaultModal from '../DefaultModal.vue'
import TodoFilter from './TodoFilter.vue'
import NewTodo from './NewTodo.vue'
import { ref } from 'vue'

const isModalOpen = ref(false) // isMoodalOpen

const openModal = () => (isModalOpen.value = true)

const closeModal = () => (isModalOpen.value = false)

const addTodo = (todo) => emit('add-todo', todo)

const emit = defineEmits(['add-todo'])
</script>

<style lang="scss" scoped></style>
