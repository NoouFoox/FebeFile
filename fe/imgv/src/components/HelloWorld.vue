<template>
  <div class="hello">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="Push.js" name="1">
        <Push />
      </el-collapse-item>
      <el-collapse-item title="DarkMode" name="2">
        <Dark />
      </el-collapse-item>
      <el-collapse-item title="Vue.draggable" name="3">
        <VueDraggable />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Dark from "./demo/DarkPage.vue";
import Push from "./demo/Push.vue";
import VueDraggable from "./demo/VueDraggable.vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: { Push, Dark, VueDraggable },
  setup() {
    const activeName = ref(0);
    return {
      activeName,
    };
  },
});
</script>

<style scoped lang="scss">
.hello {
  width: 70vw;
  margin: 10px auto;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
}
.hello :deep(.el-collapse-item__header) {
  padding-left: 20px;
}
</style>
