<template>
  <div class="flex items-center justify-center min-h-screen px-4 py-12 bg-base-100 sm:px-6 lg:px-8">
    <div class="w-full max-w-xl space-y-8">
      <div>
        <img class="w-auto h-8 mx-auto" src="@/assets/logo.png" alt="logo">
      </div>
      <form class="p-10 mt-8 space-y-6 rounded-lg bg-base-200 " action="#" method="POST">
        <input type="hidden" name="remember" value="true">
        <div class="space-y-4 text-gray-300 rounded-md shadow-sm">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email Address</span>
            </label>
            <input type="text" class="input bg-base-300">
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input type="password" class="input bg-base-300">
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="form-control">
            <label class="cursor-pointer label">
              <input type="checkbox" class="mr-2 checkbox">
              <span class="label-text">Remember me</span>
            </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-info hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button type="button" class="relative flex justify-center w-full px-4 py-2 font-medium text-white rounded-md group bg-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
