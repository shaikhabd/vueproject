<template>
    <div class="header">
    </div>
    <div>
    <div class="main-title"> 
    <h2>CREATE NEW ACCOUNT</h2>
    <h4>Already have an account? Sign in</h4>
    </div>
    <form action="">
    <div class="formstyle">
    <label for="">NAME</label>
    <input type="text">
    <label for="">EMAIL ID</label>
    <input type="text">
    <label for="">CREATE PASSWORD</label>
    <input type="text">
    <label for="">CONFIRM PASSWORD</label>
    <input type="text">
    <button >SIGN UP</button>
    </div>
    </form>
    </div>
    <div class="footer"></div>
</template>

<script>
export default {
    name:'SignUp'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Ramabhadra&display=swap');
.header{
    height: 5vh;
    background-color: #14547C;
}
.main-title {
height: 15vh;
text-align: center;
padding-top: 10%;
padding-bottom: 0%;
}
h4 {
    font-family: 'Ramabhadra', sans-serif;
    font-weight: 300;
    padding: 2%;
    color: gray;
}
h2{
    font-family: 'Oswald', sans-serif;
    font-size: 35px;
}
form{
    display: grid;
    }
.formstyle{
    display: grid;
    align-items: center;
    justify-content: center;
    height: 60vh;
}
label{
    font-family: 'Ramabhadra', sans-serif;
}
input{
    background-color: #d9d9d9;
    border: none;
    border-radius: 5px;
    height: 70%;
    margin-top: -20%;
    margin-bottom: 5%;
}
button{
    border: none;
    background-color: #14547C;
    color: white;
    height: 60%;
    border-radius: 5px;
     font-family: 'Ramabhadra', sans-serif;
}
.footer{
    height: 5vh;
    position: absolute;
    bottom: 0%;
    background-color: #14547C;
    width: 100%;
}
</style>