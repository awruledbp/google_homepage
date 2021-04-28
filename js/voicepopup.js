window.onload=function() {
  var micIcon = document.getElementById('search-box-inner-mic-icon');
  micIcon.addEventListener("mouseover", mouseOver, false);
  micIcon.addEventListener("mouseout", mouseOut, false);
};

function mouseOver()
{
    var voicePopup = document.createElement("div");
    voicePopup.setAttribute("id", "voice-popup");
    voicePopup.innerHTML = 'Search by voice<div id="voice-popup-arrow-background"><div id="voice-popup-arrow-foreground"></div></div>';
    document.body.appendChild(voicePopup);
}

function mouseOut()
{
  document.getElementById('voice-popup').remove();
}
