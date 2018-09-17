// javascript which will change the number of unresolved comments on crucible to emoji
// copy it to console and run on crucible site
// cerner_2^5_2018
var g = document.getElementsByClassName("aui-badge review-activity--badge__unresolved")[0].innerHTML;
if(g > 100)
{
    document.getElementsByClassName("aui-badge review-activity--badge__unresolved")[0].innerHTML = ":'(";
}
else if (g > 20)
{
    document.getElementsByClassName("aui-badge review-activity--badge__unresolved")[0].innerHTML = ":(";
}
else
{
    document.getElementsByClassName("aui-badge review-activity--badge__unresolved")[0].innerHTML = ":)";
}