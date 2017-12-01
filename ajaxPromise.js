function ajax(url){
        return new Promise(function(resolve,reject){
            var xhr = null;
            var handler = function(){
                if(xhr.readyState!==4) return;
                if(xhr.status==200){
                    resolve(xhr.responseText)
                }else{
                    reject(new Error(xhr.statusText  ))
                }
            }
            if(window.XMLHttpRequest){
                xhr = new XMLHttpRequest();
            }else{
                xhr = new ActiveXObject("Microsoft.XMLHTTP")
            }
            xhr.open('GET',url,true);
            xhr.send(); 
            xhr.onreadystatechange=handler;
        })
    }