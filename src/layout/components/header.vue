<script setup>
</script>

<template>
  <el-row class="row" justify="space-between">
    <!-- 左 -->
    <el-col class="flex_start" :span="12">
      <el-image src="/src/assets/appIcon.png" style="width: 50px; height: 50px">
        <template #error>
          <div class="image_slot">
            <el-icon size="50"><i-picture /></el-icon>
          </div>
        </template>
      </el-image>
      <div class="mobile">
        <el-link class="title" type="primary">商家管理平台</el-link>
      </div>
    </el-col>
    <!-- 右 -->
    <el-col class="flex_end" :span="12">
      <el-dropdown>
        <span class="el-dropdown-link">
          <span class="mobile">店铺名称</span>
          <el-icon class="el-icon--right">
            <i-arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
.row {
  height: inherit;
  overflow: hidden;
}
.image_slot {
  width: 40px;
  height: 40px;
}
.title {
  margin-left: 36px;
}
@media screen and (max-width: 360px) {
  .mobile {
    display: none;
  }
}
</style>
