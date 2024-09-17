<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { leftMenuItem } from './menuItem'
import { RouterLink, RouterView } from 'vue-router'
const activeIndex = ref('1')
const inputText = ref('')
const handleSelect = (key: string, keyPath: string[]) => {
  if (key !== '6') {
    console.log(key, keyPath)
  }
}
const search = () => {
  console.log(inputText.value)
}
</script>

<template>
  <div>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-menu-item index="0">
          <img
            style="width: 100px"
            src="https://element-plus.org/images/element-plus-logo.svg"
            alt="Element logo"
          />
        </el-menu-item>
        <el-menu-item v-for="item in leftMenuItem" :index="item.index" :key="item.index">
          {{ item.name }}
        </el-menu-item>
        <el-menu-item index="6" id="search">
          <el-input
            v-model="inputText"
            style="width: 600px"
            placeholder="Please input"
            class="input-with-select"
          >
            <template #append>
              <el-button :icon="Search" @click="search"></el-button>
            </template>
          </el-input>
        </el-menu-item>
        <el-menu-item index="7">
          <el-button type="primary"> 登录 </el-button>
        </el-menu-item>
        <el-menu-item index="8">
          <div>
            <el-icon :size="20"><Message /></el-icon>
            <span>消息</span>
          </div>
        </el-menu-item>
        <el-menu-item index="9">
          <el-icon><HelpFilled /></el-icon>
          <span>消息</span>
        </el-menu-item>
        <el-menu-item index="10">
          <el-icon><Star /></el-icon>
          <span>收藏</span>
        </el-menu-item>
        <el-menu-item index="11">
          <el-icon><Clock /></el-icon>
          <span>历史</span>
        </el-menu-item>
        <el-menu-item index="12">
          <el-button type="danger">
            <el-icon><Upload /></el-icon>
            <span>投稿</span>
          </el-button>
        </el-menu-item>
      </el-menu>
    </el-header>
  </div>
</template>
<style>
.el-menu--horizontal > .el-menu-item:nth-child(7) {
  margin-right: auto;
}
#search {
  margin-left: auto;
}
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
.el-menu--horizontal > .el-menu-item:nth-child(7).is-active {
  border-bottom: none;
}
.el-menu--horizontal > .el-menu-item:nth-child(7) {
  border-bottom: none;
}
.input-with-select {
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
