// var data = {a:1}

// var vm = Vue({
//     data:data
// })

//Object.freeze(data) //组织修改现有的属性，系统无法再追踪变化
// vue的数据属性：在Vue被创建是，对象中的所有的数据加入到Vue的响应式系统中
var obj = {
    foo:'bar'
}

Object.freeze(obj)

new Vue({
    el: '#app',
    data: obj
})

var data = { a:1 }
var vm = new Vue({
    el:"#example",
    data:data,
    create:function(){
        console.log('a is: '+ this.a)
    }
})
// Vue实例还暴露了一些有用的实例属性与方法。它们都有前缀 $，以便与用户定义的属性区分开来
// vm.$data === data
// vm.$sel === document.getElementById('example')