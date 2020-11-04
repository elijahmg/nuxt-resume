<template>
  <div class="flex flex-col text-wrapper">
    <h1>Hi, my name is</h1>
    <h2 class="big-heading">Ilya Fakhrutdinov.</h2>
    <h3 class="big-heading leading-loose">
      Delivering your ideas <br />
      to the web.
    </h3>
    <p>
      I'm a software engineer based in Prague, Czech Republic. Seeking to work
      hard for things that are pushing further and to be surrounded by those who
      ready to share experience and knowledge.
    </p>
    <div>
      <a href="mailto:elijahmg25@gmail.com" class="button-green">
        Get In touch
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalMessage',
  data() {
    return {
      tName: '',
    };
  },
  mounted() {
    this.tName = 'fade';
  },
};
</script>

<style scoped lang="scss">
h1 {
  margin: 0 0 30px 4px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
  font-weight: 400;

  @media (max-width: 480px) {
    margin: 0 0 20px 2px;
  }
}

.button-green {
  margin-top: 30px;
  color: var(--green);
  border: var(--green) thin solid;
  padding: 20px;
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
  border-radius: var(--border-radius);

  &:hover {
    background: var(--green-tint);
  }
}

.text-wrapper {
  position: static;

  @media (min-width: 1024px) {
    position: absolute;
  }

  p {
    max-width: 500px;
  }
}

h3 {
  margin-top: 10px;
  color: var(--slate);
  line-height: 0.9;
}

.big-heading {
  margin-bottom: 1rem;
  font-size: clamp(40px, 8vw, 80px);
}
</style>
