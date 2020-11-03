<template>
  <section>
    <div class="wrapper">
      <Card
        class="m-3"
        title="CN Group"
        date="2020 (May) - present"
        place="Prague, Czech Republic"
        position="Software engineer"
        :tags="['ReactJS', 'TypeScript', 'Apollo', 'NextJS', 'GraphQL', 'Jest']"
      >
        Creating big E-Commerce project. Creating components, maintaining old
        code. Refactoring. Researching and applying new technologies. Two week
        sprints. CI/CD.
      </Card>
      <Card
        class="m-3"
        title="Trusteca SE"
        date="2017 (Oct) - 2020 (April)"
        place="Prague, Czech Republic"
        position="Front-End developer"
        :tags="['ReactJS', 'REST', 'Material UI']"
      >
        Creating administrative application for financial business. Kanban.
      </Card>
      <Card
        class="m-3"
        title="Central Spot Trading"
        date="(2017, Jan - 2017, Oct)"
        place="Prague, Czech Republic"
        position="IT administrator"
        :tags="['Active Directory']"
      >
        Maintaining software and hardware in the office of 50+ workers.
      </Card>
      <Card
        class="m-3"
        title="AstanaMusicStudio"
        date="(2012 - 2016)"
        place="Astana, Kazakhstan"
        position="IT administrator"
      >
        Maintaining software and hardware in the office of 10+ workers.
      </Card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card';

export default {
  name: 'Experience',
  components: { Card },
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 4rem;
  }
}
</style>
