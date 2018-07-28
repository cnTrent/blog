<template>
    <div class="footer">
        <span>{{mag}}</span>
    </div>
</template>
<script>
export default {
    name:"blogfooter",
    data(){
        return{
            mag:"方楚涛个人博客"
        }
    }
}
</script>
<style scoped>
.footer{
  width: 100%;
    background: #333;
    color: #a5a4a4;
    text-align: center;
    padding: 20px 0;
}
</style>
