const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      username: '',
      confirmedName: 'asd',
    };
  },

  methods: {

    confirmName(){ 
      this.confirmedName = this.username;
    },

    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName ;
    },

    submitButton(){
      alert("Submitted");
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
