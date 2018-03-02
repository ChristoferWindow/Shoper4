
function main_infobtn()
{
  if($('#war_stats').length>0)
  {
    if($('#war_stats').attr('data-war_stats') == "tak")
    {
      show_warstats();
    }
    else if($('#war_stats').attr('data-war_stats')=="nie")
    {
        $('.ico_js_i_warianty').closest('.ico_js_a').remove();
    }
    if($('#war_stats').attr('data-materialy')== "tak")
    {
      show_matstats();
    }
    if($('#war_stats').attr('data-wymiary')=="nie")
    {
      $('.ico_js_i_zmiana').closest('.ico_js_a').remove();
    }
    if($('#war_stats').attr('data-wymiary')=="tak")
    {
      show_sizestats();
    }

    $('.ico_js_i_warianty').click(function(e){
        $('.js_div_warianty').toggle("fast").siblings('div').slideUp();
        $(this).css('color','#1e9eec').siblings('.ico_js_a').css('color','#555555');
    });
    $('.ico_js_i_material').click(function(e){
        $('.js_div_material').toggle("fast").siblings('div').slideUp();
            $(this).css('color','#1e9eec').siblings('.ico_js_a').css('color','#555555');
    });
    $('.ico_js_i_zmiana').click(function(e){
        $('.js_div_zmiana').toggle("fast").siblings('div').slideUp();
            $(this).css('color','#1e9eec').siblings('.ico_js_a').css('color','#555555');
    });
    $('.ico_js_i_mocowanie').click(function(e){

    });
    //add mocowanie
    $('.ico_js_i_custom').click(function(e){
        $('.js_div_custom').toggle("fast").siblings('div').slideUp();
            $(this).css('color','#1e9eec').siblings('.ico_js_a').css('color','#555555');
    });


  }
}

function show_warstats()
{
  var war_stats = document.getElementById('war_stats');
  var war_ins_box = document.getElementsByClassName('js_div_warianty');
  var war_ile = war_stats.getAttribute('data-war_ile');
  var war_best = war_stats.getAttribute('data-war_best');
  var war_cheap = war_stats.getAttribute('data-war_cheap');
  var war_ile_len = war_ile.length;
  var war_best_len = war_best.length;
  var war_cheap_len = war_cheap.length;


  console.log('war_stat:'+war_stats+' war_inst_box:'+war_ins_box);
  if(war_ile_len !==0  || war_best_len!==0 ||  war_cheap_len!==0)
  {
    console.log("inside");
    war_ins_box[0].innerHTML += '<div class="prod_war_title">Szczegóły wariantów</br></div>';
    if(war_ile_len!==0)
    {
      war_ins_box[0].innerHTML += '<div class="prod_war_obj"><div class="prod_war_obj_tit">Ilość wariantów:&nbsp; </div> <div class="prod_war_obj_par">'+war_ile+'</div></div>';
    }
    if(war_best_len!==0)
    {
      war_ins_box[0].innerHTML += '<div class="prod_war_obj"><div class="prod_war_obj_tit">Bestseller: &nbsp; </div>  <div class="prod_war_obj_par">'+war_best+'</div></div>';
    }
    if(war_cheap_len!==0)
    {
      war_ins_box[0].innerHTML += '<div class="prod_war_obj"><div class="prod_war_obj_tit">Najtańszy: &nbsp; </div><div class="prod_war_obj_par">'+war_cheap+'</div></div>';
    }
  }
}
function show_matstats(obj)
{


}
function show_sizestats(obj)
{
      let index = size_index();
      let zmiana = document.getElementsByClassName('js_div_zmiana');
      for(let i=0;i<index.length;i++)
      {
        zmiana[0].innerHTML+='<div class="size_war_obj"><div class="size_war_obj_let">'+index[i][0]+'</div><div class="size_war_obj_val">'+index[i][1]+'</div>';
      }

}
function hide_others(obj_cl)
{
  e.preventDefault();
  let $this = $(this).parent().find('.js_div_box');
  $('.js_div_box').not($this).slideUp();
  $this.toggle();
}

$(document).ready(main_infobtn);
