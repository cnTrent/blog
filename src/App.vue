<template>
  <div id="app">
    <blogTitle></blogTitle>
    <BlogHeader></BlogHeader>
    <router-view></router-view>
    <blogFooter></blogFooter>
  </div>
</template>

<script>
import showBlog from './components/showBlog'
import addBlog from './components/addBlog'
import BlogHeader from "./components/blogHeader"
import blogFooter from "./components/blogFooter"
import blogTitle from "./components/title"

export default {
  name: 'App',
  components: {
    showBlog,
    addBlog,
    BlogHeader,
    blogFooter,
    blogTitle
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0
}
body{
  background: #f5f5f5
}
</style>
