<template>
<section class="bg-img">
</section>
<div class="two">
</div>

<div class="three">
<img src="../assets/logo.png" alt="">
</div>

<div class="four">
<button @click="onClick()" class="btn">Login</button>
<button @click="onClick2()" class="btn">Sign in</button>
</div>
</template>

<script>

export default{
    name : 'FirstPage',
    methods : {
        onClick() {
        console.log('log in');
        },
        onClick2() {
            this.$router.push('/signup');
        }
    }
}
</script>


<style scoped>
 .bg-img{
    background-image: url('../assets/bg1.jpeg');
    height: 50vh;
    width: 100%;
    background-size: cover;
}
.two{
    background-color: #14547C;
    width: 100%;
    height: 5vh;
}
.three{
    background-color: #112337;
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
img{
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.four{
display: flex;
justify-content: space-around;
align-items: center;
 background-color: #112337;
 height: 15vh;
 width: 100%;
}
.btn{
height: 30%;
width: 30%;
background-color: #14547C;
border-radius: 5px;
border: none;
color: white;
}
</style>