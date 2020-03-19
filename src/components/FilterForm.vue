<template>
    <form class="col-sm-3 mb-3">
            <select id="filter" class="form-control" v-model="selected" v-on:change="onFilterChange">
                <option disabled value="">Filter</option>
                <option value="all" selected>All</option>
                <option value="notCompleted">Not Completed</option>
                <option value="completed">Completed</option>
            </select>
    </form>
</template>

<script>
export default {
    name:'FilterForm',
    data: function(){
        return {
            selected:''
        }
    },
    methods: {
        onFilterChange(){
            this.$store.dispatch('SET_FILTER',this.selected)
        }
    }
}
</script>

<style scoped>

</style>
