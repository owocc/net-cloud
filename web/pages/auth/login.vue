<template>
  <form @submit.prevent="test" class="flex flex-col gap-6">
    <h1 class="text-2xl font-bold text-center mb-8 dark:text-white">OPan-Login</h1>

    <UIInput v-model="form.email" for="email" label="Email" type="email" placeholder="name@flowbite.com" required />

    <UIInput v-model="form.password" for="password" label="Password" type="password" placeholder="enter your password"
      required />

    <UIInput v-model="form.code" for="code" label="Verification code" type="text" placeholder="enter code" required>
      <template #after>
        <img class="rounded-md border-gray-300 dark:border-gray-600 border bg-white"
          src="http://localhost:8080/api/login" />
      </template>
    </UIInput>

    <UICheckBox label="Remember me" for="remember" />



    <div class="flex items-center justify-between w-full">
      <UILink text="Forgot password" to="/" />
      <UILink text="No account?" to="/auth/register" />
    </div>

    <UIButton text="Login" primary type="submit" />

    <UIButton base text="Sign in with Github" center>
      <template #before>
        <IconGithub />
      </template>
    </UIButton>

  </form>
</template>

<script setup lang="ts">

const test = () => {
  alert(form.value.email);
};
const form = ref({
  email: '',
  password: '',
  code: ''
})
</script>
