<template>
    <v-container class="white--text">
        <v-row>
            <v-col cols="12" align="center">
                <h1 class="medium-title">Contáctanos</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="10" offset="1" md="5" offset-md="1">

                <v-row>
                    <v-col cols="12" align="center">
                        <p>Puedes contactarnos a través de:</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6" align="right">
                        <img width="40" src="@/assets/correo.png" class="mr-8">
                    </v-col>
                    <v-col cols="6" align="left">
                        olokutisas@gmail.com
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6" align="right">
                        <img width="40" src="@/assets/whatsapp.png" class="mr-8">
                    </v-col>
                    <v-col cols="6" align="left">
                        +57 (310) 442 6409
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6" align="right">
                        <img width="40" src="@/assets/location.png" class="mr-8">
                    </v-col>
                    <v-col cols="6" align="left">
                        Calle 93 no 13-32, Bogotá, Colombia
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="10" offset="1" md="5" offset-md="1" >
                <v-row>
                    <v-col cols="12">
                        <v-card>
                            <v-card-title class="justify-center">
                                ¿Quieres decirnos algo?
                            </v-card-title>
                            <v-card-text>
                                <center>
                                    <v-text-field
                                        v-model="pqrs.name"
                                        label="¿Cuál es tu nombre?"
                                        outlined
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="pqrs.email"
                                        label="Ingresa tu email"
                                        outlined
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="pqrs.message"
                                        label="¿Qué quisieras decirnos?"
                                        outlined
                                    ></v-text-field>
                                    <v-btn color="black" @click="sendPqrs()">
                                        <span class="white--text">Enviar</span>
                                    </v-btn>
                                </center>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    
                </v-row>
            </v-col>

        </v-row>
        
    </v-container>
</template>
<script>

export default {
    name:"contact-us",
    data: () => ({
        pqrs: {
            name: '', email: '', message: '', flagPQRs: 1
        }
    }),
    methods:{
        sendPqrs(){
            this.$axios.post(

                '/user/pqrsweb',

                this.pqrs

            ).then( (response) => {
                alert('Mensaje enviado satisfactoriamente')
                console.log('response',response);
            }).catch( (e) => {
                console.log(e.response)
            })
        }
    }
}
</script>
