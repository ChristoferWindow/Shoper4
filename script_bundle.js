
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
          if($('#war_stats').attr('data-personalizacja')== "tak")
          {
            show_perstats();
          }

          $('.ico_js_i_warianty').click(function(e){
              $('.js_div_warianty').toggle("fast").siblings('div').slideUp();
              $('.ico_js_i').css('color','#555555');
              $(this).css('color','#1e9eec');
          });
          $('.ico_js_i_material').click(function(e){
              $('.js_div_material').toggle("fast").siblings('div').slideUp();
                $('.ico_js_i').css('color','#555555');
                  $(this).css('color','#1e9eec');
          });
          $('.ico_js_i_zmiana').click(function(e){
              $('.js_div_zmiana').toggle("fast").siblings('div').slideUp();
                $('.ico_js_i').css('color','#555555');
                  $(this).css('color','#1e9eec');
          });
          $('.ico_js_i_mocowanie').click(function(e){
				$('.js_div_mocowanie').toggle("fast").siblings('div').slideUp();
                $('.ico_js_i').css('color','#555555');
                  $(this).css('color','#1e9eec');
          });
          //add mocowanie
          $('.ico_js_i_custom').click(function(e){
              $('.js_div_custom').toggle("fast").siblings('div').slideUp();
                $('.ico_js_i').css('color','#555555');
                  $(this).css('color','#1e9eec');
          });

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
