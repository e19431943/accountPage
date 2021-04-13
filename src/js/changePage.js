let navInfo = document.getElementsByClassName('nav-info-item'); //回傳是個物件
let tepIndex; 
for(let i = 0 ; i<navInfo.length;i++ )
{   

    navInfo[i].addEventListener('click',function(e) //為元素屬性,不能使用箭頭函式，this 指向的位置會變成window
    {
        if(tepIndex == i)
        {
            return "";
        }else
        {
            resetInfoColor(i);
            changeInfoPage(i);
            document.getElementById('showTitle').innerText = this.innerText;

        }

    });
}

function changeInfoPage(index)
{
    let showArray =[125,-125];
    let showInfo = document.getElementById('showGroups');
    showInfo.style.setProperty('left',showArray[index] + "px");

}
function resetInfoColor(index)
{
    let infoItem = document.querySelectorAll('.nav-info-item a');
    for(let i =0;i< infoItem.length ;i++)
    {
        
        infoItem[i].style.setProperty('color','#333');
    }
    infoItem[index].style.setProperty('color','#fff');
}

/*login-main */

let option = document.getElementsByClassName('login-option-item');
for(let i =0;i< option.length;i++ )
{
    option[i].addEventListener('click',function()
    {
        if(this.dataset.value == "true")
        {
            return "";
        }
        else
        {
            resetOptionColor();
            changeOPtionColor(this,i);
        }
    });
}

function changeOPtionColor(target,index) /*按下去時顏色*/
{
    
    let optionArray=[0,-250];
    target.style.setProperty('color','#aaa');
    target.dataset.value= "true";
    document.getElementById('loginMainShow').style.setProperty('left',`${optionArray[index]}px`);
    
}
function resetOptionColor() 
{
    let target =  document.querySelector("a[data-value='true']"); //會抓出曾被按過，來把她reset
    if(target != null)
    {
        
        target.style.setProperty('color','#333'); 
        target.dataset.value="false";
    }
}