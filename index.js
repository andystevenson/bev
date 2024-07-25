const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect()
  const { innerHeight, innerWidth } = window
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
}

// e.g. 100x100 viewport and a 10x10px element at position
// {top: -1, left: 0, bottom: 9, right: 10}
function birthday() {
  let trigger = document.querySelector('.birthday')
  let count = 5
  while (count) {
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2,
      },
    })
    count--
  }
}

setInterval(() => {
  let trigger = document.querySelector('.birthday')
  let visible = elementIsVisibleInViewport(trigger)
  console.log('trigger', visible)
  if (visible) {
    birthday()
  }
}, 500)
