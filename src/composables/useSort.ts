import { ref, watch, inject, type InjectionKey, type Ref } from 'vue'

// сохранение сортировки в локалсторедж
const SORT_KEY = 'youtube-mini-sort'

export type SortOption = 'views-desc' | 'views-asc'

export interface SortContext {
  sortBy: Ref<SortOption>
  toggleSort: () => void
}

export const SortSymbol: InjectionKey<SortContext> = Symbol('sort')

export function useSort() {
  const getInitialSort = (): SortOption => {
    const stored = localStorage.getItem(SORT_KEY)
    return (stored as SortOption) || 'views-desc'
  }

  const sortBy = ref<SortOption>(getInitialSort())

  const toggleSort = () => {
    sortBy.value = sortBy.value === 'views-desc' ? 'views-asc' : 'views-desc'
  }

  // смотрит
  watch(sortBy, (value) => {
    localStorage.setItem(SORT_KEY, value)
  })

  return {
    sortBy,
    toggleSort,
  }
}

// а тут глобальный доступ к контексту сортировки
export function useSortContext() {
  const sort = inject(SortSymbol)
  if (!sort) {
    throw new Error('useSortContext must be used within a sort provider')
  }
  return sort
}
