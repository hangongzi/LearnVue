new Vue({
    el:'#example-1',
    data:{
        message:'hi'
    }
})

new Vue({
    el:'#example-2',
    data:{
        checked:false
    }
})

new Vue({
    el:'#example-3',
    data:{
        checkedNames:[]
    }
})

new Vue({
    el:'#example-4',
    data:{
        picked:''
    }
})

new Vue({
    el:'#example-5',
    data:{
        selected:''
    }
})

new Vue({
    el:'#example-6',
    data:{
        selected:[]
    }
})

new Vue({
    el:'#dynamic-options',
    data:{
        selected:'A',
        options:[
            {text:'One', value:'A'},
            {text:'Two', value:'B'},
            {text:'Three', value:'C'}
        ]
    }
})