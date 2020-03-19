<template>
  <div id="#app" class="container">
    <Header />
    <AddTodo/>
    <div class="row mt-3">
      <Search />
      <FilterForm />
      <Sort />
    </div>
    <Todos :todos="todos" v-if="todos.length"/>
    <p v-else class="text-center mt-5">You have nothing to do!</p>
  </div>
</template>

<script>

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Search from './components/Search';
import FilterForm from './components/FilterForm';
import Sort from './components/Sort';
import Todos from './components/Todos';
export default {
  name:'app',
  components:{
    Header, 
    AddTodo,
    Search,
    Sort,
    FilterForm,
    Todos
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos
    }
  },
  mounted () {
    this.$store.dispatch('FETCH_TODOS')
  },

}
</script>

<style scoped>

</style>

