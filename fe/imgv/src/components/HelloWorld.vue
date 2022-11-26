<template>
  <div class="hello">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="Push.js" name="1">
        <Push />
      </el-collapse-item>
      <el-collapse-item title="title2" name="2"> </el-collapse-item>
      <el-collapse-item title="title3" name="3"> </el-collapse-item>
      <el-collapse-item title="title4" name="4"> </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Push from "./demo/Push.vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: { Push },
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
