<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <fieldset>
    <legend class="text-sm font-semibold leading-6 text-gray-900">Transfer Funds</legend>
    <p class="mt-1 text-sm leading-6 text-gray-600">Transfer your balance to your bank account.</p>
    <div class="mt-2.5 divide-y divide-gray-200">
      <div v-for="(account, accountIdx) in accounts" :key="accountIdx" class="relative flex items-start pb-4 pt-3.5">
        <div class="min-w-0 flex-1 text-sm leading-6">
          <label :for="`account-${account.id}`" class="font-medium text-gray-900">{{ account.name }}</label>
          <p :id="`account-${account.id}-description`" class="text-gray-500">{{ account.description }}</p>
        </div>
        <div class="ml-3 flex h-6 items-center">
          <input :id="`account-${account.id}`" :aria-describedby="`account-${account.id}-description`" name="account" type="radio" :checked="account.id === 'checking'" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
const accounts = [
  { id: 'checking', name: 'Checking', description: 'CIBC ••••6610' },
  { id: 'savings', name: 'Savings', description: 'Bank of America ••••0149' },
  { id: 'mastercard', name: 'Mastercard', description: 'Capital One ••••7877' },
]
</script>