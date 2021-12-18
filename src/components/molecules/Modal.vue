<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="fixed top-0 left-0 z-10 w-full h-screen bg-black opacity-75"></div>
    <transition name="dialog">
      <dialog open v-if="show" class="fixed z-10 w-4/5 m-0 overflow-hidden bg-white border-0 rounded-3xl">
        <section class="flex justify-center p-8">
          <slot></slot>
        </section>
        <menu v-if="!fixed" class="flex justify-center px-20">
          <slot name="actions">
            <button @click="tryClose" class="w-1/3 py-2 bg-red-500 rounded-full ">Close</button>
          </slot>
        </menu>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['close'],
  setup (props, context) {
    const tryClose = () => {
      if (props.fixed) {
        return;
      }
      context.emit('close');
    }

    return {
      tryClose,
    }
  },
};
</script>

<style scoped>

dialog {
  top: 20vh;
  left: 10%;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>