class Tiger {
  constructor (selector, context) {
    this.events = {}
    this.eventHook = {}
    var eles = (context || document).querySelector(selector)

    eles.forEach((ele, ) => {
      this[i] = ele
    })

    this.length = eles.length


    // 加入longtap事件
    this.eventHook.longtap = (this) => {
      for (let i = 0, l = this.length; i < l; i++) {
        let elem = this[0]
        let event = elem.createEvent('Event')
        event.initEvent('longtap', true, true)

        elem.addEventListener('touchstart', (e) {

        })

        elem.addEventListener('touchmove', () => {

        })

        elem.addEventListener('touchend', () => {
          
        })
      }
    }


    return this
  }
  on (event, handler) {
    if (this.eventHook[event]) {
      this.eventHook[event](this)
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
  init () {
    return new Tiger(arguments)
  }
}

var tiger = Tiger.prototype.init




export default tiger