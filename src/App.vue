<template>
  <v-app id="app">

    <div id="app-bar">
      <div id="logo" class="my-8">

        <v-btn text @click="redirect('/')">
                  
          <v-img
            alt="Logo de Takas"
            class="shrink mr-2"
            src="@/assets/logo.png"
            transition="scale-transition"
            width="340"
          />

        </v-btn>

      </div>
      
      <!--div id="buttons" class="d-none d-md-block">


          <span class="align-self-center">Descarga nuestra app</span>
              <v-btn x-small class="ma-0 pa-0" color="#39FE14" icon text><v-icon>mdi-google-play</v-icon></v-btn>
              <v-btn x-small class="ma-0 pa-0" color="#39FE14" icon text><v-icon>mdi-apple</v-icon></v-btn>


        <v-btn text @click="redirect('/')">
          <v-btn
            target="_blank"
            color="#39FE14"
            class="black--text"
            rounded
          >
            <b class="mr-2">Accede a tu cuenta</b>
          </v-btn>      

        </v-btn>

      </div-->

      <div id="menu-button" class="d-block d-md-none">
        <v-btn
        color="#39FE14"
        icon
        @click.stop="drawer = !drawer"
        >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      
      </div>

    </div>
    
    <div id="sub-bar" class="d-none d-md-block opaque-2-background">
      <div id="sub-bar-buttons">

        <v-btn text
          class="green-text-button"
          @click="redirect('/quienes_somos')"
        >
          <b class="green-text">¿Quiénes somos?</b>
            
        </v-btn>
        <v-btn text
          @click="redirect('/preguntas_frecuentes')"
        >
          <b class="green-text">FAQS</b>
        </v-btn>
        <v-btn text
          @click="redirect('/contactanos')"
        >
          <b class="green-text">Contáctanos</b>
        </v-btn>
        <v-btn text
          @click="redirect('/terminos_y_condiciones')"
        >
          <b class="green-text">Términos y condiciones</b>
        </v-btn>
        
        <v-btn text
          @click="redirect('/politicas_de_uso_de_datos')"
        >
          <b class="green-text">Políticas de uso de datos</b>
        </v-btn>

      </div>
    </div>
    
  <!--v-row class="pa-6 green-text">
    <v-col cols="4" class="align-self-center">
      <v-btn text @click="redirect('/')">
        
        <v-img
          alt="Logo de Takas"
          class="shrink mr-2"
          src="@/assets/logo.png"
          transition="scale-transition"
          width="170"
        />

      </v-btn>  
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="2" class="align-self-center d-none d-md-block">
      <v-row>
        <v-col class="pa-0" cols="12" align="center">
            <span class="align-self-center">Descarga nuestra app</span>
              <v-btn x-small class="ma-0 pa-0" color="#39FE14" icon text><v-icon>mdi-google-play</v-icon></v-btn>
              <v-btn x-small class="ma-0 pa-0" color="#39FE14" icon text><v-icon>mdi-apple</v-icon></v-btn>
            <br>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pa-0" align="center">

          <v-btn
            target="_blank"
            color="#39FE14"
            class="black--text"
            rounded
            x-small
          >
            <b class="mr-2">Accede a tu cuenta</b>
          </v-btn>      
        </v-col>
      </v-row>
      
    </v-col>
    
    <v-col cols="1" class="align-self-center d-block d-md-none">
      <v-btn
        color="#39FE14"
        icon
        @click.stop="drawer = !drawer"
        >
        <v-icon>mdi-menu</v-icon>
      </v-btn>

    </v-col>
  </v-row-->
  <!--v-row class="mb-1 light-background d-none d-md-flex">
    <v-col cols="12" align="right">
      
      <v-btn text
        class="green-text-button"
        @click="redirect('/quienes_somos')"
      >
        <b>¿Quiénes somos?</b>
          
      </v-btn>
      <v-btn text
        @click="redirect('/preguntas_frecuentes')"
      >
        <b>¿Preguntas Frecuentes?</b>
      </v-btn>
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
    </v-col>
  </v-row-->


    
    <v-main>
      <router-view/>
    </v-main>

    <v-footer
      padless
      id="footer"
      color="#00232b"
    >
    <v-card
      flat
      tile
      color="#00232b"
      width="100%"
    >
      <v-card-text>
        <v-row class="green-text">
          <v-col cols="12" md="6" align="center">
            <p>Siguenos en nuestras redes</p>
            <SocialNetworks class="ma-0"/>
          </v-col>
          <v-col cols="12" md="6">
            <v-row>
              <v-col cols="12" align="center">
                Copyright © 2022 LAP Services. Todos los derechos reservados.
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    </v-footer>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-content>
          
          <v-list-item><v-btn @click.stop="drawer = !drawer" text @click="redirect('quienes_somos')">¿Quienes somos?</v-btn></v-list-item>
          <v-list-item><v-btn @click.stop="drawer = !drawer" text @click="redirect('contactanos')">Contactanos</v-btn></v-list-item>
          <v-list-item><v-btn @click.stop="drawer = !drawer" text @click="redirect('terminos_y_condiciones')">Términos y condiciones</v-btn></v-list-item>
          <v-list-item><v-btn @click.stop="drawer = !drawer" text @click="redirect('politicas_de_uso_de_datos')">Políticas de uso de datos</v-btn></v-list-item>
          <v-list-item><v-btn @click.stop="drawer = !drawer" text @click="redirect('preguntas_frecuentes')">Preguntas frecuentes</v-btn></v-list-item>
          <v-list-item><v-btn @click.stop="drawer = !drawer" text>Accede a tu cuenta</v-btn></v-list-item>
          
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
    background:linear-gradient(#05171D,#00232B);
  }


  .super-dark-background{
    background:#05171D;
  }

  .dark-background{
    background: #00232b;
  }

  .opaque-background{
    background: #085454;
  }
  
  .opaque-2-background{
    background: #04343c;
  }


  .light-background{
    background: #39FE14;
  }
  .white-background{
    background: white;
  }

  
  #app-bar{
    
    padding-top:2%;
    padding-bottom:2%;
    color:#39FE14;

  }
  #buttons{

    float:right;

  }
  #logo{

    float:left;

  }
  
  #sub-bar-buttons{

    float:right;
  }
  
  #menu-button{
    float:right;
  }

  .paragraph{
    font-size: 22px;
  }

  .small-title{
    font-size: 40px;
  }

  .medium-title{
    font-size: 50px;
  }
  
  .big-title{
    font-size: 65px;
  }
  

</style>
<script>
  import SocialNetworks from './components/SocialNetworks.vue';

  export default {
    name: 'App',
    data(){
      return {
        drawer:false,
      }
    },
    components: {
      'SocialNetworks':SocialNetworks
    },
    mounted(){
      
    },
    methods:{
      redirect(route){
        this.$router.push(route);
      }
    },
  };
</script>