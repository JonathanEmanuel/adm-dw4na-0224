const app = Vue.createApp({
    data(){
        return {
            nombre: 'Rocio',
            edad: 21,
            lenguaje: 'images/js.png',
            logueado: false,
            lenguajes: ['PHP', 'HTML', 'JS', 'CSS']
        }
    },
    methods: {
        iniciar(){
            this.logueado = !this.logueado;
        }
    }
});

app.mount('#app');
