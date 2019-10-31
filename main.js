var Main = {
  data() {
    var check_id = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('学号不可以为空'));
      } else {
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value <= 100000000 || value >= 200000000) {
              callback(new Error('学号格式错误'));
            } else {
              callback();
            }
          }
        }, 1000);
      }
    }
    var check_name = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('姓名不可以为空'));
      } else {
        callback();
      }
    }


    return {
      form: {
        name: '',
        ID: undefined
      },
      rules: {
        name: [
          { validator: check_name, trigger: 'blur' }
        ],
        ID: [
          { validator: check_id, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          this.$http.post('./post.php', { name: this.form.name, id: this.form.ID }, { emulateJSON: true }).then(function (res) {
            document.write(res.body);
          }, function (res) {
            alert(res.status);
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')