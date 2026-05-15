export const eventBus = {
    emit(event, payload) {
        window.dispatchEvent(
            new CustomEvent(event, { detail: payload })
        )
    },

    on(event, callback) {
        window.addEventListener(event, callback)
    },

    off(event, callback) {
        window.removeEventListener(event, callback)
    }
}