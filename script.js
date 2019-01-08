var arr = [ "а","б","в","г","д","е","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"," ","." ]; 
var k = 0;
function monkey() {
var text = "";
text = document.getElementById("text").value;
document.getElementById("text").value = "";
var rndtext = "";
while (rndtext != text) {
while (rndtext.length != text.length){
var i = Math.floor(Math.random() * (35 - 0)) + 0;
rndtext = rndtext + arr[i];
k++;
if (arr[i] != text[rndtext.length - 1]) {
	k = k + (text.length - rndtext.length);
	rndtext = "";
	break;
}
if(rndtext.length > 1){
alert(rndtext);
}
}
}
answer();
}
function answer() {
var numb = "";
var years = Math.floor((k/3600/24/31)/12);
var months = Math.floor((k/3600/24)/31);
var days = Math.floor((k/3600)/24);
var hours = Math.floor(k/3600);
var min = Math.floor(k/60);
if (years > 0) {
	if (years>10 && years<20){
	numb = "лет";	
	} else if(years % 10 == 1){
numb = "год";
} else if (years % 10 == 2 || years % 10 == 3 || years % 10 == 4) {
numb = "года";
} else{
numb = "лет";
}
document.getElementById("answer").innerHTML = ("<img src='monk.png' id ='monk'> -я напечатаю это через " + years + " " + numb);
} else if ( months > 0 ){
	if (months>10 && months<20){
numb = "месяцев";	
	} else if (months % 10 == 1){
numb = "месяц";
} else if (months % 10 == 2 || months % 10 == 3 || months % 10 == 4) {
numb = "месяца";
} else{
numb = "месяцев";
}
document.getElementById("answer").innerHTML = ("<img src='monk.png' id ='monk'> -я напечатаю это через " + months + " " + numb);
} else if ( days > 0 ){
	if (days>10 && days<20){
numb = "дней";	
	} else if (days % 10 == 1){
numb = "день";
} else if (days % 10 == 2 || days % 10 == 3 || days % 10 == 4) {
numb = "дня";
} else{
numb = "дней";
}
document.getElementById("answer").innerHTML = ("<img src='monk.png' id ='monk'> -я напечатаю это через " + days + " " + numb);
} else if ( hours > 0 ){
	if (hours>10 && hours<20){
numb = "часов";	
	} else if(hours % 10 == 1){
numb = "час";
} else if (hours % 10 == 2 || hours % 10 == 3 || hours % 10 == 4) {
numb = "часа";
} else{
numb = "часов";
}
document.getElementById("answer").innerHTML = ("<img src='monk.png' id ='monk'> -я напечатаю это через " + hours + " " + numb);
} else if(min > 0) {
	if (min>10 && min<20){
numb = "минут";	
	} else if (min % 10 == 1){
numb = "минуту";
} else if (min % 10 == 2 || min % 10 == 3 || min % 10 == 4) {
numb = "минуты";
} else{
numb = "минут";
}
document.getElementById("answer").innerHTML = ("<img src='monk.png' id ='monk'> -я напечатаю это через " + min + " " + numb);
} else {
		if (k>10 && k<20){
numb = "секунд";	
	} else if (k % 10 == 1){
numb = "секунду";
} else if (k % 10 == 2 || k % 10 == 3 || k % 10 == 4) {
numb = "секунды";
} else{
numb = "секунд";
}
document.getElementById("answer").innerHTML = ("<img src='monk.png' id ='monk'> -я напечатаю это через " + k + " " + numb);
}
}