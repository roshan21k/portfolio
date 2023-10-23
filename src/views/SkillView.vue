<template>
  <div class="container">
    <div class="box">
      <h2>Front-End</h2>
      <div class="img">
        <div class="image">
          <img src="@/assets/skill/vuejs.png" alt="" />
          <figcaption>VueJS</figcaption>
        </div>

        <div class="image">
          <img src="@/assets/skill/html.png" alt="" />
          <figcaption>HTML</figcaption>
        </div>
        <div class="image">
          <img src="@/assets/skill/css.png" alt="" />
          <figcaption>CSS</figcaption>
        </div>
        <div class="image">
          <img src="@/assets/skill/js.png" alt="" />
          <figcaption>JS</figcaption>
        </div>
      </div>
    </div>
    <div class="box">
      <h2>Back-End</h2>
      <div class="img">
        <div class="image">
          <img src="@/assets/skill/nodejs.png" alt="" />
          <figcaption>NodeJS</figcaption>
        </div>

        <div class="image">
          <img src="@/assets/skill/flask.png" alt="" />
          <figcaption>Flask</figcaption>
        </div>
        <div class="image">
          <img src="@/assets/skill/celery.png" alt="" />
          <figcaption>Celery</figcaption>
        </div>
        <div class="image">
          <img src="@/assets/skill/express.png" alt="" />
          <figcaption>express</figcaption>
        </div>
      </div>
    </div>
    <div class="box">
      <h2>Database and Others</h2>
      <div class="img">
        <div class="image">
          <img src="@/assets/skill/sqlite.png" alt="" />
          <figcaption>SQLite</figcaption>
        </div>
        <div class="image">
          <img src="@/assets/skill/mongodb.png" alt="" />
          <figcaption>MongoDB</figcaption>
        </div>

        <div class="image">
          <img src="@/assets/skill/redis.png" alt="" />
          <figcaption>Redis</figcaption>
        </div>
        <div class="image">
          <img src="@/assets/skill/github.png" alt="" />
          <figcaption>GitHub</figcaption>
        </div>
      </div>
    </div>
  </div>

  =
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 100px;
  height: auto;
}
.container {
  display: flex;
  min-height: calc(100vh - 100px);
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.box {
  width: 400px;
  height: auto;
  margin: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 25px;
}
.img {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
.image {
  padding: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  transition: 0.3s ease-in-out;
}
figcaption {
  text-align: center;
}
.image:hover {
  background-color: rgb(200, 200, 200);
}
</style>
