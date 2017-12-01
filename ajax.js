var $$ = {
          ajax:function(opt){
              var def = {
                   url:'/',
                   type:'get',
                   dataType:'json',
                   async:true,
                   success:function(data){
                   },
                   error:function(err){
                   }
              }
            var settings = this.extend({},def,opt);
            var url = settings.url;
            var type = settings.type;
            var dataType = settings.dataType;
            var data = settings.data;
            var async= settings.async;
            var xhr = null;
            if(window.XMLHttpRequest){
                xhr = new XMLHttpRequest();
            }else{
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhr.onload=(res)=>{
                  if(res.target.readyState===4){
                      if(res.target.status==200){
                          if(dataType==='json'){
                              settings.success(JSON.parse(res.target.response))
                          }else{
                              settings.success(res.target.response);
                          }
                      }else{
                          opt.error("err");
                      }
                  }else{
                      console.log("加载中。。。。。。")
                  }
            }
            var tog = '';
            if(typeof data ==='object'){
                tog = this.format(data);
            }
            if(type.toUpperCase()==='GET'){
                xhr.open(type,url+"?"+tog,async);
                xhr.send(null);
            }else{
                xhr.open(type,url,async);
                xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
                xhr.send(tog);                
            }
          },
        format:function(data){
            var arr = [];
            for(var i in data){
              arr.push(i+'='+data[i])
            }
            return  arr.join("&");
        },
        extend:function(){
            var obj = arguments[0];
          for(var i=1;i<arguments.length;i++){
              for(var k in arguments[i]){
                  obj[k]=arguments[i][k]
              }
          }
            return obj;
        }
    }