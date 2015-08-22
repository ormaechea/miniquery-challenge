
// CSS SELECTOR FUNCTION

var $ = (function(){

  var select = function(selector){
    var type = selector[0]
    if(type === '#') {
      return document.getElementById(selector.substr(1))
    }
    if(type === '.') {
      return document.getElementsByClassName(selector.substr(1))
    }
    else {
      var result = document.getElementsByTagName(selector)[0]
      // for (var i = 0 ; i < result.length ; i++){
      //   console.log(result[i])
      // }
      return result;

    }
  }

  var hide = function(selector){
    var e = select(selector);
     e.style.display = 'none';
  }

  var show = function(selector){
    var e = select(selector);
     e.style.display = 'block';
  }

  var addClass = function(klass, selector){
    var e = select(selector);
    if(e.className === ""){
      e.className = klass
    } else {
      e.className = e.className + " " + klass
    }
  }

  var removeClass = function(klass, selector){
    var e = select(selector);
    for(var i=0;i<e.classList.length;i++){
      if(e.classList[i] === klass){
        e.classList.remove(klass)
      }
    }
  }

  return {
    select: select,
    hide: hide,
    show: show,
    addClass: addClass,
    removeClass: removeClass
  }
})()

// EVENTLISTENER FUNCTION
var EventDispatcher = (function(){

  var on = function( selector, event) {
    var element = SweetSelector.select(selector)
    var someThing = function(){
      console.log('awesome');
    }
    element.addEventListener(event, someThing)
  }
  return{
    on: on
  }
})()

// var AjaxWrapper = (function(){
//   var request =  new XMLHttpRequest();

//   var get = function( type, url){
//     request.open(tpye, url, true);

//     request.onload = function(fullfill, reject) {
//       if(request.status >= 200 && request.status < 400) {
//         console.log("success")
//         var response = request.responseText;
//         fullfill(response);
//       } else {
//         reject();
//         console.log("reached server but there is an error")
//       }
//     };

//     request.onerror = function() {
//       console.log("There is a connection error of someSort")
//     }

//     request.send();

//   }

  // oReq.addEventListener('load', reqListener);
  // oReq.open("get", url, true);
  // oReq.send();

// })()



