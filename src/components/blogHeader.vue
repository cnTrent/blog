<template>
    <nav>
        <ul>
            <li>
                <router-link to="/" exact>首页</router-link>
                <router-link to="/life" exact>生活笔记</router-link>
                <router-link to="/technology" exact>技术杂谈</router-link>
                <router-link to="/profile" exact>个人简介</router-link>
                <router-link to="/leavMess" exact>给我留言</router-link>
                <router-link to="/add" exact>写博客</router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
  name: "bolog-header"
};
</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
}
ul {
  list-style-type: none;
  margin: 0;
}
ul li a{
    display: inline-block;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin: 0;
    color: #f5f5f5
}
nav {
 height: 50px;
 background: #4a4a4a;
 padding: 5px;
 box-sizing: border-box;
 padding-left: 10%;
 padding-right: 10%;
}
.router-link-active {
  background: rgba(255, 255, 255, 0.8);
}
</style>
