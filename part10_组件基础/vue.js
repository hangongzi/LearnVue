Vue.component('button-counter', {
    data:function(){
        return {
            count:0
        }
    },
    template:'<button @click="count++">You click me {{ count }} times.</button>'
})

Vue.component('blog-post', {
    props:['post'],
    template:"\
        <div class=\"blog-post\">\
            <h3>{{ post.title }}</h3>\
            <button @click=\"$emit('enlarge-text', 0.1)\">\
                Enlarge text\
            </button>\
            <div v-html=\"post.content\"></div>\
        </div>\
        "
})

Vue.component('custom-input', {
    props:['value'],
    template:"\
        <input\
            :value=\"value\"\
            @input=\"$emit('input', $event.target.value)\"\
        >\
    "
})

new Vue({el:'#components_demo'})

new Vue({
    el:'#blog-post-demo',
    data:{
        posts:[
            {id: 1, title:'My journey with Vue', content:'hello my journey'},
            {id: 2, title:'Blogging with Vue', content:'hello blogging'},
            {id: 3, title:'Why Vue is so fun', content:'hello so fun'}
        ]
    }
})

new Vue({
    el:'#blog-posts-events-demo',
    data:{
        posts:[
            {id: 1, title:'My journey with Vue', content:'hello my journey'},
            {id: 2, title:'Blogging with Vue', content:'hello blogging'},
            {id: 3, title:'Why Vue is so fun', content:'hello so fun'}
        ],
        postFontSize:1
    },
    methods:{
        onEnlargeText:function (enlargeAmount) {
            this.postFontSize += enlargeAmount
        }
    }
})