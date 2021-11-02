<template>
  <div class="px-10 py-4 overflow-y-scroll pt-10 bg-base-200" style="height: 540px;">
    <h5>General Information</h5>
    <div class="grid grid-cols-2 gap-3">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Full Name</span>
        </label>
        <input type="text" class="input bg-base-300">
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Gender</span>
        </label>
        <select class="w-full bg-base-300 select">
          <option selected="selected">Male</option>
          <option>Female</option>
        </select>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Address</span>
        </label>
        <input type="text" class="input bg-base-300">
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email Address</span>
        </label>
        <input type="email" class="input bg-base-300">
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">City</span>
        </label>
        <input type="text" class="input bg-base-300">
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">State Province</span>
        </label>
        <input type="text" class="input bg-base-300">
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Zip Code</span>
        </label>
        <input type="text" class="input bg-base-300">
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Country</span>
        </label>
        <select name="country" class="select bg-base-300">
          <option value="">-- Select --</option>
          <option value="jpn">Jepang</option>
        </select>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Phone Number</span>
        </label>
        <input type="text" class="input bg-base-300">
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Fax</span>
        </label>
        <input type="text" class="input bg-base-300">
      </div>
    </div>
  </div>
</template>
<script></script>
