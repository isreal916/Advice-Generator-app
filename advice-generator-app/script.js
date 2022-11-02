const advice_slip = document.getElementById('advice-slip');
const advice_id =document.getElementById('ad-id');
function generate(){
    $.ajax({
        url:'https://api.adviceslip.com/advice',
        type:'get',
        success:function(res){
         
           const data =JSON.parse(res);
           console.log(data.slip.advice)
           advice_slip.innerHTML = `<q>${data.slip.advice}</q>`;
           advice_id.innerHTML = `#${data.slip.id}`         
         
        }
    })
}