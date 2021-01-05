<template>
    <el-container>
        <el-header>写个自己的grid指南</el-header>
        <el-container>
            <el-aside width="200px">
                <aside-menu></aside-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import AsideMenu from '../src/components/AsideMenu.vue';
    export default defineComponent({
        name: 'App',
        components: {
            AsideMenu,
        },
    });
</script>
<style>
    .el-header {
        background-color: #b3c0d1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .el-container {
        height: calc(100vh - 60px);
    }
    .el-main {
        background-color: #e9eef3;
        color: #333;
    }
</style>
