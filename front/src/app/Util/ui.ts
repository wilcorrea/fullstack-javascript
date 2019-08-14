import Vue from 'vue'

/**
 * @param {string} name
 * @param {any} component
 */
export const register = (name: string, component: any): void => {
  Vue.component(name, component)
}

/**
 * @param {Element} element
 * @param {number} duration
 */
export const scrollUp = (element: Element, duration: number = 256) => {
  if (!element || typeof element !== 'object') {
    return
  }
  let counter = element.scrollTop
  scroller(element, (options: any) => {
    options.scrollCount += Math.PI / (duration / (options.newTimestamp - options.oldTimestamp))
    if (options.scrollCount >= Math.PI) {
      element.scrollTo(0, 0)
      return
    }
    if (counter <= 0) {
      return
    }
    counter = counter - duration / 10
    return Math.round(counter)
  })
}

/**
 * @param {Element} element
 * @param {number} duration
 */
export const scrollDown = (element: Element, duration: number = 256) => {
  if (!element || typeof element !== 'object') {
    return
  }
  const max = element.scrollHeight
  let counter = element.scrollTop
  scroller(element, (options: any) => {
    options.scrollCount += Math.PI / (duration / (options.newTimestamp - options.oldTimestamp))
    if (options.scrollCount >= Math.PI) {
      element.scrollTo(0, max)
      return
    }
    if (counter >= max) {
      return
    }
    counter = counter + duration / 10
    return Math.round(counter)
  })
}

/**
 * @param {Element} element
 * @param {Function} factor
 */
export const scroller = (element: Element, factor: Function) => {
  const options = {
    scrollCount: 0,
    oldTimestamp: performance.now(),
    newTimestamp: 0
  }

  const step = (newTimestamp: number) => {
    options.newTimestamp = newTimestamp
    const value = factor(options)
    if (!value) {
      return
    }
    element.scrollTo(0, value)
    options.oldTimestamp = newTimestamp
    window.requestAnimationFrame(step)
  }

  window.requestAnimationFrame(step)
}

/**
 * @returns {string}
 */
export const color = (): string => {
  const letters = '0123456789ABCDEF'
  const matches = []
  for (let i = 0; i < 6; i++) {
    matches.push(letters[Math.floor(Math.random() * 16)])
  }
  return `#${matches.join('')}`
}
