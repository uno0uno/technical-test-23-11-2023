import { createClient } from '@supabase/supabase-js';

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const supabase = createClient(
    process.env.NUXT_PUBLIC_SUPABASE_URL,
    process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY
    );
  try {
    const { error } = await supabase
    .from('todoList')
    .delete()
    .eq('id', query.id)

    if (error) {
      return error;
    }else {
      return true
    }
  } catch (error) {
    return error;
  }
});
