<template>
  <div class="bodyCard">
    <h1>Vue.draggable</h1>
    <el-link
      href="https://github.com/SortableJS/vue.draggable.next"
      target="_blank"
      type="primary"
      >vue.draggable.next</el-link
    >
    <el-card header="What is vue.draggable?" class="card">
      Vue.Draggable是一款基于
      <el-link
        href="https://github.com/SortableJS/Sortable"
        target="_blank"
        type="primary"
        >Sortable.js</el-link
      >
      实现的vue拖拽插件。支持移动设备、拖拽和选择文本、智能滚动，支持撤销操作.
    </el-card>
    <draggable
      :list="list"
      animation="300"
      @start="onStart"
      @end="onEnd"
      itemKey="sy1"
    >
      <template #item="{ element }">
        <div>
          <el-card class="dargcard"
            >{{ element.name }}:「{{ element.job }}」</el-card
          >
        </div>
      </template>
    </draggable>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import draggable from "vuedraggable";

const list = reactive([
  { name: "小张", id: 0, job: "司机" },
  { name: "张三", id: 1, job: "农场主" },
  { name: "老张", id: 2, job: "教师" },
]);

const onStart = () => {
  console.log("开始拖拽");
};

const onEnd = () => {
  // console.log("结束拖拽");
  console.table(list);
};
</script>
<style scoped lang="scss">
.bodyCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  .card {
    width: 80%;
    margin-top: 8px;
  }
  .dargcard {
    margin: 10px 0;
  }
}
</style>
