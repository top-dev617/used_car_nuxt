<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/cars">Used Cars</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <p>&copy; 2024 Used Cars and Calculator App</p>
    </footer>
  </div>
</template>

<script>
export default {
  // Any layout-specific logic can go here
}
</script>

<style>
/* Add global styles here */
html, body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

header {
  background: #333;
  color: white;
  padding: 1em;
}

header nav ul {
  list-style: none;
  padding: 0;
}

header nav ul li {
  display: inline;
  margin-right: 1em;
}

header nav ul li a {
  color: white;
  text-decoration: none;
}

main {
  padding: 1em;
}

footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 1em;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
