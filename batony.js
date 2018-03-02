
function main_infobtn()
{
  if($('#war_stats').length>0)
  {
    if($('#war_stats').attr('data-war_stats') == "tak")
    {
      $('.ico_js_i_warianty').closest('.ico_js_a').remove();

    }
    else if($('#war_stats').attr('data-war_stats')=="nie")
    {
        show_warstats();
    }
    if($('#war_stats').attr('data-materialy')== "tak")
    {
      show_matstats();
    }
    $('.ico_js_i_warianty').click(function(e){
      hide_others(e);
      $('.js_div_warianty').toggleDown("slow");
    });
    $('.ico_js_i_material').click(function(e){
      hide_others(e);
      $('.js_div_').toggleDown("slow");
    });
    $('.ico_js_i_warianty').click(function(e){
      hide_others(e);
      $('.js_div_warianty').toggleDown("slow");
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
function hide_others()
{
  let $this = $(this).parent().find('.js_div_box');
  $('.js_div_box').not($this).hide();
}

$(document).ready(main_infobtn);
