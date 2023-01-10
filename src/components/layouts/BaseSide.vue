<template>
<!--  <el-container></el-container>-->

  <el-menu
    default-active="/"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    router="true"
  >
    <el-sub-menu index="">
      <template #title>
        <el-icon><location /></el-icon>
        <span>test2</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="/test">item one</el-menu-item>
        <el-menu-item index="/test2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="/test">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="/test2">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="/" @click="ToIndex">
      <el-icon><icon-menu /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="/test" @click="ToTest">
      <el-icon><document /></el-icon>
      <template #title>Test</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>设置</template>
    </el-menu-item>
  </el-menu>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
import {calendarProps} from "element-plus";

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<style scoped>
.el-menu-vertical-demo{
  /*height: 100%;*/
/*  高度铺满屏幕*/
  height: 92vh;
}


</style>

