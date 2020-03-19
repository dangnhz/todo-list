<template>
    <div>
            <b-button v-b-modal.modal-1 class="btn-danger"><i class="fa fa-plus mr-2"></i>Add Todo</b-button>

            <b-modal id="modal-1" ok-title="Save" title="Add Todo" @ok="saveTodo">
                <div> 
                    <b-form-group>
                        <label label-for="todo-title">Task Name</label>
                        <b-form-input type="text" id="todo-title" required class="mt-1" v-model="title"></b-form-input>
                    </b-form-group>
                    
                </div>
            </b-modal>
    </div>
</template>

<script>
// import uuid from 'uuid';
export default {
    name: 'AddTodo',
    data: function(){
        return {
            title: ''
        }
    },
    methods: {
        saveTodo: function(){
            const newTodo = {
                title: this.title,
                completed: false
            };
                this.$store.dispatch("ADD_TODO", newTodo);
                this.title = '';
            
        }
    }
}
</script>

<style scoped>
</style>

