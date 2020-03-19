<template>
    <div class="input-group col-sm-6 mb-3">
        <input type="text" v-model="keyword" v-on:input="keywordChange" class="form-control" placeholder="Search" />
        <div class="input-group-append">
        <button class="btn btn-danger" type="button">
            <i class="fa fa-search"></i>
        </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Search',
    data: function(){
        return {
            keyword: ''
        }
    },
    methods: {
        keywordChange() {
            this.$store.dispatch('SEARCH_TODOS', this.keyword)
        }
    },
}
</script>

<style scoped>
    
</style>
