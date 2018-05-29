<template>
  <div>
    <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    <todo :key="todo" v-for="todo in todos" :todo="todo"></todo>
  </div>
</template>

<script type = "text/javascript" >
import Todo from '@/components/Todo'
export default {
  props: ['todos'],
  components: {
    Todo
  }
}
</script>
<style>
</style>