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
        ID: undefined,
        dz: [],
        options: [
          {
            value: 'xiqu',
            label: '西区',
            children: [
              {
                value: 'huiyuan',
                label: '慧园',
                children: [
                  {
                    value: '01',
                    label: '1栋'
                  }, {
                    value: '02',
                    label: '2栋'
                  }, {
                    value: '03',
                    label: '3栋'
                  }, {
                    value: '04',
                    label: '4栋'
                  }, {
                    value: '05',
                    label: '5栋'
                  },
                ]
              },
              {
                value: 'boyuan',
                label: '博园',
                children: [
                  {
                    value: '06',
                    label: '6栋'
                  }, {
                    value: '07',
                    label: '7栋'
                  }, {
                    value: '08',
                    label: '8栋'
                  }, {
                    value: '09',
                    label: '9栋'
                  }, {
                    value: '10',
                    label: '10栋'
                  },
                ]
              },
              {
                value: 'yiyuan',
                label: '怡园',
                children: [
                  {
                    value: '21',
                    label: '21栋'
                  }, {
                    value: '22',
                    label: '22栋'
                  }
                ]
              }, {
                value: 'huiyuan',
                label: '慧园',
                children: [
                  {
                    value: '8',
                    label: '8栋'
                  }, {
                    value: '9',
                    label: '9栋'
                  }
                ]
              }
            ]
          }
        ]
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

    handleChange(value) {
      console.log(value);
    },

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
            tip.visible1 = true;
            tip.visible2 = false;
            //document.write(res.body);
          }, function (res) {
            loading.close();
            tip.visible1 = false;
            tip.visible2 = true;
            alert(res.status);
          });
        } else {
          loading.close();
          tip.visible1 = false;
          tip.visible2 = true;
          return false;
        }
      });
    }
  }
}
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')