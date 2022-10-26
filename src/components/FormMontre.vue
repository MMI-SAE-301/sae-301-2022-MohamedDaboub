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






</script>
