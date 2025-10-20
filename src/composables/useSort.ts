import { ref, watch, inject, type InjectionKey, type Ref } from 'vue'


// сохранение сортировки в локалсторедж
const SORT_KEY = 'youtube-mini-sort'

// варианты сортировок
export type SortOption = 'default' | 'views-desc' | 'views-asc'

export interface SortContext {
  sortBy: Ref<SortOption>
  toggleSort: () => void
}

// символ для инъекции контекста сортировки
export const SortSymbol: InjectionKey<SortContext> = Symbol('sort')

export function useSort() {
  // получение начальной сортировки из локалсторедж
  const getInitialSort = (): SortOption => {
    const stored = localStorage.getItem(SORT_KEY)
    return (stored as SortOption) || 'default'
  }

  const sortBy = ref<SortOption>(getInitialSort())

  // функция для переключения сортировки
  const toggleSort = () => {
    const options: SortOption[] = ['default', 'views-desc', 'views-asc']
    const currentIndex = options.indexOf(sortBy.value)
    const nextIndex = (currentIndex + 1) % options.length
    sortBy.value = options[nextIndex]!
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
