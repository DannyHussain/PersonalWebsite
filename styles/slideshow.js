var imgadr= ['images/slideshow/1.jpg','images/slideshow/2.jpg','images/slideshow/3.jpg','images/slideshow/4.jpg','images/slideshow/5.jpg',
'images/slideshow/6.jpg','images/slideshow/7.jpg','images/slideshow/8.jpg','images/slideshow/9.jpg','images/slideshow/10.jpg',
'images/slideshow/11.jpg','images/slideshow/12.jpg','images/slideshow/13.jpg','images/slideshow/14.jpg','images/slideshow/15.jpg',
'images/slideshow/16.jpg','images/slideshow/17.jpg','images/slideshow/18.jpg','images/slideshow/19.jpg','images/slideshow/20.jpg',
'images/slideshow/21.jpg','images/slideshow/22.jpg','images/slideshow/23.jpg','images/slideshow/25.jpg',
'images/slideshow/26.jpg'];

var cnt= 0;

var timer;


function sliderTimer()
{
  timer= setInterval(slider, 5000);
}

function slider()
{
  cnt++;
  if(cnt == imgadr.length)
    cnt= 0;

  var slider= document.getElementById('slider');
  slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  document.getElementById('sliderHeader').innerHTML= '';  
  document.getElementById('sliderPara').innerHTML= '';
}

function next()
{
  clearInterval(timer);
  
  cnt++; 
  if(cnt == imgadr.length)
    cnt= 0;

  var slider= document.getElementById('slider');
  slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  document.getElementById('sliderHeader').innerHTML= '';
  document.getElementById('sliderPara').innerHTML= '';
  
  sliderTimer();
}

function prev()
{
  console.log('prev');
  clearInterval(timer);
  
  cnt--;
  if(cnt == -1)
    cnt= imgadr.length-1;

  var slider= document.getElementById('slider');
  slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  document.getElementById('sliderHeader').innerHTML= '';
  document.getElementById('sliderPara').innerHTML= '';

  sliderTimer();
}
