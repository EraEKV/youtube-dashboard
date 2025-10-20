<template>
  <aside class="sidebar">
    <!-- используется обычный lucide icons -->
    <nav class="sidebar-nav">
      <a href="#" class="nav-item active">
        <Home :size="24" />
        <span>Home</span>
      </a>
      <a href="#" class="nav-item">
        <Flame :size="24" />
        <span>Trending</span>
      </a>
      <a href="#" class="nav-item">
        <Folder :size="24" />
        <span>Subscriptions</span>
      </a>
    </nav>

    <div class="divider"></div>

    <nav class="sidebar-nav">
      <a href="#" class="nav-item">
        <Library :size="24" />
        <span>Library</span>
      </a>
      <a href="#" class="nav-item">
        <History :size="24" />
        <span>History</span>
      </a>
      <a href="#" class="nav-item">
        <PlaySquare :size="24" />
        <span>Your videos</span>
      </a>
      <a href="#" class="nav-item">
        <Clock :size="24" />
        <span>Watch later</span>
      </a>
      <a href="#" class="nav-item">
        <ThumbsUp :size="24" />
        <span>Liked videos</span>
      </a>
    </nav>

    <div class="divider"></div>

    <div class="sidebar-section">
      <h3 class="section-title">Subscriptions</h3>
      <a href="#" class="nav-item">
        <div
          class="channel-avatar"
          style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        >
          C
        </div>
        <span>Code Academy</span>
      </a>
      <a href="#" class="nav-item">
        <div
          class="channel-avatar"
          style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        >
          W
        </div>
        <span>Web Dev Simplified</span>
      </a>
      <a href="#" class="nav-item">
        <div
          class="channel-avatar"
          style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        >
          V
        </div>
        <span>Vue Mastery</span>
      </a>
    </div>
  </aside>
</template>

<script setup>
import { Home, Flame, Folder, Library, History, PlaySquare, Clock, ThumbsUp } from 'lucide-vue-next'
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: var(--header-height);
  width: var(--sidebar-width);
  height: calc(100vh - var(--header-height));
  border-right: 1px solid var(--border-color);
  background: var(--bg-primary);
  overflow-y: auto;
  padding: var(--spacing-md) 0;
  z-index: 1000;
}

.sidebar::-webkit-scrollbar {
  width: 8px;
}

/* .sidebar::-webkit-scrollbar-thumb {
  background: var(--text-secondary);
  border-radius: var(--radius-sm);
} */

.sidebar-nav {
  padding: 0 0 var(--spacing-md) 0;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  padding: 10px var(--spacing-xl);
  text-decoration: none;
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 400;
  transition: background 0.2s;
  cursor: pointer;
}

.nav-item:hover,
.nav-item.active {
  background: var(--bg-hover);
}

.nav-item.active {
  font-weight: 500;
}

.divider {
  height: 1px;
  background: var(--border-color);
  margin: var(--spacing-md) 0;
}

.sidebar-section {
  padding: var(--spacing-sm) 0;
}

.section-title {
  padding: var(--spacing-sm) var(--spacing-xl);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
}

.channel-avatar {
  width: 24px;
  height: 24px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-white);
  font-size: 12px;
  font-weight: 500;
  flex-shrink: 0;
}
</style>
