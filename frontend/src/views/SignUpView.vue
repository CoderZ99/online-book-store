<script>


export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            fullname: ''
        };
    },
    methods: {
        signUp() {
            console.log(this.username)
            console.log(this.email)
            console.log(this.password)
            console.log(this.fullname)
        }
    }
};
</script>

<template>
    <div class="register-container">
        <h1>SignUp</h1>
        <form @submit.prevent="signUp">
            <div class="input-container">
                <label for="fullname">Fullname:</label>
                <input type="text" id="fullname" name="fullname" v-model="fullname" required>
            </div>
            <div class="input-container">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" v-model="email" required>
            </div>
            <div class="input-container">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" v-model="username" required>
            </div>
            <div class="input-container">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" v-model="password" required>
            </div>
            <button class="register-button" type="submit">SignUp</button>
        </form>
    </div>
</template>

<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f0f2f5;
}

.register-container {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 100px;
}

h1 {
    text-align: center;
}

.input-container {
    margin-bottom: 20px;
}

.input-container label {
    display: block;
    margin-bottom: 5px;
}

.input-container input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.input-container input:focus {
    border-color: #1877f2;
}

.register-button {
    width: 100%;
    padding: 10px;
    background-color: #1877f2;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.register-button:hover {
    background-color: #166fe5;
}
</style>