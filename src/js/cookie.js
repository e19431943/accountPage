let userId = document.getElementById('inputId');
let memory = document.getElementById('inputMemory');
let form =document.getElementById('loginForm');
window.onload=()=>
{
    
    
    //判斷cookie是否有值
    if(getCookie('id'))
    {
       userId.value = getCookie('id');
       memory.checked = true;
    }
    else
    {
        console.log("error");
    }
    
    
};


/*檢查是否需要記憶帳號*/ 


form.addEventListener('submit',()=>
{
    if(memory.checked)
    {
        setCookie('id',userId.value);
    }
    else
    {
        setCookie('id',';expires=Thu, 01 Jan 1970 00:00:00 UTC');
    }

});


/*set cookie */
 function setCookie(userid , value )
 {
     document.cookie = `${userid}=${value}`; //是字串型式
 }

 /*\get cookie  需要寫例外，當搜尋不到coolie時*/
 function getCookie(userid)
 {
    let currentCookie = document.cookie;
    
    if(currentCookie.indexOf(userid)>=0)
    {
        let myCookie = document.cookie.split('; ');
        return myCookie.find(row => row.startsWith(userid)).split("=")[1];
    }
    else
    {
        return false;
    } 
    
 }

