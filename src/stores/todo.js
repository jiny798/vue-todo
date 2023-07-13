import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// use~: 일반적인 네이밍 컨벤션
//defineStore('store이름'.store에서 관린될 상태,state,getter,actions)
export const useTodoStore = defineStore('todoStore', () => {
  //state - ref,recative와 같은 반응형 속성
  const todos = ref([
    {
      id: 1,
      title: '물 마시기',
      summary: '물을 마신다',
      category: 'todo'
    },
    {
      id: 2,
      title: '콜라 마시기',
      summary: '콜라를 마신다',
      category: 'progress'
    },
    {
      id: 3,
      title: '우유 마시기',
      summary: '우유를 마신다',
      category: 'done'
    }
  ])
  const selectedCategory = ref('all')

  //actions - state 값을 변경하는 함수
  // todo 추가 -addTodo
  const addTodo = (newTodo) => {
    newTodo.id = todos.value.length + 1

    todos.value.push(newTodo)
  }
  // todo 수정 - editTodo

  // todo 삭제 - deleteTodo
  const deleteTodo = (todoId) => {
    console.log('삭제')
    console.log(todoId)
    todos.value = todos.value.filter((todo) => {
      return todo.id !== todoId
    })
  }

  // todo 필터링 - filterTodo
  const filtertodo = (category) => {
    console.log('filter 호출' + category)
    selectedCategory.value = category
  }
  //getter(computted()와 동일)
  const filteredTpdpsByCategory = computed(() => {
    const currentCategory = selectedCategory.value
    if (currentCategory === 'all') return todos.value

    return todos.value.filter((todo) => todo.category === currentCategory)
  })
  //필터링된 todo 목록 -

  return {
    todos,
    addTodo,
    filtertodo,
    filteredTpdpsByCategory,
    deleteTodo
  }
})
