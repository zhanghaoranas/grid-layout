<template>
    <section>
        <h3>grid布局指南</h3>
        <p>grid布局看了好几次了，但是看了都忘，主要是在项目中考虑到兼容性而不敢用，随着时间的流逝都忘了，趁着离职了，再次搞起来。</p>
        <p>css网格布局擅长将一个页面划分为几个主要区域，以及定义这些区域的大小、位置、层次等关系（前提是HTML生成了这些区域）。</p>
        <p>下面是参考教程：</p>
        <ul>
            <li>
                <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout#">网格布局</a>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
    import { defineComponent, onMounted } from 'vue';
    import BaseExample from './BaseExample.vue';
    export default defineComponent({
        components: {
            BaseExample,
        },
        setup() {
            onMounted(() => {
                console.log(BaseExample);
            });
        },
    });
</script>

<style></style>
