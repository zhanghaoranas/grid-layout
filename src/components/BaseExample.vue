<template>
    <div class="wrapper">sadf</div>
</template>

<script lang="ts">
    import { defineComponent, onMounted } from 'vue';
    import HtmlShow from './layout/HtmlShow.vue';
    export default defineComponent({
        components: {
            HtmlShow,
        },
        setup() {
            onMounted(() => {
                console.log(HtmlShow);
            });
        },
    });
</script>

<style lang="less" scoped>
    .wrapper {
        display: grid;
    }
</style>
