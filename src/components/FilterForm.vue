<template>
    <form class="col-sm-3 mb-3">
            <select id="filter" class="form-control" v-model="selected" v-on:change="$emit('on-filter-change', selected)">
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
    }
}
</script>

<style scoped>

</style>
