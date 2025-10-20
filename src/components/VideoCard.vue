<template>
  <div class="video-card">
    <!-- просто карточка для видео и его инфа -->
    <div class="thumbnail-wrapper">
      <img :src="thumbnail" :alt="title" class="thumbnail" />
      <span class="duration">{{ duration }}</span>
    </div>

    <div class="video-info">
      <div class="channel-icon">{{ channel[0] }}</div>

      <div class="video-details">
        <h3 class="video-title">{{ title }}</h3>

        <div class="video-meta">
          <p class="channel-name">{{ channel }}</p>
          <div class="video-stats">
            <span>{{ formatViews(views) }} views</span>
            <span class="dot">•</span>
            <span>{{ uploadedAt }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  title: String,
  channel: String,
  views: Number,
  thumbnail: String,
  duration: String,
  uploadedAt: String,
})

// форматирование просмотров
const formatViews = (views) => {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + 'M'
  }
  if (views >= 1000) {
    return (views / 1000).toFixed(0) + 'K'
  }
  return views.toString()
}
</script>

<style scoped>
.video-card {
  cursor: pointer;
}

.thumbnail-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  background: var(--border-input);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: var(--spacing-md);
}

.thumbnail {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.15s;
}

.video-card:hover .thumbnail {
  transform: scale(1.03);
}

.duration {
  position: absolute;
  bottom: var(--spacing-xs);
  right: var(--spacing-xs);
  background: rgba(0, 0, 0, 0.85);
  color: var(--text-white);
  padding: 3px var(--spacing-xs);
  border-radius: var(--radius-sm);
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
}

.video-info {
  display: flex;
  gap: var(--spacing-md);
}

.channel-icon {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: var(--text-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
  flex-shrink: 0;
}

.video-details {
  flex: 1;
  min-width: 0;
}

.video-title {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin: 0 0 var(--spacing-xs) 0;
  color: var(--text-primary);
}

.video-meta {
  font-size: 12px;
  line-height: 18px;
}

.channel-name {
  color: var(--text-secondary);
  margin: 0 0 2px 0;
  font-weight: 400;
  transition: color 0.2s;
}

.channel-name:hover {
  color: var(--text-primary);
}

.video-stats {
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.dot {
  font-size: 10px;
}

</style>
