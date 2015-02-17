# Simple Smooth Scroll

A lightweight script to animate scrolling to anchor links. this simple script work with [jQuery easing](http://gsgd.co.uk/sandbox/jquery/easing/)

## Getting Started

Download and include in your folder or just copy paste the smoothScroll function from [Simple Smooth Scroll](https://github.com/mlbd/simple-smooth-scroll/blob/master/simple-smooth-scroll.js)

## Initialize 

before using simple smooth scroll use id/class in your anchor tag like 
```
<a href="#exampleId">example<a/>
<div id="exampleId"><!-- your markup --></div>

$('#exampleId').smoothScroll();
```


## Extra options

```
$('#exampleId').smoothScroll({
  duration : 500,
  animation: "easeInExpo"
});

```

you can pass multiple element in smoothScroll function like

```
$('.example a, .exmapleB a, .exmapleC a').smoothScroll();

```
