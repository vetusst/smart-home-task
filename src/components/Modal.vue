<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        :class="{ isCurrent: isCurrent }"
        :style="{ transform: transformString }"
        ref="interactElement"
      >
        <header class="modal-header" id="modalTitle">
          <div>
            <b>{{ deviceDetails.name }}</b> ({{ deviceDetails.type }})
          </div>
          <button
            type="button"
            class="btn-close"
            @click="$emit('close')"
            aria-label="Close modal"
          >
            x
          </button>
        </header>
        <section class="modal-body" id="modalDescription">
          <ul>
            <li v-for="property in detailesList(deviceDetails)">
              {{ `${property[0]}: ${property[1]}` }}
            </li>
          </ul>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
import interact from "interactjs";

export default {
  name: "Modal",
  props: ["isCurrent", "deviceDetails"],
  data() {
    return {
      interactPosition: {
        x: 0,
        y: 0,
      },
    };
  },
  computed: {
    transformString() {
      const { x, y } = this.interactPosition;
      return `translate3D(${x}px, ${y}px, 0)`;
    },
  },
  mounted() {
    const element = this.$refs.interactElement;
    interact(element).draggable({
      onmove: (event) => {
        const x = this.interactPosition.x + event.dx;
        const y = this.interactPosition.y + event.dy;
        this.interactSetPosition({ x, y });
      },
    });
  },
  beforeUnmount() {
    interact(this.$refs.interactElement).unset();
  },
  methods: {
    interactSetPosition(coordinates) {
      const { x = 0, y = 0 } = coordinates;
      this.interactPosition = { x, y };
    },
    detailesList(deviceDetails) {
      return Object.entries(deviceDetails).filter(
        (elem) => !["id", "name", "type"].includes(elem[0])
      );
    },
  },
};
</script>


<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.modal {
  pointer-events: auto;
  width: 30%;
  background: #ffffff;
  box-shadow: 1px 1px 20px 1px #0000007c;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
}
@media only screen and (max-width: 768px) {
  .modal {
    width: 90%;
  }
}

.modal-header,
.modal-footer {
  padding: 10px 15px;
  display: flex;
  align-items: center;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #000;
  justify-content: space-between;
  font-size: 1.3rem;
  line-height: 1.5rem;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 10px 15px;
  height: 20vh;
}
ul {
  list-style-position: inside;
}

.btn-close {
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #000;
  background: transparent;
}

.btn-green {
  color: white;
  background: #c90000;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
