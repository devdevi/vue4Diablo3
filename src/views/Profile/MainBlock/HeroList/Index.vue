<template>
  <div>
    <h1>Heroes List</h1>
    <!--OJO: Las propiedades de tipo Boolean de un componente Vue, cuando estas pasando el valor true, las puedes usar de 2 formas:-->
    <!--  <b-table :items="heroes" :fields="fields" :dark="true" :hover="true" :small="true" :striped="true" stacked="sm"/> -->
    <div class="heroes-list border-top border-secondary mt-5 pt-5">
      <b-table hover striped dark :items="heroes" :fields="fields" stacked="sm" small>
        <template v-slot:cell(name)="data">
          <HeroIco :hero="data.item" />
        </template>
        <template v-slot:cell(class)="data">
          <HeroClassLevel :hero="{ class: data.item.class, level: data.item.level}"/>
        </template>
        <template v-slot:cell(kills)="data">
          <span>{{ data.item.kills.elites | formatNumber }}</span>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import HeroIco from './HeroIco'
import HeroClassLevel from './HeroClassLevel'
/* Filtros */
import { formatNumber } from '@/filters/numeral'

export default {
  name: 'HeroesLis',
  filters: {
    formatNumber
  },
  components: {
    HeroIco,
    HeroClassLevel
  },
  props: {
    heroes: {
      required: true,
      type: Array
    }
  },
  data: () => ({
    fields: [
      {
        key: 'name',
        label: 'Name'
      },
      {
        key: 'class',
        label: 'Class',
        sortable: true
      },
      {
        key: 'kills',
        label: 'Elite Kills',
        sortable: true
      }
    ]
  })
}
</script>
