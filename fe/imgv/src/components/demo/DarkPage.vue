<template>
  <div>
    <h1>Dark Mode</h1>
    <el-tag class="ml-2" type="info">暗黑模式(夜间模式)</el-tag>
    <br />
    <el-switch
      @change="flagDark"
      v-model="isDark"
      :active-icon="Moon"
      :inactive-icon="Sunny"
    />
    <br />
    <el-link
      href="https://element-plus.gitee.io/zh-CN/guide/dark-mode.html"
      target="_blank"
      type="primary"
      >elementplus 暗黑模式</el-link
    >
    <br />
    <el-link
      href="https://vueuse.org/core/usedark/"
      target="_blank"
      type="primary"
      >Vueuse 「useDark」 自动持久化实现
    </el-link>
    <el-card>
      <el-tag>elementplus</el-tag>
      使用暗色模式，只需在 html 上添加一个名为 dark 的类 。
      <el-divider />
      <el-tag>Vueuse</el-tag>&nbsp;
      <el-tag type="info">const isDark = useDark()</el-tag>
      修改 isDark 的 value 值. 「动态修改」
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { Moon, Sunny } from "@element-plus/icons-vue";
import { useDark } from "@vueuse/core";

const isDark = useDark();
const flagDark = () => isDark;
</script>

<style scoped lang="scss"></style>
