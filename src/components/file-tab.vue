<template>
  <span class="file-tab">
    <img
      :src="require(`../assets/file-icons/${fileType}.svg`)"
      :alt="`${fileType} icon`"
    >
    <p>{{ fileName }}</p>
  </span>
</template>

<script>
export default {
  name: 'FileTab',
  props: {
    fileName: {
      type: String,
      default: '*.js',
    },
  },
  computed: {
    fileType() {
      const split = this.fileName.split('.');
      return split[split.length - 1];
    },
  },
};
</script>

<style scoped>
.file-tab {
  display: flex;
  padding: 10px 20px;
  min-width: 101px;
  border-bottom: 1px solid #3e7a70;
}

img {
  max-height: 20px;
  margin-right: 5px;
}
</style>
