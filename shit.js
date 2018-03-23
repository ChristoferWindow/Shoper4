<script>
function main_assign()
     {
       var tes_exi = document.getElementById('option_10');
       var tes_exi2 = document.getElementById('option_33');
       if((typeof(tes_exi)!='undefined' && tes_exi !=null) || (typeof(tes_exi2)!='undefined' && tes_exi2 !=null) )
       {
         var index = size_index();
         var keys =[];
         console.log("index type"+typeof(index));

         for(var k in index){console.log("Keys:"+k);}

         console.log("index:"+index);
         console.log("main values");
         assign_values(index);
       }

     }
      function main_infobtn()
     {
       $('.ico_js_a').css('display','none');
       if($('#war_stats').length)
       {
         $('.ico_js_a').css('display','visible');
         if($('#war_stats').attr('data-war_stats') == "tak")
         {
           show_warstats();
         }
         else if($('#war_stats').attr('data-war_stats')!="tak")
         {
             $('.ico_js_i_warianty').closest('.ico_js_a').remove();
         }

         if($('#war_stats').attr('data-materialy')== "tak")
         {
           show_matstats();
         }
         else if($('war_stats').attr('data-materialy')!="tak")
         {
              $('.ico_js_i_material').closest('.ico_js_a').remove();
         }

         if($('#war_stats').attr('data-wymiary')=="tak")
         {
           show_sizestats();
         }
         else if($('#war_stats').attr('data-wymiary')!="tak")
         {
           $('.ico_js_i_zmiana').closest('.ico_js_a').remove();
         }
         if($('#war_stats').attr('data-personalizacja')== "tak")
         {
           show_perstats();
         }
        else if($('#war_stats').attr('data-personalizacja')!="tak")
         {
              $('.ico_js_i_custom').closest('.ico_js_a').remove();
         }
         if($('#war_stats').attr('data-mocowanie')=="tak")
         {

         }
         else if($('war_stats').attr('data-mocowanie')!="tak")
         {
           $('.ico_js_i_mocowanie').closest('.ico_js_a').remove();
         }

      $('.ico_js_i').click(function(){
        if(!$(this).hasClass('ico_js_active')) {
           $('.ico_js_i').removeClass('ico_js_active');
           $(this).addClass('ico_js_active');
         }
        else if($(this).hasClass('ico_js_active'))
        {
          $(this).removeClass('ico_js_active');
        }
      });
        $('.ico_js_i_warianty').click(function(e){
       $('.js_div_warianty').toggle("fast").siblings('div').slideUp();
      });
      $('.ico_js_i_material').click(function(e){
        $('.js_div_material').toggle("fast").siblings('div').slideUp();
      });
      $('.ico_js_i_zmiana').click(function(e){
           $('.js_div_zmiana').toggle("fast").siblings('div').slideUp();
      });
        $('.ico_js_i_mocowanie').click(function(e){
          $('.js_div_mocowanie').toggle("fast").siblings('div').slideUp();
       });
         //add mocowanie
       $('.ico_js_i_custom').click(function(e){
             $('.js_div_custom').toggle("fast").siblings('div').slideUp();
        });

       }
       else{
         $('.dymek_css').css('border','none');
         if(document.getElementById('przecenajs')==null || typeof(document.getElementById('przecenajs'))=='undefined')
         {
           $('.promo_container').css('display','none');
         }
       }
}
     //get values from selection tag and assign sizes




     //index sizes from table
     function size_index(){
       let table = document.getElementsByClassName("product_table_cus");
       var index= [];
       var i_index = 0;
       var iter = 0; //index of first dim of array
       var len = table[0].rows.length;
       console.log("Len:"+len);
       while(i_index<len) {
          //iterate trough rows




              console.log("second for, iter:"+ i_index);
              var col_inner = table[0].rows[i_index].cells[0].innerHTML; //size param
              var col_param = table[0].rows[i_index].cells[1].innerHTML;//size value
              var col_size = col_inner.substr(col_inner.indexOf(' ')+1);
               console.log("Rozmiar:"+ col_size+"  Wartość:"+col_param);
       //       index[1][0].push("col_size");
         //     index[i_index][1].push(col_param);
               if(col_inner.search("Rozmiar")!==-1)
               {
                 console.log("Inner wtf:"+col_inner+"Ite:"+iter);
                 index[iter] = index[iter] || [];
                 index[iter].push(col_inner,col_param);
                 console.log("Index+:"+index[iter]);
                 console.log("Ind:"+col_inner+"Val:"+col_param);
                 iter++;
               }
               else if(col_inner.search("Rozmiar")==-1){

               }
          i_index++;

        }
        return index;
     }

     function assign_values(ind){
        console.log("assing values");
        var index = ind;
        var size_list=0;
        var ele = document.getElementById('option_10');
        var ele2 = document.getElementById('option_33');
        if(typeof(ele2)!='undefined' && ele2 !=null)
        {
          size_list =  document.getElementById('option_33');
          console.log("option 33");
        }
        else if(typeof(ele)!='undefined' && ele !=null)
        {
          size_list= document.getElementById('option_10');
          console.log("option 10");
        }

        console.log("Size list:"+size_list);
        var len_si = size_list.length-1;
        var len_arr = index.length;
        var arr_it = 0;

        for(var z=1;z<=len_si;z++)
        {
          console.log("inside index:"+index[arr_it][1]+"z:"+arr_it);
          size_list.options[z].innerHTML += "  ("+index[arr_it][1]+")";
          arr_it++;

        }


      }

      function show_warstats()
      {
        var war_stats = document.getElementById('war_stats');
        var war_ins_box = document.getElementsByClassName('js_div_warianty');
        var war_ile = (war_stats.hasAttribute('data-war_ile'))? war_stats.getAttribute('data-war_ile'):0;
        var war_best = (war_stats.hasAttribute('data-war_best'))? war_stats.getAttribute('data-war_best'):0;
        var war_cheap = (war_stats.hasAttribute('data-war_cheap'))?war_stats.getAttribute('data-war_cheap'):0;



        console.log('war_stat:'+war_stats+' war_inst_box:'+war_ins_box);
        if(war_ile >0   || war_best >0 ||  war_cheap>0)
        {
          console.log("inside");
          war_ins_box[0].innerHTML +='<div class="prod_war_title">Szczegóły wariantów</br></div>';
          if(war_ile.length>0)
          {
            war_ins_box[0].innerHTML +='<div class="prod_war_obj"><div class="prod_war_obj_tit">Ilość wariantów:&nbsp; </div> <div class="prod_war_obj_par">'+war_ile+'</div></div>';
          }
          if(war_best.length>0)
          {
                war_ins_box[0].innerHTML +='<div class="prod_war_obj"><div class="prod_war_obj_tit">Bestseller: &nbsp; </div>  <div class="prod_war_obj_par">'+war_best+'</div></div>';
          }
          if(war_cheap.length>0)
          {
              war_ins_box[0].innerHTML +='<div class="prod_war_obj"><div class="prod_war_obj_tit">Najtańszy: &nbsp; </div><div class="prod_war_obj_par">'+war_cheap+'</div></div>';
          }
        }
      }
      function show_matstats(obj)
      {


      }
      function show_perstats()
      {
        let personalise = $('#war_stats');
        let div_cus = document.getElementsByClassName('js_div_custom');
        if(personalise.attr('data-inny-tekst')=="tak")
        {
          div_cus[0].innerHTML+='<p>Możliwość zmiany tekstu</p>';
        }
        if(personalise.attr('data-inny-ksztalt')=="tak")
        {
          div_cus[0].innerHTML+='<p>Możliwość zmiany kształtu</p>';
        }
        if(personalise.attr('data-inny-rozmiar')=="tak")
        {
          div_cus[0].innerHTML+='<p>Możliwość zmiany rozmiaru</p>';
        }
      }
      function show_sizestats(obj)
      {
            let index = size_index();
            let zmiana = document.getElementsByClassName('js_div_zmiana');
            if($('#war_stats').attr('data-ulozenie')=="tak")
            {
              zmiana[0].innerHTML+='<div class="size_war_ulo">Możliwe jest inne ułożenie elementów.</div>';
            }
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


      $(document).ready(main_assign);
      $(document).ready(main_infobtn);


</script>
<script>

(function() {
  $.fn.rotateClass = function(cls1, cls2, cls3, cls4) {
    if ($(this).hasClass(cls1)) {
      return $(this).removeClass(cls1).addClass(cls2);
    } else if ($(this).hasClass(cls2)) {
      return $(this).removeClass(cls2).addClass(cls3);
    } else if ($(this).hasClass(cls3)) {
    return $(this).removeClass(cls3).addClass(cls4);
    } else if ($(this).hasClass(cls3)) {
      return $(this).removeClass(cls4).addClass(cls1);
    } else {
      return $(this).toggleClass(cls1); // Default case.
    }
  }
})(jQuery);

$("#guzior3de").on('click', function(e) {
  $("#font_view").rotateClass('blacktekst3d', 'sklejkatekst3d', 'whitetekst3d', 'zwyklytext3de');
});

</script>

<script>




$(document).ready(function(){
    $("#guzior3detlo0").click(function(){
    $("#font_content").css
    ("background","#fff")
      ;});});

$(document).ready(function(){
    $("#guzior3detlo1").click(function(){
    $("#font_content").css
    ("background","#EAF1F9")
      ;});});

$(document).ready(function(){
    $("#guzior3detlo2").click(function(){
   $("#font_content").css
    ("background","rgb(254, 239, 244)")
      ;});});

$(document).ready(function(){
    $("#guzior3detlo3").click(function(){
    $("#font_content").css
    ("background","#FDF0DC")
      ;});});

$(document).ready(function(){
    $("#guzior3detlo3b").click(function(){
    $("#font_content").css
    ("background","rgb(154, 154, 154)")
      ;});});
      
$(document).ready(function(){
    $("#guzior3detlo4").click(function(){
    $("#font_content").css
    ("background","url(/public/assets/sciany/ca4.jpg)")
      ;});});
  
$(document).ready(function(){
    $("#guzior3detlo5").click(function(){
    $("#font_content").css
    ("background","url(/public/assets/sciany/ca5.jpg)")
      ;});});
      
      $(document).ready(function(){
    $("#guzior3detlo6").click(function(){
    $("#font_content").css
    ("background","url(/public/assets/sciany/ca13.jpg)")
      ;});});
      
      $(document).ready(function(){
    $("#guzior3detlo7").click(function(){
    $("#font_content").css
    ("background","url(/public/assets/sciany/ca8.jpg)")
      ;});});
      
       $(document).ready(function(){
    $("#guzior3detlo8").click(function(){
    $("#font_content").css
    ("background","url(/public/assets/sciany/ca9vol.jpg)")
      ;});});
      
</script>       
      
      
      
      
      
      
      
      
      
      <script>

$(document).ready(function()
{$(".replace-img-list img").hover(function(){$(this).attr("src",$(this).attr("data-src-alt"));}
,function(){$(this).attr("src",$(this).attr("data-src"));});}); 
$(document).ready(function(){
    $('.projects_select_3de').click(function(){
    var tab_id = $(this).attr('data-tab');
    $('.projects_select_3de').removeClass('current');
    $('.tab-content_3de').removeClass('current');
    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

})</script>
      
      
      





















<script>

if( jQuery(".faq3de .faq3de-naglowek").hasClass('active') ){
    jQuery(".faq3de .faq3de-naglowek.active").closest('.faq3de').find('.faq3de-rozwiniety').show();
  }
  jQuery(".faq3de .faq3de-naglowek").click(function(){
    if( jQuery(this).hasClass('active') ){
      jQuery(this).removeClass("active").closest('.faq3de').find('.faq3de-rozwiniety').slideUp(200);
    }
    else{ jQuery(this).addClass("active").closest('.faq3de').find('.faq3de-rozwiniety').slideDown(200);
    }
  });</script>


























<script type="text/javascript">
function GetClock(){
var d=new Date();
var nhour=d.getHours(),nmin=d.getMinutes();
if(nmin<=9){ nmin="0"+nmin}
if($('#clockbox3de'))
{
  $('#clockbox3de').append(nhour+':'+nmin);
}
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}
</script>








<script>
var czas = new Date;
var dzien = czas.getDay();
var godz = czas.getHours();
if ( $('#godzinypracy3de2a') && dzien>0 && godz>=7 && godz<20) 
{
$("#godzinypracy3de2a").append("Jesteśmy online. Twoje zamówienie zostanie przyjęte w przeciągu kilku minut.");
}
else if($('#godzinypracy3de2a'))   
{
$("#godzinypracy3de2b").append( "Złóż zamówienie teraz, a przyjmiemy je z samego rana. Pracujemy od godz. 8:00");
}
</script>



<script type="text/javascript">
function GetClock()
{
var d=new Date();
var nhour=d.getHours(),nmin=d.getMinutes();
if(nmin<=9){ nmin="0"+nmin }
if($('#clockbox3de2'))
{
  
  $('#clockbox3de2').append(nhour+':'+nmin);
}
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}
</script>












<script>


if(subject!=null && scraper!=null && after!=null)
{  
var subject = document.querySelector('.before-and-after');
var scraper = document.querySelector('.subject-scraper');
var after = document.querySelector('.subject-after');

var distance = (window.innerWidth - subject.clientWidth) / 2;
window.onresize = recalculateDistance;

var px = 0;
var touches = [];

subject.addEventListener('mousemove', dragScraper, false);
subject.addEventListener('touchmove', dragScraper, false);

function recalculateDistance() {

  distance = (window.innerWidth - subject.clientWidth) / 2;
  
}

function dragScraper(event) {
  
  px = event.clientX - distance;
  
  if(px == null) {
    touches = event.touches;
    px = touches[0].clientX - distance;
  }
  
  if(px < 0) {
    px = 0;
  }
  
  scraper.style.transform = 'translate(' + px + 'px, 0)';
  after.style.transform = 'translate(-' + px + 'px, 0)';
  
}
}

</script>
























<script>

if($('#font_main_editor'))
{

( function( $ ) {

  var settings;

  var methods = {
    init : function(options) {

      settings = $.extend( {
        'hide_fallbacks' : false,
        'selected' : function(style) {},
        'opened' : function() {},
        'closed' : function() {},
        'initial' : '',
        'fonts' : []
      }, options);

      var root = this;
      var $root = $(this);
      root.selectedCallback = settings['selected'];
      root.openedCallback = settings['opened'];
      root.closedCallback = settings['closed'];
      var visible = false;
      var selected = false;
      var openedClass = 'fontSelectOpen';

      var displayName = function(font) {
        if (settings['hide_fallbacks'])
          return font.substr(0, font.indexOf(','));
        else
          return font;
      }

      var select = function(font) {
        root.find('span').html(displayName(font).replace(/['']{1}/gi,""));
        root.css('font-family', font);
        selected = font;

        root.selectedCallback(selected);
      }

      var positionUl = function() {
        var left, top;
        console.log('ROOT:'+$(this).get(0));
        left = $(this).offset().left;
        top = $(this).offset().top + $(root).outerHeight();

        $(ul).css({
          'position': 'absolute',
          'left': left + 'px',
          'top': top + 'px',
          'width': $(this).outerWidth() + 'px'
        });
      }

      var closeUl = function() {
        ul.slideUp('fast', function() {
          visible = false;
        });

        $root.removeClass(openedClass);

        root.closedCallback();
      }

      var openUi = function() {
        ul.slideDown('fast', function() {
          visible = true;
        });

        $root.addClass(openedClass);

        root.openedCallback();
      }

      // Setup markup
      $root.prepend('<span>' + settings['initial'].replace(/'/g,'&#039;') + '</span>');
      var ul = $('<ul class="fontSelectUl"></ul>').appendTo('body');
      ul.hide();
      positionUl();

      for (var i = 0; i < settings['fonts'].length; i++) {
        var item = $('<li>' + displayName(settings['fonts'][i]) + '</li>').appendTo(ul);
        $(item).css('font-family', settings['fonts'][i]);
      }

      if (settings['initial'] != '')
        select(settings['initial']);

      ul.find('li').click(function() {

        if (!visible)
          return;

        positionUl();
        closeUl();

        select($(this).css('font-family'));
      });

      $root.click(function(event) {

        if (visible)
          return;

        event.stopPropagation();

        positionUl();
        openUi();
      });

      $('html').click(function() {
        if (visible)
        {
          closeUl();
        }
      })
    },
    selected : function() {
      return this.css('font-family');
    },
    select : function(font) {
      this.find('span').html(font.substr(0, font.indexOf(',')).replace(/[""]{1}/gi,""));
      this.css('font-family', font);
      selected = font;
    }
  };

  $.fn.fontSelector = function(method) {
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.fontSelector' );
    }
  }
}) ( jQuery );

$(function() {
    $("#input_text").on("input", null, null, function() {
      var text_value = $(this).val();
      text_value = text_value.replace(/\r?\n/g,'<br/>');
      $("#font_view").html(text_value);
    });
    $("#font_select").fontSelector(
        {
          'hide_fallbacks' : false,
          'initial' : 'litery-font-25',
          'selected' : function(style) {
            $("#font_view").css("font-family", style);
            $(".char_font_view").css("font-family", style);
            $("#tooltip_content").css("font-family", style);
          },
          'fonts' : [ 'litery-font-01',
                      'litery-font-02',
                      'litery-font-03',
                      'litery-font-04',
                      'litery-font-05',
                      'litery-font-06',
                      'litery-font-07',
                      'litery-font-08',
                      'litery-font-10',
                      'litery-font-11',
                      'litery-font-12',
                      'litery-font-13',
                      'litery-font-14',
                      'litery-font-15',
                      'litery-font-16',
                      'litery-font-17',
                      'litery-font-18',
                      'litery-font-19',
                      'litery-font-20',
                      'litery-font-21',
                      'litery-font-22',
                      'litery-font-23',
                      'litery-font-24',
                      'litery-font-25',
                      'litery-font-26',
                      'litery-font-27',
                      'litery-font-28',
                                'napisy-font-29']
        });

    var text_value = $("#input_text").val();
    if (text_value != '')
    {
      $("#font_view").text(text_value);
    }
  });
  $(function(){
    $("#char_font_view").click(function(){
      $("#char_table_content").toggle();
    });
  });


function getSize3de() {
  size = $( "h1" ).css( "font-size" );
  size = parseInt(size, 10);
  $( "#font-size" ).text(  size  );
}

//get inital font size
getSize3de();

$( "#up3de" ).on( "click", function() {

 {
    $( "#font_view" ).css( "font-size", "+=8" );
    $( "#font-size" ).text(  size += 8 );
  }
});

$( "#down3de" ).on( "click", function() {
  {
    $( "#font_view" ).css( "font-size", "-=8" );
    $( "#font-size" ).text(  size -= 8  );
  }
});
}


</script>

<script>
if($('#additional_29'))
{
$("#additional_29").val(window.location.href);
}

</script>



