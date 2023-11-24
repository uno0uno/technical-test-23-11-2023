import { createClient } from '@supabase/supabase-js';

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const supabase = createClient(
    process.env.NUXT_PUBLIC_SUPABASE_URL,
    process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY
    );
  try {
    const { data, error } = await supabase
    .from('todoList')
    .insert([
        { title: body.title, description: body.description },
    ])
    .select()

    if (error) {
      return error;
    }else {
      return data
    }
  } catch (error) {
    return error;
  }
});
