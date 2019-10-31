var Main = {
  data() {
    return {
      form: {
        name: '',
        ID: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      this.$http.post('./post.php', { name:this.form.name, id:this.form.ID }, { emulateJSON: true }).then(function (res) {
        document.write(res.body);
      }, function (res) {
        console.log(res.status);
      });
    }
  }
}
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')