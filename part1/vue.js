var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el:'#app-2',
    data:{
        message:'页面加载于 '+ new Date().toLocaleDateString()
    }
})

var app3 = new Vue({
    el:'#app-3',
    data:{
        seen:false
    }
})

var app4 = new Vue({
    el:"#app-4",
    data:{
        todos:[
            {text:'Learn JavaScript'},
            {text:'Learn Vue'},
            {text:'Program a projection'}
        ]
    }
})
app4.todos.push({text:'New projection'})

var app5 = new Vue({
    el:'#app-5',
    data:{
        message:'Hello Vue.js!'
    },
    methods:{
        reverseMessage:function () {
            this.message = this.message.split(' ').reverse().join(' ')
        }
    }
})

var app6 = new Vue({
    el:'#app-6',
    data:{
        message:'Hello Vue!'
    }
})

Vue.component('todo-item', {
    props:['todo'],
    template:'<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el:'#app-7',
    data:{
        groceryList:[
            {id:0, text:'Vegatable'},
            {id:1, text:'Cake'},
            {id:2, text:'Other'}
        ]
    }
})