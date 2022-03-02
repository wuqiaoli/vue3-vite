<script setup>
import { ref, computed } from "vue";
import { constantRouterMap } from "@/router/index.js";
import { useRoute } from "vue-router";
const defaultActive = computed(() => {
  const route = useRoute();
  if (route.path == "/home") {
    return "/";
  }
  return route.path;
});
const handelPath = (p, c) => {
  return `${p.path}/${c.path}`;
};

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<template>
  <el-scrollbar height="calc(100vh - 50px)">
    <el-menu
      :default-active="defaultActive"
      active-text-color="#ffd04b"
      @open="handleOpen"
      @close="handleClose"
    >
      <!-- 菜单项渲染 -->
      <template v-for="site in constantRouterMap" :key="site.path">
        <el-sub-menu
          :index="site.path"
          v-if="site.hasOwnProperty('children') && site.children.length > 1"
        >
          <template #title>
            <span>{{ site.name }} -- {{ site.path }}</span>
          </template>
          <router-link
            v-for="item in site.children"
            :to="handelPath(site, item)"
            :key="handelPath(site, item)"
          >
            <el-menu-item :index="handelPath(site, item)">
              {{ item.meta.name }}
            </el-menu-item>
          </router-link>
        </el-sub-menu>
        <router-link :to="site.path" v-else>
          <el-menu-item :index="site.path">
            {{ site.name }} -- {{ site.path }}
          </el-menu-item>
        </router-link>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<style lang="scss" scoped>
.menu {
  height: calc(100vh - 50px);
}
</style>
