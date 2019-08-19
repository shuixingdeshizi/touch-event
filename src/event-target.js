class EventTarget {
  constructor () {
    this.events = {}
    this.eventHook = {}
  }
  on (event, handler) {
    if (this.eventHook[event]) {
      this.eventHook[event]
    }

    if (!this.events[event]) {
      this.events[event] = []
    }
    
    this.events.push(handler)
  }
  trigger (event) {
    if (!this.events[event]) {
      return
    }
    this.events[event].forEach(handler => {
      handler()
    })
  }
}