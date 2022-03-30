<template>
    <v-container>
          <v-expansion-panels>
            <v-expansion-panel
            v-for="(i,index) in items.length"
            :key="i"
            >
            <v-expansion-panel-header>
                <b>{{items[index].tittle}}</b>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <p align="jusfity">{{items[index].content}}</p>
            </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>

<script>

  export default{

    data(){
      return {
        items:[
          {tittle:'¿Qué es Takas?',content:'Es una plataforma donde se puede negociar con o sin dinero. Se basa en la conexión vía internet para realizar trueques de bienes y productos.'},
          {tittle:'¿Qué acciones puedo hacer en la app?',content:'De momento existe una unidad de negocio que puedes utilizar: El Takasteo (Trueque), en el que además de bienes, tambien puedes utilizar dinero si así lo prefieres.'},
          {tittle:'¿Es gratuito?',content:'La aplicación es gratuita, sin embargo, dentro de ella puede haber compras integradas. Además, con la membresía "Supreme" obtendrás beneficios que te ayudarán a concretar mejores negocios.'},
          {tittle:'¿Cómo puedo descargarlo?',content:'La aplicación podrá ser descargada desde PlayStore para Android (y próximamente para IOS). Asegurate de que sea la tienda oficial para mayor seguridad.'}
        ]
      }
    },



  }

</script>