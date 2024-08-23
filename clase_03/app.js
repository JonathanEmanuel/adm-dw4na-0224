const app = Vue.createApp({
    data(){
        return{
            nombre: 'Marcelo',
            visible: true,
            frutas: ['🍏', '🍐', '🍇'],
        }
    }
});

app.mount('#main');