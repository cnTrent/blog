<template>
    <div class="title">
        <h2>方楚涛个人博客</h2>
        <p>项目开发的六个阶段：1. 充满热情 2. 醒悟 3. 痛苦 4. 找出罪魁祸首 5. 惩罚无辜 6. 褒奖闲人</p>
    </div>
</template>
<script>
export default {
    name:"blogTitle",
    data(){
        return{
            //  titleImg:'url('+ require('../assets/img/bgTitle.png') +')'
        }
    }
}
</script>
<style scoped>
.title{
    width: 100%;
    height: 140px;
    text-align: left;
    padding: 20px 10%;
    box-sizing: border-box;
    background-image: url(../assets/bgtitle.jpg);
    background-position: center;background-size: cover
}
.title h2{
    font-size: 24px;
    margin-bottom: 8px;
    color: #333;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}
.title p{
    color: #666;
    font-size: 14px;
    padding-top: 15px;
}
</style>
