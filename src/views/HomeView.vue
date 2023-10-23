<template>
  <div class="container">
    <div class="info">
      <span :class="{ 'hello-big': !isMobile, 'hello-small': isMobile }"
        >Hello! I'm Roshan</span
      >
      <span class="job"
        >A
        <span class="highlight"> Full Stack {{ text }} Developer </span>
        and <span class="highlight"> Data Analyst</span>...<span
          :class="{ hide: blink }"
          >|</span
        >
      </span>
    </div>
  </div>
  <img class="python" src="@/assets/python.png" alt="" />
  <img class="javascript" src="@/assets/javascript.png" alt="" />
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      blink: true,
      text: "</>",
      isMobile: false,
    };
  },
  methods: {
    checkIsMobile() {
      if (window.innerWidth <= 764) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
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
.container {
  height: calc(100vh - 75px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.hello-big {
  font-weight: bolder;
  font-size: 5rem;
  text-align: center;
}
.hello-small {
  font-weight: bolder;
  font-size: 2.5rem;
  text-align: center;
}
.job {
  text-align: center;
  font-size: 1.25rem;
}
.hide {
  opacity: 0;
}
.highlight {
  font-weight: bolder;
  color: lightseagreen;
}
img {
  height: 70px;
  width: 70px;
}
.python {
  position: absolute;
  top: 20%;
  left: 7%;
}
.javascript {
  position: absolute;
  bottom: 15%;
  right: 7%;
}
</style>
