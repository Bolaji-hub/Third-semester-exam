<template>
  <header>
    <nav>
      <h2 class="logo">Counter App</h2>
      <ul>
        <li><router-link to="/">Home</router-link></li>
      </ul>
      <ul>
        <li><router-link to="/counter">Counter</router-link></li>
      </ul>
    </nav>
  </header>
  <div>
    <p>Welcome To My Third Semester Exam Project</p>
    <button>Github</button>
  </div>
</template>
<style scoped>
nav {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: space-around;
  padding-top: 8px;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;
  padding-left: 8%;
  padding-right: 8%;
  background-color: azure;
}
.logo {
  color: #646cff;
  cursor: pointer;
  font-weight: bolder;
  margin-left: 0cap;
}
nav ul li a {
  text-decoration: none;
  list-style-type: none;
  color: black;
}

p {
  padding: 50px;
  margin: 10px;
  font-size: larger;
  font-weight: bold;
  align-items: center;
  position: relative;
}
</style>
