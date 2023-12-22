<template>
  <h1 class="title">Let's Get Connected!</h1>
  <div class="container">
    <a href="mailto:k.roshan21k@gmail.com">
      <div class="image">
        <img src="@/assets/contact/gmail.png" alt="" />
        <figcaption>Gmail</figcaption>
      </div>
    </a>
    <a href="https://github.com/roshan21k" target="_blank">
      <div class="image">
        <img src="@/assets/contact/github.png" alt="" />
        <figcaption>GitHub</figcaption>
      </div></a
    >
    <a
      href="https://www.instagram.com/roshan21k_/?igshid=MmlzYWVINDQ5Yg"
      target="_blank"
    >
      <div class="image">
        <img src="@/assets/contact/instagram.png" alt="" />
        <figcaption>Instagram</figcaption>
      </div></a
    >
    <a
      href="https://docs.google.com/document/d/1atxOcSH6XNjBRltdNt7o-IA2AXKpsmN9ycllUk1korw/edit?usp=sharing"
      target="_blank"
    >
      <div class="image">
        <img src="@/assets/contact/resume.png" alt="" />
        <figcaption>Resume</figcaption>
      </div></a
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  margin: 50px;
  text-align: center;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 60vh;
  gap: 50px;
  margin-bottom: 50px;
}
img {
  width: 200px;
  height: auto;
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
a {
  text-decoration: none;
  color: black;
}
</style>
