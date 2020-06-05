<template>
  <div>
    <h1>Heroes List</h1>
   <b-table :items="heroes" :fields="fields" dark hover small striped stacked="sm"/>
   <!--OJO: Las propiedades de tipo Boolean de un componente Vue, cuando estas pasando el valor true, las puedes usar de 2 formas:-->
  <!--  <b-table :items="heroes" :fields="fields" :dark="true" :hover="true" :small="true" :striped="true" stacked="sm"/> -->
  </div>
</template>

<script>
export default {
  name: 'HeroesList',
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
