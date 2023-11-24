<script setup>

const props = defineProps({ 
    id: {type: Number},
    created_at: {type: String},
    title: {type: String},
    description: {type: String},
    });

const { id, created_at, title,description } = toRefs(props);

async function deleteTodo(idTodo) {

            const {
            data: TodoList,
            pending,
            refresh,
            execute,
            error,
            } = await useAsyncData('TodoListContent', () => {
            try {
                return $fetch(`/api/TodoList/DeleteTodo?id=${idTodo}`);
            } catch (error) {
                return error;
            }
            });
}

</script>

<template>
<section class="p-2 layout-responsive z-10">
  <div class="p-4 border-2 border-black rounded-t-lg  border-dotted flex flex-col gap-0 max-w-xl  ">
    <LogosTheDoubleQuotes class="w-6"></LogosTheDoubleQuotes>
    <p class="text-sm  sm:text-2xl font-bold text-black">{{title}}</p>
    <p class="text-sm  sm:text-2xl font-bold text-black">{{id}}</p>
    <p class="text-sm sm:text-lg text-slate-600">{{description}}</p>
  </div>
    <div class=" flex p-2 bg-gray-200 border-2 border-black border-dotted rounded-b-lg flex">
        <LogosTheTrash  @click="deleteTodo(id)" class="w-6 cursor-pointer"></LogosTheTrash>
        <LogosTheEdit class="w-6 cursor-pointer"></LogosTheEdit>

    </div> 

</section>

</template>