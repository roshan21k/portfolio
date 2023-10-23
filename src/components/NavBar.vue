<template>
  <div style="height: 75px">
    <header>
      <h1>Roshan</h1>
      <nav>
        <ul>
          <router-link class="link" :to="{ name: 'home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'skill' }">Skills</router-link>
          <router-link class="link" :to="{ name: 'project' }"
            >Projects</router-link
          >
        </ul>
      </nav>
      <button @click="$router.push('/contact')">Contact</button>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
    };
  },
  emits: ["mobile-view"],
  methods: {
    checkIsMobile() {
      if (window.innerWidth <= 764) {
        this.isMobile = true;
        this.$emit("mobile-view", this.isMobile);
      } else {
        this.isMobile = false;
        this.$emit("mobile-view", this.isMobile);
      }
    },
  },
  created() {
    setInterval(() => {
      if (this.blink) {
        this.blink = false;
      } else {
        this.blink = true;
      }
    }, 500);
    this.checkIsMobile();
    window.addEventListener("resize", this.checkIsMobile);
  },
};
</script>

<style scoped>
header {
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 1;
  justify-content: space-around;
  align-items: center;
  height: 75px;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.75);
}
ul {
  display: flex;
  gap: 20px;
  list-style-type: none;
}
.link {
  text-decoration: none;
  color: black;
  transition: all 0.3s ease;
  font-size: 1.1rem;
}
button {
  height: 40px;
  width: 80px;
  border-radius: 30px;
  background-color: lightseagreen;
  border: none;
  cursor: pointer;
  color: white;
}
.link:hover {
  color: lightseagreen;
}
</style>
