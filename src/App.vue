<template>
  <v-app id="app">
    <v-app-bar id="app-bar"
      color="#00232b"
      dark
    >    
      <div class="d-flex align-center">
        <v-btn text @click="redirect('/')">
          
          <v-img
            alt="Logo de Takas"
            class="shrink mr-2"
            src="@/assets/logo.png"
            transition="scale-transition"
            width="170"
          />

        </v-btn>
      </div>
      <v-spacer></v-spacer>
      
        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          color="#39FE14"
          class="black--text"
          rounded
        >
          <b class="mr-2">Accede a tu cuenta</b>
        </v-btn>      
      
    </v-app-bar>
    <v-app-bar
      height="30"
      color="#39FE14"
    >
    <v-spacer></v-spacer>
    <div>

      <v-btn text
        class="green-text-button"
        @click="redirect('/quienes_somos')"
      >
        <b>¿Quiénes somos?</b>
          
      </v-btn>
      <!--v-btn text
        
      >
        <b>¿Preguntas Frecuentes?</b>
      </v-btn-->
      <v-btn text
        @click="redirect('/contactanos')"
      >
        <b>Contáctanos</b>
      </v-btn>
      <v-btn text
        @click="redirect('/terminos_y_condiciones')"
      >
        <b>Términos y condiciones</b>
      </v-btn>
    </div>

    </v-app-bar>
    
    <v-main>
      <router-view/>
    </v-main>

    <v-footer
      id="footer"
      color="#00232b"
    >
      <div class="green-text tittle">
        <p class="pa-0 ma-0">Conoce nuestros</p>
        <v-btn text
        class="pa-0"
          @click="redirect('/terminos_y_condiciones')"
        >
          <b class="green-text ma-0">Términos y condiciones</b>
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <div class="green-text" align="right">
        <p class="tittle ma-0">Síguenos en nuestras redes</p>
        <SocialNetworks/>
      </div>
      
    </v-footer>
  </v-app>
</template>
<style>
  .green-text-2{
    color:#00232b
  }

  .green-text{
    color:#39FE14
  }

  #app{
    background:linear-gradient(#00232b,#003738)
  }

  .dark-background{
    background: #00232b;
  }

  .light-background{
    background: #39FE14;
  }

</style>
<script>
  import SocialNetworks from './components/SocialNetworks.vue';

  export default {
    name: 'App',
    components: {
      'SocialNetworks':SocialNetworks
    },
    methods:{
      redirect(route){
        this.$router.push(route);
      }
    },
  };
</script>
