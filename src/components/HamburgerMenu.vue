<template>
  <div>
    <div style="height: 75px">
      <header>
        <h1>Roshan</h1>
        <button @click="isOpen = !isOpen" class="hamburger-button">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </button>
      </header>
    </div>
    <nav>
      <ul :class="{ open: isOpen, close: !isOpen }" @click="isOpen = !isOpen">
        <router-link class="link" :to="{ name: 'home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'skill' }">Skills</router-link>
        <router-link class="link" :to="{ name: 'project' }"
          >Projects</router-link
        >
        <router-link class="link" :to="{ name: 'contact' }"
          >Contact</router-link
        >
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
.bar {
  width: 30px;
  height: 3px;
  background: #000000;
  margin: 6px 0;
}
.open {
  transform: translateX(0%);
  transition: transform 0.5s ease-in-out;
}

.close {
  transform: translateX(-100%);
  transition: transform 0.5s ease-in-out;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  position: fixed;
  width: 100%;
  z-index: 1;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.75);
  height: 75px;
}
button {
  border: none;
  background-color: none;
  cursor: pointer;
}
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.399);
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.75);
  gap: 20px;
  z-index: 1;
}
.link {
  text-decoration: none;
  color: grey;
  line-height: 75px;
  transition: all 0.3s ease;
}
.link:hover {
  color: rgb(0, 0, 0);
  text-decoration: underline;
}
</style>
