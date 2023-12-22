<template>
  <div class="my-proj">
    <span>My Projects</span>
  </div>
  <div class="container">
    <div class="box" @click="redirectToURL('https://youtu.be/W4YQrcDyZTc')">
      <img src="@/assets/grocery-store.png" alt="Grocery Store Image" />
      <figcaption>Grocery Store V2</figcaption>
      <p>
        Multi-user grocery store web app, leveraging Flask and Vue CLI, backed
        by Redis and Celery. Shop collaboratively, manage orders, and stay
        updated in real-time
      </p>
      <span class="view-project">View Project </span>
    </div>
    <div
      class="box"
      @click="redirectToURL('https://roshan21k.github.io/mymovielist/')"
    >
      <img src="@/assets/mymovielist.png" alt="My Movie List Image" />
      <figcaption>My Movie List</figcaption>
      <p>
        Built React app with TMDb API for movie search, allowing users to add
        films to a watchlist. Streamlining movie discovery and watchlist
        management in a simple interface.
      </p>
      <span class="view-project">View Project </span>
    </div>
    <div
      class="box"
      @click="redirectToURL('https://todolist2-0-lqu8.onrender.com/')"
    >
      <img src="@/assets/todo list.png" alt="Todo List Image" />
      <figcaption>Todo List</figcaption>
      <p>
        A web-based to-do list application powered by Node.js and Express.js,
        designed to help users efficiently manage their tasks and stay
        organized.
      </p>
      <span class="view-project">View Project </span>
    </div>
    <div
      class="box"
      @click="redirectToURL('https://roshan21k.github.io/timer/')"
    >
      <img src="@/assets/timer.png" alt="Timer app Image" />
      <figcaption>Timer</figcaption>
      <p>
        A sleek timer app with beautiful design and plain JavaScript for
        efficient DOM manipulation. Stay organized and manage your time
        effectively.
      </p>
      <span class="view-project">View Project </span>
    </div>
    <div
      class="box"
      @click="redirectToURL('https://roshan21k.github.io/simon/')"
    >
      <img src="@/assets/simon.png" alt="Simon Game Image" />
      <figcaption>Simon</figcaption>
      <p>
        Enjoy the classic Simon Game, elevated with jQuery for interactive
        gameplay. Test memory, follow patterns, and level up in this engaging
        challenge.
      </p>
      <span class="view-project">View Project </span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToURL(url) {
      window.open(url, "_blank"); // Open the URL in a new tab
    },
  },
};
</script>

<style scoped>
.my-proj {
  font-size: 2rem;
  margin: 50px 0px;
  text-align: center;
}
.container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  min-height: 70vh;
  gap: 25px;
  margin: 25px 0px;
}
.box {
  width: 400px;
  height: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  margin: 25px;
}
.box:hover {
  background-color: rgb(200, 200, 200);
}
figcaption {
  margin: 10px;
  text-align: center;
}
p {
  padding: 10px;
}
.view-project {
  display: block;
  text-align: center;
  padding: 10px;
  text-decoration: none;
  color: blue;
}
.box img {
  max-width: 100%;
  height: auto;
}
</style>
