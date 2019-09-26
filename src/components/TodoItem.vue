<template>
        <tr>
            <td class="text-center" v-text="index + 1"></td>
            <td v-text="todo.title" v-bind:class="{'is-completed' : todo.completed}"></td>
            <td class="text-center">
                <span @click="updateStatus" class="badge badge-pill badge-danger todo-status" v-if="!todo.completed">Not Completed</span>
                <span @click="updateStatus" class="badge badge-pill badge-success todo-status" v-else>Completed</span>
            </td>
            <td class="text-center">
                <b-button type="button" class="btn-warning mr-3 mb-3" ><i class="fa fa-pencil" aria-hidden="true"></i> Edit</b-button>
                <b-button type="button" class="btn-danger mb-3" v-on:click="deleteTodo"><i class="fa fa-trash" aria-hidden="true"></i> Delete</b-button>
            </td>
        </tr>
</template>

<script>
export default {
    name:'TodoItem',
    props: ['todo','index'],
    methods: {
        updateStatus: function(){
            // this.todo.completed = !this.todo.completed;
            this.$emit("update-status", this.todo.id);
        },
        deleteTodo: function(){
            var x = confirm("Are you sure you want to delete?");
            if (x) {
                this.$emit("delete-todo", this.todo.id);
                return true;}
            else
                return false;
            
        }
    }
   
}
</script>

<style scoped>
    .todo-status {
        cursor: pointer;
    }
    .is-completed {
        text-decoration: line-through;
    }
</style>


