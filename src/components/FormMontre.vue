<script setup lang="ts">
import type { Montre, } from '@/types';
import { colors, } from '@/types';
import { ref} from 'vue';
import { supabase } from '@/supabase';
import MontreSvg from './montreSvg.vue';
import {useRouter} from 'vue-router'
const router = useRouter()
const props = defineProps<{
  data?: Montre;
  id?: string;
}>();
const montre = ref<Montre>(props.data ?? {});

async function upsertMontre(dataForm, node) {
  const { data, error } = await supabase.from("Montre").upsert(dataForm);
  if (error) node.setErrors([error.message]);
  else {
    node.setErrors([]);
    router.push({ name: "Personnalisation-edit-id", params: { id: data[0].id } });
  }
}
if (props.id) {
  let { data, error } = await supabase
    .from("Montre")
    .select("*")
    .eq("id", props.id);
  if (error || !data)
    console.log("n'a pas pu charger le table Montre :", error);
  else montre.value = data[0];
}


</script>
