<template>
  <div id="#app" class="container">
    <Header />
    <AddTodo v-on:saveTodo="saveTodo"/>
    <div class="row mt-3">
      <Search v-on:on-keyword-change="searchTodo"/>
      <FilterForm v-on:on-filter-change=" value => this.filterBy=value"/>
      <Sort v-on:sort-todo=" sortType => this.sortType = sortType "/>
    </div>
    <Todos v-if="todos.length>0" v-bind:todos="todoFilter" v-on:update-status="updateStatus" v-on:delete-todo-item="deleteTodo"/>
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
  data: function(){
    return {
      todos:[],
      searchKeyword: '',
      filterBy: '',
      sortType:''
    }
  },
  watch: {
    todos: function(){
      localStorage.setItem("todos", JSON.stringify(this.todos))
    }
  }
  ,
  mounted: function(){
    if (localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.getItem('todos'));
    }
    
  },
  updated: function() {
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  ,
  computed:{
    todoFilter: function(){
      let todos = this.todos;

      if (this.searchKeyword){
        todos = todos.filter(todo => todo.title.toLowerCase().includes(this.searchKeyword))
      }

      if (this.filterBy === 'notCompleted'){
        todos = todos.filter(todo => todo.completed === false)
      } else if (this.filterBy === 'completed'){
        return todos = todos.filter(todo => todo.completed === true)
      }

      if (this.sortType === 'nameAsc'){
         todos = todos.sort((a,b) => {
            if (a.title > b.title) return 1;
            else if ( a.title < b.title) return -1;
            else return 0
            });
      } else if (this.sortType === 'nameDesc') {
        return todos = todos.sort((a,b) => {
            if (a.title < b.title) return 1;
            else if ( a.title > b.title) return -1;
            else return 0
            });
      } else if (this.sortType === "statusNotCompleted") {
        return todos = todos.sort((a,b) => {
            if (a.completed > b.completed) return 1;
            else if ( a.completed < b.completed) return -1;
            else return 0
            });
      } else if (this.sortType === "statusCompleted") {
        return todos = todos.sort((a,b) => {
            if (a.completed < b.completed) return 1;
            else if ( a.completed > b.completed) return -1;
            else return 0
            });
      }


      return todos
    }
  }
  ,
  methods:{
    saveTodo: function(newTodo){
      this.todos = [...this.todos, newTodo];
    },
    updateStatus: function(id) {
      this.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
         this.$forceUpdate();
      })
    },
    deleteTodo: function(id){
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    searchTodo: function(keyword){
      this.searchKeyword = keyword.toLowerCase();
    }
  }
};


</script>

<style scoped>

</style>

