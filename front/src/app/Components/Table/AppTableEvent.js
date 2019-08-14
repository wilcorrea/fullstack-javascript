/**
 */
export default {
  /**
   */
  mounted () {
    if (!this.pressHold || !(this.$el && typeof this.$el.querySelector === 'function')) {
      return
    }
    let element = this.$el.querySelector('[move]')
    if (!element) {
      return
    }
    this.element = element

    let x = 0
    let y = 0
    let top = 0
    let left = 0

    let draggingFunction = (e) => {
      element.scrollLeft = left - e.pageX + x
      element.scrollTop = top - e.pageY + y
    }

    this.dragging = (event) => {
      this.element.style['cursor'] = 'move'
      this.element.style['user-select'] = 'none'
      event.preventDefault()
      y = event.pageY
      x = event.pageX
      top = element.scrollTop
      left = element.scrollLeft

      document.addEventListener('mousemove', draggingFunction)

      this.stopDragging = () => {
        document.removeEventListener('mousemove', draggingFunction)
        this.element.style['cursor'] = 'inherit'
        this.element.style['user-select'] = 'inherit'
      }
      document.addEventListener('mouseup', this.stopDragging)
      element.addEventListener('mouseleave', this.stopDragging)
    }

    let timerID
    let counter = 0
    const pressingDown = (e) => {
      this.event = e
      requestAnimationFrame(timer)
    }
    const notPressingDown = (e) => {
      cancelAnimationFrame(timerID)
      counter = 0
    }
    const timer = () => {
      if (counter < 50) {
        timerID = requestAnimationFrame(timer)
        counter++
        return
      }
      this.dragging(this.event)
    }

    element.addEventListener('mousedown', pressingDown, false)
    element.addEventListener('mouseup', notPressingDown, false)
    element.addEventListener('mouseleave', notPressingDown, false)
  },
  /**
   */
  destroyed () {
    if (!this.element) {
      return
    }
    this.element.removeEventListener('pressHoldEvent', this.dragging)
    this.element.removeEventListener('mouseleave', this.stopDragging)
    if (this.stopDragging) {
      document.removeEventListener('mouseup', this.stopDragging)
    }
  }
}
