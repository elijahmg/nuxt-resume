<template>
  <section>
    <div class="m-6 px-24 lg-wrapper">
      <ul class="flex w-full links justify-center">
        <li>
          <button
            :class="{ 'highlight-border': content === 'current' }"
            @click="content = 'current'"
          >
            Current stack
          </button>
        </li>
        <li>
          <button
            :class="{ 'highlight-border': content === 'love' }"
            @click="content = 'love'"
          >
            Favorite techs
          </button>
        </li>
        <li>
          <button
            :class="{ 'highlight-border': content === 'tried' }"
            @click="content = 'tried'"
          >
            Techs I've tried
          </button>
        </li>
      </ul>
    </div>
    <div class="w-full flex justify-center lg-wrapper">
      <div class="card-wrapper mx-2 content">
        <ul v-show="content === 'current'">
          <li><img src="@/assets/react.png" width="100" height="100" /></li>
          <li><img src="@/assets/nextjs.png" width="150" height="150" /></li>
          <li><img src="@/assets/apollo.png" width="250" height="250" /></li>
          <li><img src="@/assets/graphql.png" width="100" height="100" /></li>
          <li>
            <img src="@/assets/typescript.png" width="100" height="100" />
          </li>
        </ul>
        <ul v-show="content === 'love'">
          <li><img src="@/assets/vue.png" width="100" height="100" /></li>
          <li><img src="@/assets/nuxtjs.png" width="100" height="100" /></li>
          <li><img src="@/assets/kotlin.png" width="125" height="125" /></li>
          <li><img src="@/assets/elixir.png" width="210" height="210" /></li>
        </ul>
        <ul v-show="content === 'tried'">
          <li><img src="@/assets/java.png" width="90" height="100" /></li>
          <li><img src="@/assets/nodejs.png" width="100" height="100" /></li>
          <li><img src="@/assets/python.png" width="100" height="100" /></li>
        </ul>
      </div>
    </div>
    <div class="sm-wrapper">
      <div class="tech-card">
        <h1>Current stack</h1>
        <ul>
          <li>TypeScript</li>
          <li>ReactJS</li>
          <li>GraphQL</li>
          <li>Apollo Client</li>
          <li>NextJS</li>
        </ul>
      </div>
      <div class="tech-card">
        <h1>Favorite techs</h1>
        <ul>
          <li>Vue</li>
          <li>NuxtJS</li>
          <li>Kotlin</li>
          <li>Elixir</li>
        </ul>
      </div>
      <div class="tech-card">
        <h1>Techs I've tried</h1>
        <ul>
          <li>Java</li>
          <li>NodeJS</li>
          <li>Python</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'tech',
  data() {
    return {
      content: 'current',
    };
  },
};
</script>

<style scoped lang="scss">
.links li button {
  padding: 1rem 3rem;
  font-family: var(--font-mono);
  font-size: var(--fz-xl);
  border-bottom: 1px var(--green-tint) solid;

  &:hover {
    color: var(--green);
    background: var(--green-tint);
  }
}

.highlight-border {
  border-bottom: 2px var(--green) solid !important;
  background: var(--green-tint);
  color: var(--green);
}

.card-wrapper {
  display: flex;
  justify-content: center;
}

.content ul {
  display: flex;
  /*grid-template-columns: repeat(2, minmax(140px, 200px));*/
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;

  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: var(--font-mono);
    font-size: var(--fz-lg);
  }
}

img {
  background: var(--white);
  padding: 10px;
  border-radius: var(--border-radius);
}

.lg-wrapper {
  display: none;

  @media (min-width: 766px) {
    display: block;
  }
}

.sm-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6rem 0 0;

  @media (min-width: 766px) {
    display: none;
  }
}

.tech-card {
  margin-top: 3rem;
  text-align: center;

  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
    }
  }
}

h1 {
  font-size: var(--fz-lg);
  font-family: var(--font-mono);
}

@media (min-width: 766px) {
  .lg-wrapper {
    display: block;
  }

  .sm-wrapper {
    display: none;
  }
}
</style>
