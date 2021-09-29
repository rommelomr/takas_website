<template>
  <v-container fluid>
    <!--v-row>
      <v-col
      class="pa-6 align-self-center"
        cols="12"
        md="8"
        align="center"
      >
        <v-row>

          <p class="green-text display-1 mt-5 pa-5">¡Síguenos en nuestras redes para estar enterado de promociones, actualizaciones y concursos a través de nuestra app!</p>
        </v-row>
        <v-row>
              <v-col class="d-flex justify-center">
                <v-img
                  src="@/assets/twitter.png"
                  width="70"
                  class="shrink mr-2"
                >
                </v-img>
                <v-img
                  src="@/assets/facebook.png"
                  width="70"
                  class="shrink mr-2"
                >
                </v-img>
                <v-img
                  src="@/assets/instagram.png"
                  width="70"
                  class="shrink mr-2"
                >
                </v-img>
                <v-img
                  src="@/assets/youtube.png"
                  width="70"
                  class="shrink mr-2"
                >
                </v-img>
              </v-col>
          
        </v-row>

      </v-col>
      <v-col
        cols="12"
        md="4"
        align="center"
      >
        <v-img
        src="@/assets/telefono.png"
        >
        </v-img>
      </v-col>
      
    </v-row-->
    <v-row>
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>  
</template>
<style>

  

</style>
<script>

  export default {
    name: 'Home',
    data(){
      return {
        items:[{

          src: require('../assets/carrousel_1.jpg'),
        },
        {
          src: require('../assets/carrousel_2.jpg'),
        }        
        ]
      }
    }
  }
</script>
