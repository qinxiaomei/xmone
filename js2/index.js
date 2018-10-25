
     /*渐渐向上的公告通知*/
        $(document).ready(function () {
            $(function(){
            
            $("#tongzhi").animate({height:1200},30000)
           })
              /*动态的时间显示*/
             /* function time_boxs(id){
              var time_box = $(id).children("span");
              $.each(time_box,function(index,ele){
             var haomiao.index = (new Date($())).getTime()
              }*/
              /*得到当前的毫秒值*/
              var date = new Date();
              var nowDate = date.getTime() 
              /*得到要对比的时间*/
              var box1_son1 = (new Date($("#box1 span:nth-child(1)").html())).getTime();
              var box1_son2 = (new Date($("#box1 span:nth-child(2)").html())).getTime();
              var box2_son1 = (new Date($("#box2 span:nth-child(1)").html())).getTime();
              var box2_son2 = (new Date($("#box2 span:nth-child(2)").html())).getTime();
              var box3_son1 = (new Date($("#box3 span:nth-child(1)").html())).getTime();
              var box3_son2 = (new Date($("#box3 span:nth-child(2)").html())).getTime();
              var box4_son1 = (new Date($("#box4 span:nth-child(1)").html())).getTime();
              var box4_son2 = (new Date($("#box4 span:nth-child(2)").html())).getTime();
              var box5_son1 = (new Date($("#box5 span:nth-child(1)").html())).getTime();
              var box5_son2 = (new Date($("#box5 span:nth-child(2)").html())).getTime();
              /*获取当前屏幕的宽度除去5*/
              var pingmu_w = (document.body.clientWidth*0.9)/5;
             /* console.log(chazhi3 = (nowDate -box3_son1 )/(box3_son2 -box3_son1)*pingmu_w)
*/
              console.log(pingmu_w)
              if(nowDate>box1_son1 && nowDate<box1_son2){
                 var chazhi1 = (nowDate -box1_son1 )/(box1_son2 -box1_son1)*pingmu_w ;
                $(".hezi").animate({width:0*pingmu_w+chazhi4 + "px"},"fast");
                $(".hezi2").addClass("bg11")
                $(".hezi_son").html("赛题征集")
               }
               else if(nowDate>box2_son1 && nowDate<box2_son2){
               /* $("#gundongtiao").animate({width:40 + "%"},"normal");*/
                var chazhi2 = (nowDate -box2_son1 )/(box2_son2 -box2_son1)*pingmu_w ;
                $(".hezi").animate({width:1*pingmu_w+chazhi2 + "px"},"fast");
                   $(".hezi2").addClass("bg22")
                    $(".hezi_son").html("参赛报名")
              }
              else if(nowDate>box3_son1 && nowDate<box3_son2){
                var chazhi3 = (nowDate -box3_son1 )/(box3_son2 -box3_son1)*pingmu_w ;
                $(".hezi").animate({width:2*pingmu_w+chazhi3 + "px"},"fast");
                  $(".hezi2").addClass("bg33")
                   $(".hezi_son").html("作品提交")
              }
              else if(nowDate>box4_son1 && nowDate<box4_son2){
                  var chazhi4 = (nowDate -box4_son1 )/(box4_son2 -box4_son1)*pingmu_w ;
                $(".hezi").animate({width:3*pingmu_w+chazhi4 + "px"},"fast");
                   $(".hezi2").addClass("bg44")
                    $(".hezi_son").html("作品评审")
               /* $("#gundongtiao").animate({width:80 + "%"},"normal");*/
              }
              else if(nowDate>box5_son1 &&nowDate<box5_son2){
                 var chazhi5 = (nowDate -box5_son1 )/(box5_son2 -box5_son1)*pingmu_w ;
                $(".hezi").animate({width:4*pingmu_w+chazhi5 + "px"},"fast");
                 $(".hezi2").addClass("bg55")
                  $(".hezi_son").html("结果公布")
                /*$("#gundongtiao").animate({width:100 + "%"},"normal");*/
              }
              else{
                $(".hezi").animate({width:100 + "%"},"fast");
                   $(".hezi2").addClass("bg66");
                    $(".hezi_son").html("已结束")
              }
             
           
        });
