function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
  
  //const text =  document.querySelector('.col span')
  //const popup = document.querySelector('.popup');

  //text.addEventListener('click', ()=>{
   // popup.classList.add('active');
 // })