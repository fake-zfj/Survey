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
      const loading = this.$loading({
        lock: true,
        text: '提交中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('./post.php', { name: this.form.name, id: this.form.ID }, { emulateJSON: true }).then(function (res) {
            loading.close();
            //alert('提交成功');
            tip.visible1=true;
            tip.visible2=false;
            //document.write(res.body);
          }, function (res) {
            loading.close();
            tip.visible1=false;
            tip.visible2=true;
            alert(res.status);
          });
        } else {
          loading.close();
          tip.visible1=false;
          tip.visible2=true;
          return false;
        }
      });
    }
  }
}
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')