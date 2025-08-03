<template>
  <section class="contact">
    <h2 class="contact__title">Contact</h2>
    <p>이름 : 이소희</p>
    <div class="flex items-center">
      <span class="font-semibold mr-2">이메일:</span>
      <span ref="emailRef" class="font-mono">{{ email }}</span>
      <button
        type="button"
        class="btn-copy ml-4"
        @click="handleCopy('email')"
        :disabled="isCopying('email')"
        aria-live="polite"
      >
        <span v-if="status.email === 'idle'">복사</span>
        <span v-else-if="status.email === 'copied'">복사됨 ✓</span>
        <span v-else-if="status.email === 'error'">실패 ⚠️</span>
      </button>
    </div>
    <div class="flex items-center mb-3">
      <span class="font-semibold mr-2">전화번호:</span>
      <span ref="phoneRef" class="font-mono">{{ phone }}</span>
      <button
        type="button"
        class="btn-copy ml-4"
        @click="handleCopy('phone')"
        :disabled="isCopying('phone')"
        aria-live="polite"
      >
        <span v-if="status.phone === 'idle'">복사</span>
        <span v-else-if="status.phone === 'copied'">복사됨 ✓</span>
        <span v-else-if="status.phone === 'error'">실패 ⚠️</span>
      </button>
    </div>
    <p>포트폴리오 : <a href="https://leesh00.github.io/portfolio">https://leesh00.github.io/portfolio</a></p>
  </section>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'

const email = 'lsohi2468@gmail.com'
const phone = '010-3927-5462'

type Field = 'email' | 'phone'
const status = reactive<Record<Field, 'idle'|'copying'|'copied'|'error'>>({
  email: 'idle',
  phone: 'idle',
})

function isCopying(field: Field) {
  return status[field] === 'copying'
}

// 실제 복사작업 함수 (Async + fallback)
async function copyText(text: string) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    return navigator.clipboard.writeText(text)
  } else {
    // fallback : hidden textarea + execCommand('copy')
    const ta = document.createElement('textarea')
    ta.value = text
    ta.setAttribute('readonly', '')
    ta.style.position = 'fixed'
    ta.style.left = '-9999px'
    document.body.appendChild(ta)
    ta.select()
    let success = false
    try {
      success = document.execCommand('copy')
    } catch { success = false }
    document.body.removeChild(ta)
    if (!success) throw new Error('execCommand 실패')
  }
}

async function handleCopy(field: Field) {
  if (status[field] !== 'idle') return
  status[field] = 'copying'
  try {
    await copyText(field === 'email' ? email : phone)
    status[field] = 'copied'
  } catch {
    status[field] = 'error'
  } finally {
    setTimeout(() => {
      status[field] = 'idle'
    }, 1200)
  }
}
</script>