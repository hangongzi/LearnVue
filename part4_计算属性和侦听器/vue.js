var vm = new Vue({
    el:'#example',
    data:{
        message:'Hello'
    },
    // 计算属性,基于他们的响应式依赖进行缓存
    computed:{
        reversedMessage:function () {
            return this.message.split('').reverse().join('')
        },
        now:function (params) {
            return Date.now()
        }
    },
    // 定义为方法
    methods:{
            reversedMessage:function (params) {
                return this.message.split('').reverse().join('')
            }
    }
})

var vm1 = new Vue({
    el:'#demo',
    data:{
        firstName:'Foo',
        lastName:'Bar',
    },
    // watch:{
    //     firstName:function (val) {
    //         this.fullName = val+' '+this.lastName
    //     },
    //     lastName:function (val) {
    //         this.fullName = this.firstName+' '+val
    //     }
    // },
    computed:{
        fullName:{
            // getter
            get:function (params) {
                return this.firstName+' '+this.lastName
            },
            // setter
            set:function (newName) {
                var names = newName.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length-1]
            }
        }
        
    }
})

var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
      // 如果 `question` 发生改变，这个函数就会运行
      question: function (newQuestion, oldQuestion) {
        this.answer = 'Waiting for you to stop typing...'
        this.debouncedGetAnswer()
      }
    },
    created: function () {
      // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
      // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
      // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
      // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
      // 请参考：https://lodash.com/docs#debounce
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
      getAnswer: function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      }
    }
  })