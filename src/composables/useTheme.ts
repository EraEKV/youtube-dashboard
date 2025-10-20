import { ref, watch, inject, type InjectionKey, type Ref } from 'vue'


// изменение темы сохраняется в localStorage с этим ключом
const THEME_KEY = 'youtube-mini-theme'

export interface ThemeContext {
  isDark: Ref<boolean>
  toggleTheme: () => void
}

// символ для provide/inject
export const ThemeSymbol: InjectionKey<ThemeContext> = Symbol('theme')

export function useTheme() {
  const getInitialTheme = (): boolean => {
    const stored = localStorage.getItem(THEME_KEY)
    return stored ? stored === 'dark' : true
  }

  const isDark = ref(getInitialTheme())

  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  watch(
    isDark,
    (value) => {
      localStorage.setItem(THEME_KEY, value ? 'dark' : 'light')
      document.documentElement.classList.toggle('dark', value)
    },
    { immediate: true },
  )

  return {
    isDark,
    toggleTheme,
  }
}

// хук для получения темы из контекста
export function useThemeContext() {
  const theme = inject(ThemeSymbol)
  if (!theme) {
    throw new Error('useThemeContext must be used within a theme provider')
  }
  return theme
}
