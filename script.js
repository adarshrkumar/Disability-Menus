const APPS = [
  'actions', 
  'settings', 
  'files', 
  'browser', 
  'explore', 
  'store', 
  'library', 
]

myTimer()
setInterval(myTimer, 1000);
  	  
function myTimer() {
 	const d = new Date();
  time = d.toLocaleTimeString()
  var TIME = time.split(':', 3)
  time = TIME[0] + ':' + TIME[1]
 	var element = document.querySelector("#time")
  element.innerHTML = time;
}

function openApp(app) {
  let iframe = document.querySelector('#screen')
  iframe.setAttribute('src', `/${app}.html`)
  document.title = app
}

function addApp(parent, name, cSelector, color, innerhtml) {
  parent = document.querySelector(parent)
  let element = document.createElement('div')
  element.setAttribute('class', cSelector)
  element.setAttribute('id', name)
  element.setAttribute('onclick', `openApp('${name}')`)
  if (color !== '') {
    element.setAttribute('style', `--color: ${color};`)
  }
  if (innerhtml !== '') {
    element.innerHTML = innerhtml
  }
  parent.appendChild(element)
}

addApp('.apps', 'app1', 'app', 'red', '')
addApp('.apps', 'app2', 'app', 'blue', '')
addApp('.apps', 'app3', 'app', 'green', '')
addApp('.apps', 'app4', 'app', 'orange', '')
addApp('.apps', 'app5', 'app', 'purple', '')
addApp('.controls', 'settings', 'control', '', 'Settings')
addApp('.controls', 'files', 'control', '', 'Files')
addApp('.controls', 'browser', 'control', '', 'Browser')