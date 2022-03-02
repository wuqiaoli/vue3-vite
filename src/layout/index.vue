<script setup>
import HeaderComponents from "./components/header.vue";
import AsideComponents from "./components/aside.vue";
import FooterComponents from "./components/footer.vue";
</script>

<template>
  <div>
    <el-container>
      <el-header height="50px"><HeaderComponents /></el-header>
      <el-container>
        <el-aside width="180px"><AsideComponents /></el-aside>
        <el-container>
          <el-main>
            <div class="wrap">
              <router-view></router-view>
            </div>
          </el-main>
          <el-footer height="50px"><FooterComponents /></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
}
.el-header {
  padding-left: 0;
}
.el-footer {
  text-align: center;
}

.el-aside {
  color: var(--el-text-color-primary);
  text-align: center;
  min-height: calc(100vh - 50px);
  background: #fff;
}

.el-main,
.el-footer {
  color: var(--el-text-color-primary);
  text-align: center;
}
.el-main {
  padding: 12px 12px 0;
}
body > .el-container {
  margin-bottom: 40px;
}
.wrap {
  background: #fff;
  height: 100%;
  width: 100%;
  min-width: 320px;
}
</style>
