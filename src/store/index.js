import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

const state = {
    todos: [],
    searchKeyword: '',
    filterBy: '',
    sortType: ''
}
const getters = {
    getTodos: (state) => {
        let todos = state.todos;
        //search todo by keyword
        if (state.searchKeyword) {
            todos = todos.filter(todo => todo.title.toLowerCase().includes(state.searchKeyword.toLowerCase()))
        }

        if (state.filterBy ==='notCompleted') {
            todos = todos.filter(todo => todo.completed===false)
        } else if (state.filterBy ==='completed') {
            todos = todos.filter(todo => todo.completed===true)
        }

        if (state.sortType === 'nameAsc'){
            todos = todos.sort((a,b) => {
               if (a.title > b.title) return 1;
               else if ( a.title < b.title) return -1;
               else return 0
               });
         } else if (state.sortType === 'nameDesc') {
           return todos = todos.sort((a,b) => {
               if (a.title < b.title) return 1;
               else if ( a.title > b.title) return -1;
               else return 0
               });
         } else if (state.sortType === "statusNotCompleted") {
           return todos = todos.sort((a,b) => {
               if (a.completed > b.completed) return 1;
               else if ( a.completed < b.completed) return -1;
               else return 0
               });
         } else if (state.sortType === "statusCompleted") {
           return todos = todos.sort((a,b) => {
               if (a.completed < b.completed) return 1;
               else if ( a.completed > b.completed) return -1;
               else return 0
               });
         }


        return todos
    }

}
const mutations = {
    setTodos: (state, todos) => {
        state.todos = todos;
    },
    addTodo: (state, newTodo) => {
        state.todos = [...state.todos, newTodo]
    },
    deleteTodo: (state, id) => {
        state.todos = state.todos.filter(todo => todo.id != id)
    },
    updateStatus: (state, id) => {
        state.todos.forEach(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
        })
    }
    ,
    setKeyword: (state, keyword) => {
        state.searchKeyword = keyword;
    },
    setFilter: (state, value) => {
        state.filterBy = value
    },
    setSortType: (state, value) => {
        state.sortType = value
    }

}

const actions = {
    async FETCH_TODOS(context) {
        let {data} = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        context.commit('setTodos', data)
    },
    async ADD_TODO (context, newTodo) {
        let {data} = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
        context.commit('addTodo', data)
    },
    async DELETE_TODO ({commit}, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('deleteTodo', id)
    }
    ,
    async UPDATE_STATUS ({commit}, id) {
        commit('updateStatus', id)
    }
    ,
     SEARCH_TODOS({commit}, keyword) {
        commit('setKeyword', keyword)
    },
    SET_FILTER (context, value) {
        context.commit('setFilter', value)
    },

    SET_SORT_TYPE ({commit}, value){
        commit('setSortType', value)
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})