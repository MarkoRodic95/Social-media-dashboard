function changePage(){
    let checker = document.getElementById('switcher');
    if (checker.checked){

        //Renaming ID's

        document.getElementById('container').setAttribute("id", "containerWhite");
        document.getElementById('dashboardCardContent').setAttribute("id", "dashboardCardContentWhite");
        document.getElementById('title').setAttribute("id", "titleWhite");
        document.getElementById('dashboardCard').setAttribute("id", "dashboardCardWhite");

        //Changing tag properties

        var title = document.getElementsByTagName('h1');
        for (let i = 0; i < title.length; i++) {
            title[i].style.color = "black";   
        }

        var subtitle = document.getElementsByTagName('h2');
        for (let i = 0; i < subtitle.length; i++) {
            subtitle[i].style.color = "black";   
        }


        //Renaming classes

        var fNumber = document.querySelectorAll('.followersNumber'); 
        for (let i = 0; i < fNumber.length; i++) {
            fNumber[i].className = "followersNumberWhite";
        }     
        var number = document.querySelectorAll('.number');
        for (let i = 0; i < number.length; i++) {
            number[i].className = "numberWhite";   
        }
        var item = document.querySelectorAll('.item');  
        for (let i = 0; i < item.length; i++) {
            item[i].className = "itemWhite";   
        }
        var itemOverview = document.querySelectorAll('.overviewItem');  
        for (let i = 0; i < itemOverview.length; i++) {
            itemOverview[i].className = "overviewItemWhite";  
        }
    }else{
        document.getElementById('containerWhite').setAttribute("id", "container");
        document.getElementById('dashboardCardContentWhite').setAttribute("id", "dashboardCardContent");
        document.getElementById('titleWhite').setAttribute("id", "title");
        document.getElementById('dashboardCardWhite').setAttribute("id", "dashboardCard");

        var fNumber2 = document.querySelectorAll('.followersNumberWhite');
        for (let i = 0; i < fNumber2.length; i++) {  
            fNumber2[i].className = "followersNumber"; 
        }
        var number2 = document.querySelectorAll('.numberWhite');
        for (let i = 0; i < number2.length; i++) {
            number2[i].className = "number";   
        }
        var item2 = document.querySelectorAll('.itemWhite');  
        for (let i = 0; i < item2.length; i++) {
            item2[i].className = "item";   
        }
        var itemOverview2 = document.querySelectorAll('.overviewItemWhite');  
        for (let i = 0; i < itemOverview2.length; i++) {
            itemOverview2[i].className = "overviewItem";   
        }

        var title2 = document.getElementsByTagName('h1');
        for (let i = 0; i < title2.length; i++) {
            title2[i].style.color = "white";   
        }

        var subtitle2 = document.getElementsByTagName('h2');
        for (let i = 0; i < subtitle2.length; i++) {
            subtitle2[i].style.color = "white";   
        }
    }
}