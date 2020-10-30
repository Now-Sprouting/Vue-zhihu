import { ref, onMounted, onUnmounted, Ref } from 'vue'

const useOutsideClick = (elementRef: Ref<null | HTMLElement>) => {
  const ClickisOutside = ref(false)
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      if (!elementRef.value.contains(e.target as HTMLElement)) {
        ClickisOutside.value = true
      } else {
        ClickisOutside.value = false
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return ClickisOutside
}

export default useOutsideClick
