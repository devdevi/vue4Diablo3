# base

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
https://docs.npmjs.com/configuring-your-registry-settings-as-an-npm-enterprise-user
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Carpetas
/api: Archivos con las llamadas HTTP a las APIs. Importaremos axios y lo utilizaremos para obtener los datos del juego.
/assets: En esta carpeta tendremos archivos CSS globales e imágenes, es decir, contenido estático.
/componets: Aquí estarán los componentes reusables de nuestra aplicación. Piensa por ejemplo, en un componente loading que podrá ser usado varias veces a lo largo de la app.
/directives: Las directivas personalizadas que hagas estarán aquí. Ejemplos de directivas en vue son: v-if, v-for, etc. Cuando creemos una directiva personalizada, la alojaremos en esta carpeta.
/filters: Dentro de esta carpeta estarán los filtros que usaremos para darle formato a los datos de nuestra vista.
/layouts: Los layouts de nuestra app. Serán la estructura base sobre la que inyectaremos nuestras vistas. Suelen tener el header-bar y el footer común a toda la app.
/mixins: Los mixins (fragmentos de código reusable por nuestros componentes) los encuentras en esta carpeta.
/plugins: Esta carpeta puede llevar a confusión porque, realmente, lo que alojaremos aquí no son plugins que creemos para Vue, sino que tendremos librerías de terceros.
Por ejemplo Bootstrap-Vue, la librería de componentes que usaremos a lo largo del curso.
/router: Controlaremos las rutas de nuestra aplicación desde aquí.
/store: El estado de nuestra aplicación. Lo gestionaremos a través de Vuex.
/utils: Carpeta con funciones generales o que no tienen una temática definida. No es conveniente abusar de esto. Si tienes mucho contenido aquí quiere decir que deberías agrupar funcionalidades en otro directorio.
/views: Aquí estarán todas las vistas de nuestra aplicación. Hay que recordar que, en Vue, todo son componentes, y, en este caso, dichos componentes hacen de vistas de nuestra aplicación.

```
npm i --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/vue-fontawesome @fortawesome/free-brands-svg-icons
```

{
  path: '/about',
  name: 'About',
  component: () =>
    import(/* webpackChunkName: "about" */'../views/About/Index.vue')
},
😎 Truqui: si estás en MacOS, puedes pulsar la combinación de teclas Control + Cmd + Tecla Espacio para sacar un selector de emojis. 👇
/* ¿Eres usuario de Windows? Con la combinación Win + . puedes hacer lo mismo 😉 */
(test)[http://localhost:8080/#/region/kr/profile/오빠-3239)]