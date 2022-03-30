<template>
  <v-container fluid>
    <v-row class="opaque-background py-9">
      <v-col cols="12">
        <h1 align="center" class="white--text medium-title">¿Quiénes Somos?</h1>
      </v-col>
    </v-row>
    
    <v-row class="opaque-background pb-6">
      <v-col cols="12" md="6" align="center" class="align-self-center justify-center d-none d-md-flex">
        <center>
          <p class="ml-16 white--text paragraph">
            En <b>Takas</b> consideramos que <br>
            somos creadores de <b>tejido social</b>.<br>
            Mediante nuestra aplicación <br>
            vinculamos y facilitamos los <br>
            negocios de nuestra comunidad <br>
            para satisfacer sus necesidades.
          </p>
        </center>
      </v-col>
      <v-col cols="12" md="6" align="center" class="align-self-center d-md-none">
        <p class="white--text">En <b>Takas</b> consideramos que somos creadores de <b>tejido social</b>, mediante nuestra aplicación vinculamos y facilitamos los negocios de nuestra comunidad para satisfacer sus necesidades.</p>
      </v-col>
      
      <v-col cols="12" md="6" align="center" >
        <v-img
          src="@/assets/quienes_somos.png"
          width="500"
        >
        </v-img>
      </v-col>
    </v-row>

    <v-row class="super-dark-background py-13">
      <v-col cols="12" md="6" align="center">
        <v-img
          src="@/assets/nuestra_mision.png"
          height="370"
          width="400"
        >

        </v-img>
      </v-col>
      <v-col cols="12" md="6" class="align-self-center d-none d-md-block white--text">
        <h2 class="small-title">Nuestra Misión</h2>
        <p class="mr-16 mt-8 paragraph">
          Takas es una empresa que permite conectar <br>
          personas para facilitar el intercambio de <br>
          productos, especies y servicios, sin la <br>
          necesidad de utilizar el dinero, brindando <br>
          a toda la población una alternativa práctica <br>
          e innovadora de hacer negocios.
        </p>
      </v-col>
      <v-col cols="12" md="6" align="center" class="align-self-center d-md-none">
        <p class="white--text">
          Takas es una empresa que permite conectar
          personas para facilitar el intercambio de
          productos, especies y servicios, sin la
          necesidad de utilizar el dinero, brindando
          a toda la población una alternativa práctica
          e innovadora de hacer negocios.
        </p>
      </v-col>
      
    </v-row>

    <v-row class="white-background py-12">
      <v-col cols="12" md="6" align="right" class="align-self-center d-none d-md-block">
        <h2 class="small-title">Nuestra Visión</h2>
        <p class="ml-16 mt-6 paragraph">
          <b>
            Takas será para el 2025 una marca <br>
            posicionada en el mercado latinoamericano <br>
            como vanguardista en la facilitación de <br>
            negocios con cualquier tipo de inversión. <br>
            Además se caracterizará por conectar a las <br>
            personas con base en sus necesidades y <br>
            expectativas.
          </b>
        </p>
      </v-col>
      <v-col cols="12" md="6" align="center" class="align-self-center d-md-none">
        <p>Takas será para el 2025 una marca posicionada en el mercado latinoamericano como vanguardista en la facilitación de negocios con cualquier tipo de inversión. Además se caracterizará por conectar a las personas con base en sus necesidades y expectativas.</p>
      </v-col>
      
      <v-col cols="12" md="6" align="center">
        <v-img
          src="@/assets/nuestra_vision.png"
          width="350"
          height="280"
        >

        </v-img>
      </v-col>
    </v-row>
    <v-row class="dark-background">
      <v-col cols="12" align="center" class="white--text">
        <h1 class="big-title">Nuestros negocios y servicios</h1>
      </v-col>
    </v-row>
    <v-row class="super-dark-background py-12">
      <v-col cols="12" align="center" class="white--text">
        <h1 class="medium-title mb-8 green-text">Takasteo</h1>
      </v-col>
      <v-col cols="12" align="center" class="white--text">
        <v-row>

          <v-col cols="6" align="right" class="white--text pl-16 d-none d-md-block">
            <p class="paragraph">
              El takasteo es sinónimo de <b>trueque</b>.<br>
              Mediante este servicio podrás <br>
              intercambiar tus productos con la persona <br>
              que más lo necesite.
            </p>

          </v-col>
          <v-col cols="6" align="left" class="white--text  d-none d-md-block">
            <v-img
              width="150"
              class="ml-16"
              src="@/assets/takasteo.png"
            >

            </v-img>
          </v-col>
            <div class="d-block d-md-none">

              <v-col cols="12" align="center" class="white--text align-self-center">
                El takasteo es sinónimo de <b>trueque</b>
                mediante este servicio podrás intercambiar
                tus productos con la persona que
                más lo necesite.

              </v-col>
              <v-col md="12" align="center" class="white--text align-self-center">
                <v-img
                  width="150"
                  src="@/assets/takasteo.png"
                >

                </v-img>
              </v-col>
            </div>
            
        </v-row>
      </v-col>
      
    </v-row>
    <!--v-row>
      <v-col cols="12" align="center" class="white--text">
        <h1>Subastakasteo</h1>
      </v-col>
    </v-row>
    <v-row>
      <div class="d-block d-md-none">
        <v-col cols="12" align="center" class="white--text">
          El subastakasteo es la combinación perfecta
          entre <b>Subasta</b> y trueque,
          mediante este servicio podrás Subastar e
          intercambiar tus productos y/o servicios con
          la persona que más lo necesite o más esté
          dispuesto a pagar.
        </v-col>
        <v-col cols="12" align="center" class="white--text align-self-center">
          <v-img
            width="150"
            src="@/assets/subastakas.png"
          >
          </v-img>
        </v-col>
      </div>
      <div class="d-none d-md-flex">

        <v-col cols="6" align="right" class="white--text align-self-center pl-16">
          El subastakasteo es la combinación perfecta
          entre <b>Subasta</b> y trueque,
          mediante este servicio podrás Subastar e
          intercambiar tus productos y/o servicios con
          la persona que más lo necesite o más esté
          dispuesto a pagar.
        </v-col>
        <v-col cols="6" align="left" class="white--text align-self-center">
          <v-img
          width="150"
            class="ml-16"
            src="@/assets/subastakas.png"
          >

          </v-img>
        </v-col>
      </div>
    </v-row>
    <v-row class="dark-background">
      <v-col cols="12" align="center" class="white--text">
        <h1>Dinamitakas</h1>
      </v-col>
    </v-row>
    <v-row class="dark-background">

      <div class="d-block d-md-none">
        <v-col cols="12" align="center" class="white--text align-self-center">
          Dinamitakas es la tómbola virtual de Takas.
          Ésta herramienta te permitirá participar o
          realizar dinámicas virtuales con tus productos o
          servicios.

        </v-col>
        <v-col cols="12" align="center" class="white--text align-self-center">
          <v-img
            width="150"
            src="@/assets/takasorteo.png"
          >

          </v-img>
        </v-col>
      </div>
      <div class="d-none d-md-flex">
        
        <v-col cols="6" align="right" class="white--text align-self-center pl-16">
          Dinamitakas es la tómbola virtual de Takas.
          Ésta herramienta te permitirá participar o
          realizar dinámicas virtuales con tus productos o
          servicios.

        </v-col>
        <v-col cols="6" align="left" class="white--text align-self-center">
          <v-img
            width="150"
            class="ml-16"
            src="@/assets/takasorteo.png"
          >

          </v-img>
        </v-col>
      </div>
    </v-row-->
    <v-divider></v-divider>
  </v-container>
</template>