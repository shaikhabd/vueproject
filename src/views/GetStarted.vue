<template>
<div class="header"></div>

<div class="second">
<img src="../assets/bg2.jpeg" alt="">
<button>GET STARTED</button>
<h3>Sign Up Successful</h3>
</div>
<div class="footer"></div>
</template>

<script>
export default{
    name:'GetStarted'
}
</script>

<style scoped>
*{
    background-color: #efefef;
}
.header{
    background-color: #14547C;
    height: 5vh;
    width: 100%;
}
.second{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
img{
    height: 40vh;
}
button{
    position: absolute;
    bottom: 10%;
    border: none;
    background-color: #14547C;
    color: white;
    height: 5%;
    width: 40%;
    border-radius: 5px;
     font-family: 'Ramabhadra', sans-serif;
}
h3{
    position: absolute;
    font-family: 'Ramabhadra', sans-serif;
    font-weight: 300;
    top: 10%;
}
.footer{
    height: 5vh;
    position: absolute;
    bottom: 0%;
    background-color: #14547C;
    width: 100%;
}
</style>