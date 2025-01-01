<template>
  <div class="login-container">
    <form @submit="(e) => sendLogin(e)">
      <h1>Welcome Back!</h1>
      <p>Please enter your credentials</p>
      <div class="userid-container">
        <input
          v-model="userID"
          type="text"
          name=""
          class="userid-placeholder"
          id="UserID"
          placeholder=" "
          required
        />
        <i class="pi pi-user" tabindex="0"></i>
        <label for="UserID">UserID</label>
      </div>
      <div class="password-container">
        <input
          v-model="password"
          type="password"
          name=""
          class="password-placeholder"
          id="Password"
          placeholder=" "
          required
        />
        <i class="pi pi-lock" tabindex="0"></i>
        <label for="Password">Password</label>
      </div>
      <div class="underpassword-container">
        <div class="forgetpassword-container">
          <p>Forget Password?</p>
        </div>
        <div class="rememberme-container">
          <p>
            <input type="checkbox" id="Remember me" />
            Remember me
          </p>
        </div>
      </div>
      <div v-if="loginError" class="error-message">
        <p>Incorrect username or password</p>
      </div>
      <input type="submit" name="Login" value="Login" />
    </form>

    <p>Not a member? <router-link to="/register"> Register now </router-link></p>
  </div>
</template>
<script setup lang="ts">
import { supabaseClient } from 'src/lib/supabaseClient'
import { useUserStore } from 'src/stores/user'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loginError = ref<boolean>(false)
const userID = ref<string>('')
const password = ref<string>('')
const store = useUserStore()
const sendLogin = async (e: Event) => {
  e.preventDefault()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: userID.value,
    password: password.value,
  })
  if (error === null) {
    if (store.logIn()) {
      router.push('/')
    } else {
      loginError.value = true
    }
  } else {
    loginError.value = true
  }
  //login logic
}
</script>
<style lang="scss" scoped>
@import '../css/app.scss';
body {
  margin: 0;
  padding: 0;
  font-family: 'Times New Roman';
}
.login-container {
  width: 300px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  background-color: #ffffff;
}
.login-container h1 {
  font-size: 24px;
  margin-block: 20px;
  color: #333333;
}
.login-container p {
  font-size: 12px;
  margin-block: 20px;
  color: #333333;
}
.login-container input[type='text'],
.login-container input[type='password'] {
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #cccccc;
  padding: 14px 10px;
  padding-right: 50px;
  width: 200px;
  outline: none;
  border-radius: 24px;
  transition: 0.25s;
  box-shadow: 0 0 4px rgba(76, 175, 80, 0.3);
}

.userid-container label {
  position: absolute;
  top: 220px;
  left: 60px;
  font-size: 14px;
  padding: 0px 5px;
  color: #666;
  transition: 0.3s;
  pointer-events: none;
}

.password-container label {
  position: absolute;
  top: 295px;
  left: 60px;
  font-size: 14px;
  padding: 0px 5px;
  color: #666;
  transition: 0.3s;
  pointer-events: none;
}

.login-container input[type='text']:focus,
.login-container input[type='password']:focus {
  transform: scale(1.2);
}
.login-container input[type='text']:focus + i,
.login-container input[type='password']:focus + i {
  transform: scale(1.2);
}
.login-container input[type='text']:focus + i + label,
.login-container input[type='password']:focus + i + label,
.login-container input[type='text']:not(:placeholder-shown) + i + label,
.login-container input[type='password']:not(:placeholder-shown) + i + label {
  font-size: 0.8rem;
  transform: translateY(-100%);
  background-color: #ffffff;
}

.login-container input[type='submit'] {
  border: 0;
  background-color: $palette-red;
  color: $palette-white;
  display: block;
  margin: 0.5px auto;
  text-align: center;
  border: 2px solid #191919;
  padding: 14px 10px;
  width: 100px;
  outline: none;
  cursor: pointer;
  border-radius: 24px;
  transition: background-color 0.25s ease;
}
/*.login-container input[type="submit"]:hover{
    background:#0047AB
}*/

.userid-container i {
  position: absolute;
  right: 20px;
  left: 160px;
  top: 225px;
  font-size: 24px;
}
.password-container i {
  position: absolute;
  right: 20px;
  left: 160px;
  top: 300px;
  font-size: 24px;
}
.underpassword-container p {
  position: relative;
  font-size: 11px;
  color: #333333;
  margin: 0px 0;
  padding-bottom: 0px 0px;
}
.rememberme-container {
  position: relative;
  right: 50px;
  top: -21px;
}
.forgetpassword-container p {
  position: relative;
  right: -50px;
  padding-bottom: 0px 0px;
}
.error-message p {
  margin: auto;
  padding: 0px;
  font-size: 12px;
  color: red;
  top: -30px;
}
</style>
