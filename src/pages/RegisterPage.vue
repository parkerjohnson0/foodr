<template>
  <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
  <div class="register-container">
    <h1>Sign up</h1>
    <p>Create your account</p>
    <form Model="@this" @submit.prevent="RegisterUser">
      <div class="username-container">
        <input type="text" id="username" v-model="formData.username" placeholder=" " required />
        <label for="username">Username</label>
        <i class="bx bx-user"></i>
      </div>
      <div class="email-container">
        <input type="text" id="email" v-model="formData.email" placeholder=" " required />
        <label for="email">Email</label>
        <i class="bx bx-envelope"></i>
      </div>
      <div class="pass-container">
        <input type="password" id="password" v-model="formData.password" placeholder=" " required />
        <label for="password">Password</label>
        <i class="bx bx-lock-alt"></i>
      </div>
      <div class="dob-container">
        <input type="date" id="dateofbirth" v-model="formData.dateofbirth" name="dob" required />
        <label for="dateofbirth">Date Of Birth</label>
      </div>
      <input type="submit" name="Register" value="Register" />
    </form>
    <p>Already have an account?</p>
    <nav>
      <router-link to="/Login">Log in</router-link>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { supabaseClient } from 'src/lib/supabaseClient'
const formData = reactive({
  username: '',
  password: '',
  email: '',
  dateofbirth: '',
})
const RegisterUser = async () => {
  //need to do checks here
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const resp = await supabaseClient.auth
    .signUp({
      email: formData.email,
      password: formData.password,
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .then(async ({ data, error }) => {
      if (error !== null) {
        await supabaseClient.auth.updateUser({
          data: {
            display_name: formData.username,
          },
        })
      }
    })
  console.log(formData)
}
</script>
<style lang="scss" scoped>
@import '../css/app.scss';
.register-container p {
  font-size: 15px;
  margin-block: 20px;
  color: #000000;
}
.register-container {
  width: 650px;
  padding: 40px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  background-color: #ffffff;
}
.register-container h1 {
  font-size: 90px;
  margin-block: 20px;
  color: #333333;
}

.register-container input[type='text'],
.register-container input[type='password'] {
  background: none;
  display: block;
  margin: 2px auto;
  left: 50px;
  text-align: center;
  border: 2px solid #cccccc;
  padding: 14px 10px;
  padding-right: 50px;
  width: 400px;
  outline: none;
  border-radius: 24px;
  transition: 0.25s;
  box-shadow: 0 0 4px rgba(76, 175, 80, 0.3);
}

.register-container input[type='date'] {
  background: none;
  display: block;
  margin: 2px auto;
  left: 50px;
  text-align: center;
  border: 2px solid #cccccc;
  padding: 14px 10px;
  padding-right: 0px;
  width: 400px;
  outline: none;
  border-radius: 24px;
  transition: 0.25s;
  box-shadow: 0 0 4px rgba(76, 175, 80, 0.3);
}

.register-container input[type='text']:focus + label,
.register-container input[type='text']:not(:placeholder-shown) + label,
.register-container input[type='password']:focus + label,
.register-container input[type='password']:not(:placeholder-shown) + label,
.register-container input[type='date']:focus + label,
.register-container input[type='datetime-local']:focus + label {
  font-size: 1rem;
  transform: translateY(-150%);
  background-color: #ffffff;
}
.register-container label {
  position: relative;
  top: -60px;
  font-size: 10px;
  padding: 0px 5px;
  color: #666;
  transition: 0.3s;
  pointer-events: none;
  text-align: center;
}
.register-container i {
  position: relative;
  top: -40px;
  font-size: 20px;
}
.username-container label {
  left: -145px;
}
.username-container i {
  left: 130px;
}
.email-container label {
  left: -155px;
}
.email-container i {
  left: 140px;
}
.pass-container label {
  left: -145px;
}
.pass-container i {
  left: 132px;
}
.dob-container label {
  left: -150px;
}
.dob-container input[type='date']::-webkit-calendar-picker-indicator {
  position: relative;
  right: 27px;
  text-align: center;
  cursor: pointer;
}

.register-container input[type='submit'] {
  border: 0;
  background-color: $palette-red;
  color: $palette-white;
  display: block;
  margin: 0.5px auto;
  text-align: center;
  border: 2px solid #191919;
  padding: 14px 10px;
  width: 200px;
  outline: none;
  cursor: pointer;
  border-radius: 24px;
  transition: background-color 0.25s ease;
}
</style>
