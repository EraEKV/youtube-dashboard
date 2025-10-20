<template>
  <!-- ничего особенного просто чипсы для категории -->
  <div class="chips-bar">
    <button
      v-for="chip in chips"
      :key="chip"
      :class="['chip', { active: activeChip === chip }]"
      @click="activeChip = chip"
    >
      {{ chip }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const chips = [
  'All',
  'Vue.js',
  'JavaScript',
  'Web Development',
  'Programming',
  'React',
  'TypeScript',
  'CSS',
  'Node.js',
  'Frontend',
  'Backend',
  'Tutorials',
]

const activeChip = ref('All')
</script>

<style scoped>
.chips-bar {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  overflow-x: auto;
  padding-bottom: var(--spacing-xs);
}

.chips-bar::-webkit-scrollbar {
  height: 0;
}

.chip {
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  border-radius: var(--radius-md);
  background: var(--bg-tertiary);
  color: var(--text-primary);
  cursor: pointer;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.2s;
  flex-shrink: 0;
}

.chip:hover {
  background: var(--bg-hover);
}

.chip.active {
  background: var(--text-primary);
  color: var(--bg-primary);
}
</style>
