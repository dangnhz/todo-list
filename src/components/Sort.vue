<template>
    <div class="col-sm-3">
            <b-dropdown id="sort" text="Sort" variant="danger">
                <b-dropdown-item @click="sortByNameAsc"><i class="fa fa-sort-alpha-asc" aria-hidden="true"></i> Name A-Z</b-dropdown-item>
                <b-dropdown-item @click="sortByNameDesc"><i class="fa fa-sort-alpha-desc" aria-hidden="true"></i> Name Z-A</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item @click="sortByStatusNotCompleted">Status: <span class="badge badge-pill badge-danger">Not Completed</span></b-dropdown-item>
                <b-dropdown-item @click="sortByStatusCompleted">Status: <span class="badge badge-pill badge-success">Completed</span></b-dropdown-item>
            </b-dropdown>
    </div>
</template>

<script>
export default {
    name:'Sort',
    data: function(){
        return {
            sortType:''
        }
    },
    methods: {
        sortByNameAsc: function (){
            this.sortType = 'nameAsc';
            this.$emit('sort-todo', this.sortType)
        },
        sortByNameDesc: function (){
            this.sortType = 'nameDesc';
            this.$emit('sort-todo', this.sortType)
        },
        sortByStatusNotCompleted: function (){
            this.sortType = 'statusNotCompleted';
            this.$emit('sort-todo', this.sortType)
        },
        sortByStatusCompleted: function (){
            this.sortType = 'statusCompleted';
            this.$emit('sort-todo', this.sortType)
        }
    }
}
</script>

<style scoped>
    .selected::after{
    content:'\f00c';
    font-family: FontAwesome;
    color: #59B198;
    display: inline;
    margin: 0px 0px 0px 5px;
}
</style>
