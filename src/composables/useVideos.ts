import { ref, onMounted, watch } from 'vue'
import { mockVideos, type Video } from '../data/mockVideos'


// простой композабл для получения видео (мок данные с задержкой)
export function useVideos() {
  const videos = ref<Video[]>([])
  const searchQuery = ref('')
  const loading = ref(true)

  watch(searchQuery, (newValue) => {
    console.log(`Поиск: "${newValue}" - найдено видео`)
  })

  onMounted(() => {
    setTimeout(() => {
      videos.value = mockVideos
      loading.value = false
    }, 1500)
  })

  return {
    videos,
    searchQuery,
    loading,
  }
}
