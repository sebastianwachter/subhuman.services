<template>
  <div class="app">
    <header>
      <file-tab file-name="resume.js" />
    </header>
    <main>
      <prism-editor
        :code="resume"
        readonly
        lineNumbers
        language="js"
      />
    </main>
  </div>
</template>

<script>
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import PrismEditor from 'vue-prism-editor';
import FileTab from './components/file-tab.vue';
import resume from './views/resume';

export default {
  name: 'App',
  components: {
    PrismEditor,
    FileTab,
  },
  data() {
    return {
      resume,
    };
  },
};
</script>

<style scoped>
.app {
  background-color: #2d2d2d;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

header {
  display: flex;
}

main {
  padding: 0 15px 15px;
}
</style>
