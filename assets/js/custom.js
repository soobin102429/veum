function start() { 
    var checkBox = document.getElementById("all_agree");
    if (checkBox.checked == true){
        $(".start").hide();
        $(".health").show();
    } else {
    alert('개인정보 수집에 동의해주세요.');
    }
}
function healthy(){
    $(".start").hide();
    $(".health").hide();
    $(".question").show();
}
(function() {
    $('.reqrd').keyup(function() {

        var isEmpty = false;
        $('.reqrd').each(function() {
            if ($(this).val() == '') {
                isEmpty = true;
            }
        });

        if (isEmpty) {
            $('#healthy').prop('disabled', true);
        } else {
            $('#healthy').removeAttr('disabled');
        }
    });
})();
$('#healthy').click(function(){
    $(".custom-steps-2").addClass("custom-steps-active");
    $(".custom-span-2").addClass("main-color");
    $(".custom-steps-1").removeClass("custom-steps-active");
    $(".custom-span-1").removeClass("main-color");
    $(".custom-steps-1-m").removeClass("custom-steps-active-m");
    $(".custom-steps-2-m").addClass("custom-steps-active-m");
    $(".bmi").hide();
    var age = document.getElementById("age").value;
    var name = document.getElementById("name").value;
    var identity = document.querySelector(".activeb").innerText;
    var outputOne = document.querySelector("#output1");
    var outputTwo = document.querySelector("#output2");
    var outputThree = document.querySelector("#output3");
    outputOne.innerHTML = age + "년생";
    outputTwo.innerHTML = name + "님의 설문 결과";
    outputThree.innerHTML = identity + "성";
});
var btnContainerb = document.getElementById("cb1");
    var btnsb = btnContainerb.getElementsByClassName("c1");
    for (var i = 0; i < btnsb.length; i++) {
    btnsb[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("activeb");
        if (current.length > 0) {
        current[0].className = current[0].className.replace(" activeb", "");
        }
        this.className += " activeb";
    });
}
window.onload = () => {
    let button = document.querySelector("#healthy");

    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
    };
    function calculateBMI() {
        /* Getting input from user into height variable.
        Input is string so typecasting is necessary. */
        let height = parseInt(document
                .querySelector("#height").value);
    
        /* Getting input from user into weight variable. 
        Input is string so typecasting is necessary.*/
        let weight = parseInt(document
                .querySelector("#weight").value);
    
        let result = document.querySelector("#bmi");
    
        // Checking the user providing a proper
        // value or not
        if (height === "" || isNaN(height)) 
            result.innerHTML = "키를 입력해주세요!";
    
        else if (weight === "" || isNaN(weight)) 
            result.innerHTML = "체중을 입력해주세요!";
    
        // If both input is valid, calculate the bmi
        else {
            // Fixing upto 2 decimal places
            let bmi = (weight / ((height * height) 
                                / 10000)).toFixed(2);
    
            // Dividing as per the bmi conditions
            if (bmi < 18.6) result.innerHTML =
                `BMI : <span>${bmi}</span>(저체중)`;
    
            else if (bmi >= 18.6 && bmi < 24.9) 
                result.innerHTML = 
                    `BMI : <span>${bmi}</span>(정상)`;
    
            else result.innerHTML =
                `BMI : <span>${bmi}</span>(과체중)`;
        }
    };
// bmi end
var num=1;

