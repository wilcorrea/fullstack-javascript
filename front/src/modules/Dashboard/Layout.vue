<template>
  <div class="app-layout DashboardLayout">
    <!-- a fancy menu to app -->
    <app-menu v-bind="{ links }" />
    <!-- the main layout container -->
    <div class="app-layout__container">
      <!-- breadcrumb handle with $route directly -->
      <app-breadcrumb />
      <!-- where the magic happens -->
      <router-view />
    </div>
  </div>
</template>

<script lang="js">
/**
 */
export default {
  /**
   */
  name: 'DashboardLayout',
  /**
   */
  data: () => ({
    links: [
      { path: '/dashboard', label: 'Início' },
      { path: '/dashboard/orders', label: 'Pedidos' },
      { path: '/dashboard/about', label: 'Sobre' }
    ]
  }),
  /**
   */
  mounted () {
    this.$root.mainLayout = window.document.querySelector('.app-layout.DashboardLayout')
  }
}
</script>
