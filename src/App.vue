<template>
  <div :class="{ 'dark-theme': isDark }">
    <!-- верхняя часть -->
    <Header :searchQuery="searchQuery" @update:searchQuery="searchQuery = $event" />

    <div class="main-container">
      <!-- левая часть крч -->
      <Sidebar />

      <main class="content">
        <!-- снизу кнопки типа категории  -->
        <ChipsBar />

        <div v-if="loading" class="loading">
          <div class="spinner"></div>
          <p>Loading...</p>
        </div>

        <div v-else-if="filteredVideos.length === 0" class="no-results">
          <p>No videos found.</p>
        </div>

        <div v-else class="videos-grid">
          <!-- каждое видео -->
          <VideoCard
            v-for="video in displayedVideos"
            :key="video.id"
            :title="video.title"
            :channel="video.channel"
            :views="video.views"
            :thumbnail="video.thumbnail"
            :duration="video.duration"
            :uploadedAt="video.uploadedAt"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed, watch, provide } from 'vue'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import ChipsBar from './components/ChipsBar.vue'
import VideoCard from './components/VideoCard.vue'
import { useVideos } from './composables/useVideos'
import { useTheme, ThemeSymbol } from './composables/useTheme'
import { useSort, SortSymbol } from './composables/useSort'

const { isDark, toggleTheme } = useTheme()
const { sortBy, toggleSort } = useSort()

provide(ThemeSymbol, { isDark, toggleTheme })
provide(SortSymbol, { sortBy, toggleSort })

const { videos, searchQuery, loading } = useVideos()

const filteredVideos = computed(() => {
  if (!searchQuery.value) return videos.value

  const query = searchQuery.value.toLowerCase()
  return videos.value.filter(
    (video) =>
      video.title.toLowerCase().includes(query) || video.channel.toLowerCase().includes(query),
  )
})

const displayedVideos = computed(() => {
  const items = [...filteredVideos.value]

  if (sortBy.value === 'views-desc') {
    return items.sort((a, b) => b.views - a.views)
  }

  if (sortBy.value === 'views-asc') {
    return items.sort((a, b) => a.views - b.views)
  }

  return items
})

watch(searchQuery, (val) => {
  console.log('Search:', val)
})
</script>

<style>
.dark-theme {
  min-height: 100vh;
  background: var(--bg-secondary);
}

.content {
  padding-left: calc(var(--sidebar-width) + var(--spacing-xl));
  padding-right: var(--spacing-xl);
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
  color: var(--text-secondary);
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid var(--bg-tertiary);
  border-top: 4px solid var(--accent-primary);
  border-radius: var(--radius-full);
  animation: spin 1s linear infinite;
  margin-bottom: var(--spacing-lg);
}

.main-container {
  padding-top: var(--header-height);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.no-results {
  text-align: center;
  padding: 100px 20px;
  font-size: 16px;
  color: var(--text-secondary);
}

.videos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 40px var(--spacing-lg);
}
</style>
