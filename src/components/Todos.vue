<template>
    <div class = "todo-table mt-5">
        <table class="table table-bordered">
            <thead>
                <tr class="text-center">
                    <th>#</th>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <TodoItem v-for="(todo, index) in todos" 
                :key="todo.id" 
                v-bind:todo="todo" 
                :index="index"
                v-on:update-status="$emit('update-status', todo.id)"
                v-on:delete-todo="$emit('delete-todo-item', todo.id)"/>
                
            </tbody>
        </table>
        
    </div>
</template>

<script>
import TodoItem from './TodoItem';
export default {
    name:'Todos',
    components: {
        TodoItem
    },
    props: ['todos']
}
</script>

<style scoped>
    
    
</style>

