var love = setInterval(function () {
  var r_num = Math.floor(Math.random() * 40) + 1;
  var r_size = Math.floor(Math.random() * 65) + 10;
  var r_left = Math.floor(Math.random() * 100) + 1;
  var r_bg = Math.floor(Math.random() * 25) + 100;
  var r_time = Math.floor(Math.random() * 5) + 5;

  $('.bg_heart').append(
    "<div class='heart' style='width:" +
      r_size +
      'px;height:' +
      r_size +
      'px;left:' +
      r_left +
      '%;background:rgba(255,' +
      (r_bg - 25) +
      ',' +
      r_bg +
      ',1);-webkit-animation:love ' +
      r_time +
      's ease;-moz-animation:love ' +
      r_time +
      's ease;-ms-animation:love ' +
      r_time +
      's ease;animation:love ' +
      r_time +
      "s ease'></div>"
  );

  $('.bg_heart').append(
    "<div class='heart' style='width:" +
      (r_size - 10) +
      'px;height:' +
      (r_size - 10) +
      'px;left:' +
      (r_left + r_num) +
      '%;background:rgba(255,' +
      (r_bg - 25) +
      ',' +
      (r_bg + 25) +
      ',1);-webkit-animation:love ' +
      (r_time + 5) +
      's ease;-moz-animation:love ' +
      (r_time + 5) +
      's ease;-ms-animation:love ' +
      (r_time + 5) +
      's ease;animation:love ' +
      (r_time + 5) +
      "s ease'></div>"
  );
}, 500);

var i = 0;
var txt1 =
  "Happy Valentine's Day Jadeite.....!  <<               We've Come a long way together. <<<               We fought so many battles and we won...!                                                                           > I can remmember the first day i walked up to you < just like it was Yesterday  << My heart was racing and i was Nervous < That was the best decision i ever made...! <<   I Have always envisioned my dream woman, but the truth is, You are better than anything i could have imagined...!                                                     > You stood by me in my worst and in my best...!                     << There's no place i would rather be. than to be with you...!                                                     >You mean the world to me....!                    << Thank you for everything about you, and i Love....!                                                             >Happy Valentine's Day <Thank you For saying yes to me! |                  <<<< I Love You Bunny Boo...!";
var speed = 50;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == '<')
      document.getElementById('text1').innerHTML += '</br>';
    else if (txt1.charAt(i) == '>')
      document.getElementById('text1').innerHTML = '';
    else if (txt1.charAt(i) == '|') {
      $('.bg_heart').css(
        'background-image',
        "url('data:image/jpeg;base64,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')"
      );
    } else document.getElementById('text1').innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
