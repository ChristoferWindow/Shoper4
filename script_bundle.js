
      function main_assign()
      {
        var tes_exi = document.getElementById('option_10');
        var tes_exi2 = document.getElementById('option_33');
        var product_var = document.getElementById('product_variant');
        if((typeof(tes_exi)!='undefined' && tes_exi !=null) || (typeof(tes_exi2)!='undefined' && tes_exi2 !=null) )
        {
          var index = size_index();
          var keys =[];
          assign_values(index);
        }
        if(typeof(product_var)!='undefined' && product_var!=null)
        {
          show_warstats();
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





               var col_inner = table[0].rows[i_index].cells[0].innerHTML; //size param
               var col_param = table[0].rows[i_index].cells[1].innerHTML;//size value
               var col_size = col_inner.substr(col_inner.indexOf(' ')+1);
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
         var index = ind;
         var size_list=0;
         var ele = document.getElementById('option_10');
         var ele2 = document.getElementById('option_33');
         if(typeof(ele2)!='undefined' && ele2 !=null)
         {
           size_list =  document.getElementById('option_33');

         }
         else if(typeof(ele)!='undefined' && ele !=null)
         {
           size_list= document.getElementById('option_10');

         }

         console.log("Size list:"+size_list);
         var len_si = size_list.length-1;
         var len_arr = index.length;
         var arr_it = 0;

         for(var z=1;z<=len_si;z++)
         {

           size_list.options[z].innerHTML += "\xa0 \xa0 \xa0("+index[arr_it][1]+")";
           arr_it++;

         }


       }






        function show_warstats()
        {
          var war_stats = document.getElementById('war_stats');
          var war_ins_box = document.getElementsByClassName('d');
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



       $(document).ready(main_assign);
