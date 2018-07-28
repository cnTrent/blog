<template>
  <div  id="show-blog">
      <h1>博客总览</h1>
      <input type="text"  v-model="search" placeholder="请输入您要搜索的内容" />
      <div v-for="blog in filteredBlogs" class="single-blog">
          <!-- |后面的名字是过滤器（Vue-filter）的名字 -->
          <router-link v-bind:to=" '/blog/' + blog.id">
              <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
          </router-link>
          <article>{{blog.content | snippet}}</article>
          <div class="info">
              <span>{{blog.authored}}</span>
              <span>{{blog.time}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "showBlog",
  data() {
    return {
        blogs:[],
        search:""
    };
  },
  created(){
      this.$http.get("https://vuesell.firebaseio.com/posts.json")
      .then(function(data){
         
        //   this.blogs=data.body.slice(0,10)
        return data.json()
      })
      .then(function(data){
          var blogsArray=[];
          for(let key in data){
              data[key].id=key;
              blogsArray.push(data[key]);
          }
          console.log(blogsArray)
          this.blogs=blogsArray;
      })

  },
  //有任何变化的属性都用计算属性
  computed:{
      filteredBlogs:function(){
          return this.blogs.filter((blog)=>{
              return blog.title.match(this.search)
          })
      }
  },
  //实现局部过滤器
//   filters:{
//       "to-uppercase":function(value){
//           return value.toUpperCase()
//       }
//   }
};
</script>

<style>
#show-blog{
    padding: 0 10%;
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    background: #fff;
}
a{
    text-decoration: none
}
input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box
}
</style>
