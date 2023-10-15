<template>
  <form @submit.prevent="test" class="flex flex-col gap-6">
    <h1 class="text-2xl font-bold text-center mb-8 dark:text-white">OPan-Register</h1>

    <UIInput v-model="form.email" for="email" label="Email" type="email" placeholder="name@flowbite.com" required />

    <UIInput v-model="form.code" for="emailCode" label="Email verification code" type="text"
      placeholder="enter email verification code" required>
      <template #after>
        <UIButton text="Get Code" primary />
      </template>
    </UIInput>

    <UIInput v-model="form.password" for="password" label="Password" type="password" placeholder="enter your password"
      required />

    <UIInput v-model="form.password" for="confirmPassword" label="Confirm Password" type="password" placeholder="please enter your password again"
      required />

    <UIInput v-model="form.code" for="code" label="Verification code" type="text" placeholder="enter code" required>
      <template #after>
        <img class="rounded-md border-gray-300 dark:border-gray-600 border bg-white"
          src="http://localhost:8080/api/login" />
      </template>
    </UIInput>


    <div class="flex items-center justify-between w-full">
      <UILink text="Sign In" to="/auth/login" />
    </div>

    <UIButton text="Sign Up" primary type="submit" />

  </form>
</template>

<script setup lang="ts">
const test = () => {
  alert("no");
};
const form = ref({
  email: '',
  password: '',
  code: ''
})
</script>
