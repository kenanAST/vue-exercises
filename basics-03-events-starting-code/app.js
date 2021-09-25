const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      username: '',
    };
  },

  methods: {

    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName ;
    },
    
    add(num){
      this.counter += num;
    },

    subtract(num){
      this.counter -= num;
    }

  }

});

app.mount('#events');
