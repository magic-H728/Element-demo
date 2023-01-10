<template>
    <el-container class="layout-container-demo" style="height: 92vh">
<!--  <el-container>-->
    <el-main>
      <el-scrollbar>
        <el-table :data="tableData">
          <el-table-column prop="date" label="Date" width="140"/>
          <el-table-column prop="name" label="Name" width="120"/>
          <el-table-column prop="address" label="Address"/>
        </el-table>
      </el-scrollbar>
    </el-main>
<!--  </el-container>-->
    </el-container>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {Menu as IconMenu, Message, Setting} from '@element-plus/icons-vue'

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({length: 20}).fill(item))
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
