const watermark = {
  set(str: string): void {
    let id = setWatermark(str)
    setTimeout(() => {
      if (document.getElementById(id) === null) {
        id = setWatermark(str)
      }
    }, 1000)
    window.onresize = () => {
      setWatermark(str)
    }
  }
}

const setWatermark = (str: string) => {
  const id = '1.23452384164.123412415'

  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id) as HTMLElement)
  }

  const can = document.createElement('canvas')
  can.width = 180
  can.height = 120

  const cans = can.getContext('2d')
  if (cans !== null) {
    cans.rotate(-0.27)
    cans.font = '14px Vedana'
    cans.fillStyle = 'rgba(200, 200, 200, 0.30)'
    cans.textAlign = 'left'
    cans.textBaseline = 'middle'
    cans.fillText(str, can.width / 3, can.height / 2)
  }
  const div = document.createElement('div')
  div.id = id
  div.style.pointerEvents = 'none'
  div.style.top = '70px'
  div.style.left = '0px'
  div.style.position = 'fixed'
  div.style.zIndex = '100000'
  div.style.width = document.documentElement.clientWidth - 100 + 'px'
  div.style.height = document.documentElement.clientHeight - 100 + 'px'
  div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
  document.body.appendChild(div)
  return id
}

export default watermark
