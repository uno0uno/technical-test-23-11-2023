<script setup>

const {
  data: TodoList,
  pending,
  refresh,
  execute,
  error,
} = await useAsyncData('TodoListContent', () => {
  try {
    return $fetch(`/api/TodoList/AllTodoList`);
  } catch (error) {
    return error;
  }
});

</script>

<template>
  <div v-if="pending">LOADING...</div>
  <div v-else  class="grid grid-cols-2 sm:grid-cols-3">
    <div 
    v-for="Todo in TodoList"
    :key="Todo.id"
    >

      <CommonPublicTheCard
      v-bind:id="Todo.id"
      v-bind:created_at="Todo.created_at"
      v-bind:title="Todo.title"
      v-bind:description="Todo.description"
      >
      </CommonPublicTheCard>
    </div>
  </div>

</template>