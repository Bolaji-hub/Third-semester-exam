<template>
  <header class="landing">
    <nav class="nav">
      <h2 class="logo">Counter App</h2>
      <ul>
        <li><router-link to="/">Home</router-link></li>
      </ul>
      <ul>
        <li><router-link to="/counter">Counter</router-link></li>
      </ul>
    </nav>

    <div class="container">
      <h1>Bonjour!</h1>
      <p>Welcome To My Third Semester Exam Project</p>
      <a href="https://github.com/Bolaji-hub"><button>Github</button></a>
    </div>
  </header>
</template>
<style scoped>
nav {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: azure;
}
.logo {
  color: red;
  margin-right: auto;
  cursor: pointer;
  font-weight: bolder;
  margin-left: 0cap;
}
.nav {
  padding-left: 10px;
  padding-right: 10px;
}
.container {
  padding-left: 10px;
  padding-right: 10px;
}
nav ul li {
  text-decoration: none;
  list-style-type: none;
}
ul li a {
  color: black;
  font-size: large;
  text-decoration: none;
}
p {
  padding: 100px 0px;
  margin: 10px;
  font-size: larger;
  font-weight: bold;
  align-items: center;
  position: relative;
}
h1 {
  position: absolute;
}
button {
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  cursor: pointer;
  border-color: aquamarine;
  background-color: whitesmoke;
  color: black;
}
</style>