var q={
    1: {"title":"튀김이나 볶음요리를 많이 먹는 편이다.","type":"EI","A":"예","B":"아니요"},
    2: {"title":"지금까지 평생 총 5갑(100개비)이상의 담배를 피운 적이 있습니까?","type":"TF","A":"예","B":"아니요"},
    3: {"title":"1주일에 술을 3잔이상 합니까?","type":"TF","A":"예","B":"아니요"},
    4: {"title":"평소보다 숨이 훨씬 더 차게 만드는 격렬한 활동을 일주일에 3회이상 20분이상 하나요?","type":"SN","A":"예","B":"아니요"},
    5: {"title":"한 번에 적어도 10분 이상씩 걸은 경우를 합하여, 하루 총 30분 이상 걷나요??","type":"SN","A":"예","B":"아니요"},
    6: {"title":"다음과 같은 질병으로 진단을 받았거나, 현재 약물 치료 중이십니까? (고혈압, 당뇨, 고지혈증)","type":"JP","A":"예","B":"아니요"},
    7: {"title":"식이요법이나 내과적인 치료를 받으시나요?","type":"JP","A":"예","B":"아니요"}
}
var result = {
    "ISTJ" : {"animal":"A Meal Plan"},
    "ISFJ" : {"animal":"A Meal Plan"},
    "INTJ" : {"animal":"A Meal Plan"},
    "INFJ" : {"animal":"A Meal Plan"},
    "ISTP" : {"animal":"A Meal Plan"},
    "ISFP" : {"animal":"A Meal Plan"},
    "INTP" : {"animal":"A Meal Plan"},
    "INFP" : {"animal":"A Meal Plan",
    "explainA":"나트륨 식단 제한",
    "explain_1":"- 영양표시를 적극 활용하며, 나트륨이 많은 음식은 섭취를 제한합니다.<br>- 간이 되어있는 음식에 소금, 간장을 더 넣지 않습니다.<br>- 조리 시 다양한 향신료를 사용하여 염분 사용량을 줄입니다.(후추, 고춧가루, 마늘, 파, 카레가루, 겨자, 고추냉이 등 양념, 레몬즙, 식초, 유자즙 등)<br>- 국, 찌개는 건더기 위주로 먹습니다.<br>- 채소나 생선은 신선한 재료 고유의 맛을 살려 조리하며, 젓갈, 장아찌, 자반 등 짠 밑반찬은 자제합니다.",
    "explainB":"칼륨, 칼슘 충분히 섭취",
    "explain_2":"- 칼륨과 칼슘이 풍부한 채소와 과일, 저지방 유제품을 섭취합니다.(시금치, 바나나, 요구르트, 감자와 고구마, 비트, 오렌지, 연어 등)",
    "explainC":"지방 섭취 감소",
    "explain_3":"- 콜레스테롤과 포화지방 섭취를 줄입니다. 콜레스테롤은 간, 곱창 등 내장류와 생선알, 달걀노른자 등에 많고, 포화지방은 동물성 기름(소, 돼지기름 등), 팜유(라면 기름, 분말 커피크림 등), 코코넛유에 많습니다.",
    "button":"A Meal Plan  →"},
    "ESTJ" : {"animal":"A Meal Plan"},
    "ESFJ" : {"animal":"A Meal Plan"},
    "ENTJ" : {"animal":"A Meal Plan"},
    "ENFJ" : {"animal":"A Meal Plan"},
    "ESTP" : {"animal":"A Meal Plan"},
    "ESFP" : {"animal":"A Meal Plan"},
    "ENTP" : {"animal":"A Meal Plan"},
    "ENFP" : {"animal":"A Meal Plan"}
}

$("#A").click(function(){
  var type= $("#type").val();
  var preValue = $("#"+type).val();
  $("#"+type).val(parseInt(preValue)+1);
});
$("#title").click(function(){
    next();
});
function next(){
    if(num==7){                                              
        $(".question").hide();
        $(".result").show();
        $(".bmi").show();
        $(".custom-steps-3").addClass("custom-steps-active");
        $(".custom-span-3").addClass("main-color");
        $(".custom-steps-2").removeClass("custom-steps-active");
        $(".custom-span-2").removeClass("main-color");
        $(".custom-steps-2-m").removeClass("custom-steps-active-m");
        $(".custom-steps-3-m").addClass("custom-steps-active-m");
        var mbti = "";
        ($("#EI").val() < 2 )? mbti+="I" : mbti+="E";
        ($("#SN").val() < 2 )? mbti+="N" : mbti+="S";
        ($("#TF").val() < 2 )? mbti+="F" : mbti+="T";
        ($("#JP").val() < 2 )? mbti+="P" : mbti+="J";
        $("#img").attr("src",result[mbti]["img"]);
        $("#animal").html(result[mbti]["animal"]);
        $("#explain_1").html(result[mbti]["explain_1"]);
        $("#explainA").html(result[mbti]["explainA"]);
        $("#explain_2").html(result[mbti]["explain_2"]);
        $("#explainB").html(result[mbti]["explainB"]);
        $("#explain_3").html(result[mbti]["explain_3"]);
        $("#explainC").html(result[mbti]["explainC"]);
        $("#button").html(result[mbti]["button"]);
        $("#mbti-result").html(result[mbti]["mbti-result"]);
        $("#mbti-name").html(result[mbti]["mbti-name"]);
    }else{
        $(".progress-bar").attr('style','width:calc(100/7*'+num+'%)');
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
    num++;
    }
}
$("#question_next").click(function(){
    next();
    const target = document.getElementById('question_next');
    target.disabled = true;
    target.style.background='#fff';
    target.style.color='#000';
});
function A(){
    const target = document.getElementById('question_next');
    target.style.background='#215844';
    target.style.color='#fff';
    target.disabled = false;
}
function B()  {
    const target = document.getElementById('question_next');
    target.disabled = false;
    target.style.background='#215844';
    target.style.color='#fff';
}