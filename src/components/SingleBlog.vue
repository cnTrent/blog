<template>
    <div class="singleBlog">
        <h3>{{blog.title}}</h3>
        <article>{{blog.content}}</article>
        <span>作者：{{blog.author}}</span>
        <p>分类</p>
        <ul>
            <li v-for="category in categories">{{category}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"SingleBlog",
    data(){
        return {
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
       this.$http.get("https://vuesell.firebaseio.com/posts/" + this.id+".json")
      .then(function(data){
           this.blog=data.body
           console.log(data)
      })
    }
}
</script>
<style>
.singleBlog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border:1px dotted #aaa
}
</style>
