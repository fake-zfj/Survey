var dz={
    data(){
        return {
            value:[],
            options:[
                {
                    value:'xiqu',
                    label:'西区',
                    children:[
                        {
                            value:'yiyuan',
                            label:'怡园',
                            children:[
                                {
                                    value:'21',
                                    label:'21栋'
                                },{
                                    value:'22',
                                    label:'22栋'
                                }
                            ]
                        },{
                            value:'huiyuan',
                            label:'慧园',
                            children:[
                                {
                                    value:'8',
                                    label:'8栋'
                                },{
                                    value:'9',
                                    label:'9栋'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
}
var Ctor=Vue.extend(dz);
new Ctor().$mount('#dz');