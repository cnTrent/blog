<template>
  <div class="add-blog">
    <h1>{{ msg }}</h1>
    <form v-show="!submmited">
      <label>博客标题</label>
      <input type="text" placeholder="" v-model="blog.title"/>
      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>
      <div class="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories"/>
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories"/>
        <label>Angular4.js</label>
        <input type="checkbox" value="Angular4.js" v-model="blog.categories"/>
        <label>react.js</label>
        <input type="checkbox" value="react.js" v-model="blog.categories"/>
      </div>
      <label>作者</label>
      <select v-model="blog.authored">
        <option v-for="author in authors">{{author}}</option>
      </select>
      <button v-on:click.prevent="post">添加博客</button>
    </form>
    <div class="suss" v-show="submmited">添加博客成功</div>
    <div class="preview">
      <h3>博客总览</h3>
      <p>博客标题:{{blog.title}}</p>
      <p>博客内容：{{blog.content}}</p>
      <p>博客分类</p>
      <ul>
        <li v-for="(category,item) in blog.categories">{{category}} {{item}}</li>
      </ul>
      <p>作者：{{blog.authored}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "addBlog",
  data() {
    return {
      msg: "添加博客",
      blog: {
        title: "",
        content: "",
        categories: [],
        authored: "",
        time: ""
      },
      authors: ["fangchutao", "trent", "xiaoming"],
      submmited: false
    };
  },

  methods: {
    //http请求第一个是请求地址url,第二个是请求的参数
    post: function() {
      var myDate = new Date(); //获取系统当前时间
          var time =
            myDate.getFullYear() +
            "-" +
            myDate.getMonth() +
            "-" +
            myDate.getDate();
          this.blog.time = time;
      this.$http
        .post("https://vuesell.firebaseio.com/posts.json", this.blog)
        //成功之后返回的东西
        .then(function(data) {
          this.submmited = true;
        });
      console.log(this.time);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-blog * {
  box-sizing: border-box;
}
.add-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
select,
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
textarea {
  height: 200px;
}
.checkboxes label {
  display: inline-block;
  margin-top: 5px;
}
.checkboxes input {
  display: inline-block;
  margin-right: 5px;
}
button {
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
.preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
</style>

