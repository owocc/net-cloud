<template>
	<div class="flex items-start">
		<div class="flex items-center h-5">
			<input type="checkbox" :id="props.for"
				class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
		</div>
		<label :for="props.for" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ props.label }}</label>
	</div>
</template>

<script setup lang="ts">
interface CheckBoxProps {
	label?: string
	for?: string
	placeholder?: string
	required?: boolean
}
const props = defineProps<CheckBoxProps>()

</script>