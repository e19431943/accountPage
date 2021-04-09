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
        changeOPtionColor(this,i);
    });
}

function changeOPtionColor(target,index)
{
    let optionArray=[0,-250];
    target.style.setProperty('color','#333');
    document.getElementById('loginMainShow').style.setProperty('left',`${optionArray[index]}px`);
}