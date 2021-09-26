const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      username: '',
      confirmedName: '',
      fullName: '',
      lastName: 'Cinches',
    };
  },

  computed: {
    getrandom(){
      return Math.random();
    }
  },

  methods: {

    getRandom(){
      return Math.random();
    },

    resetInput(){
      this.confirmedName = '';
      this.name = '';
      this.username = '';
    },

    setFullname(){
      if(/\S/.test(this.username)){
        this.fullName = this.username + ' ' + this.lastName;
      }
      else{
        this.fullName = '';
      }
    },

    confirmName(){ 
      this.confirmedName = this.username + ' ' + this.lastName;
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
