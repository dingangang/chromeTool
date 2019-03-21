var cssUrl = 'http://localhost:8080/static/working/en.css'
var styleLink = document.createElement('link')
styleLink.id = 'i18n-link'
styleLink.setAttribute('href', cssUrl)
styleLink.setAttribute('rel', 'stylesheet')
styleLink.setAttribute('type', 'text/css')

var changedFlag = 0

var addStyleLink = function (bodyElement, styleLink) {
  var i18nLink = bodyElement.querySelector('#i18n-link')
  if (i18nLink) {
    bodyElement.removeChild(i18nLink)
  }

  bodyElement.appendChild(styleLink)
}

var setStyle = function (win) {
  addStyleLink(win.document.body, styleLink.cloneNode())

  for (var i = 0; i < win.frames.length; i++) {
    setStyle(win.frames[i])
  }
}

var watchStyle = function () {
  var ajax = new XMLHttpRequest()

  ajax.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        // console.log(this.responseText)
        // console.log(changedFlag)
        if (this.responseText !== changedFlag) {
          setStyle(top)
          changedFlag = this.responseText
        }

        setTimeout(() => {
          watchStyle()
        }, 3000)
      } else {
        alert('连接样式修改服务器http://localhost:8080超时，请检查服务是否已经启动，并在启动后强制刷新本页面。')
      }
    }
  }

  ajax.open('GET', 'http://localhost:8089/style-changed', true)
  ajax.send(null)
}

var disabledUIStyle = document.getElementById('disable-ui-style')

if (!disabledUIStyle) {
  watchStyle()
}
