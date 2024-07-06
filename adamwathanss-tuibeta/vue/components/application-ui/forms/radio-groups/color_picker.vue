<template>
  <fieldset>
    <legend class="block text-sm font-semibold leading-6 text-gray-900">Choose a label color</legend>
    <RadioGroup v-model="selectedColor" class="mt-6 flex items-center space-x-3">
      <RadioGroupOption as="template" v-for="option in options" :key="option.name" :value="option" :aria-label="option.name" v-slot="{ active, checked }">
        <div :class="[option.color, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-current']">
          <span aria-hidden="true" class="h-8 w-8 rounded-full border border-black border-opacity-10 bg-current" />
        </div>
      </RadioGroupOption>
    </RadioGroup>
  </fieldset>
</template>

<script setup>
import { ref } from 'vue'
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'

const options = [
  { name: 'Pink', color: 'text-pink-500' },
  { name: 'Purple', color: 'text-purple-500' },
  { name: 'Blue', color: 'text-blue-500' },
  { name: 'Green', color: 'text-green-500' },
  { name: 'Yellow', color: 'text-yellow-500' },
]

const selectedColor = ref(options[1])
</script>