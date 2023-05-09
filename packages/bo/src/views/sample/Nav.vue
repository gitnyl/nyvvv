<template>
  <div class="q-pa-md q-gutter-sm">
    <!--
    <q-breadcrumbs separator="---" class="text-orange" active-color="secondary">
      <q-breadcrumbs-el icon="home" />
      <q-breadcrumbs-el label="Component1" icon="widgets" />
      <q-breadcrumbs-el label="Component2" icon="navigation" />
    </q-breadcrumbs>
    -->
    <q-breadcrumbs class="text-orange" active-color="brown">
      <template v-slot:separator>
        <q-icon
            size="1.5em"
            name="chevron_right"
            color="brown"
        />
      </template>
      <q-breadcrumbs-el label="Home" icon="home" />
      <q-breadcrumbs-el label="Component1" icon="widgets" />
      <q-breadcrumbs-el label="Component2" icon="navigation" />
    </q-breadcrumbs>

  </div>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>

</style>