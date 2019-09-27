<template>
  <h3
    class="subheading text-uppercase font-weight-medium mb-3"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </h3>
</template>

<script>
export default {
  name: 'BaseSubheading',
  inheritAttrs: false
}
</script>
