<template>
	<div class="flex flex-col">
		<label :for="props.for" v-if='props.label' class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{
			props.label }}</label>
		<div class="flex gap-2">
			<slot name="before"></slot>
			<input :type="props.type" @input="change" :value="props.modelValue" :id='props.for' :class="inputClasses"
				:placeholder="props.placeholder" v-bind="$attrs" />
			<slot name="after"></slot>
		</div>
	</div>
</template>

<script setup  lang="ts">
interface InputProps {
	label?: string
	type?: string
	for?: string
	placeholder?: string
	modelValue: string
}

const emit = defineEmits(["update:modelValue"])

const change = (event: Event) => {
	const target = event.target as HTMLInputElement
	emit("update:modelValue", target.value)
}

const props = withDefaults(
	defineProps<InputProps>(), {
	type: 'text',
})

import clsx from 'clsx'
const inputClasses = computed(() =>
	clsx(
		"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full flex-1 p-2.5",
		"focus:ring-blue-500 focus:border-blue-500",
		"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
	)
)
</script>