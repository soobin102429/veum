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
var num2=1;

var q={
    1: {"title":"평소 활동량을 체크해주세요.","type":"ABCD","A":"운동 거의안함.","B":"가벼운 산택정도","C":"숨이 찰 정도","D":"땀이 날 정도"},
    2: {"title":"흡연여부를 선택해주세요.","type":"ABCD","A":"피우지 않음","B":"과거흡연","C":"하루 한 갑 미만","D":"하루 한갑 이상"},
    3: {"title":"과음횟수를 선택해주세요.","type":"ABCD","A":"거의 마시지 않음.","B":"한 달 1회미만","C":"한달 1회 이상 주 2회 미만","D":"주2회 이상"},
    4: {"title":"다음 중 진단 받은 질환이 있다면 선택해주세요.","type":"TF","A":"해당없음","B":"고지혈증","C":"당뇨","D":"고혈압"},
    5: {"title":"다음 중 가족력 있는 질환을 선택해주세요.","type":"ABCD","A":"해당없음","B":"고지혈증","C":"당뇨","D":"고혈압"},
    6: {"title":"대사건강지표를 확인해주세요.","type":"ABCD","A":"해당없음","B":"허리둘레: 90cm 이상","C":"높은 혈당: 100mg/dL이상","D":"높은 혈압: 130mmHg이상"},
    7: {"title":"해당되는 식생활에 선택해주세요.","type":"ABCD","A":"해당없음","B":"배가 불러도 계속 먹는다.","C":"기름진 음식을 자주 먹는다.","D":"야채를 잘 안챙겨 먹는다."}
}
var result = {
    "ISTJ" : {"animal":"강철멘탈 프로직진러","explain":"책임감이 강하고 친구들에게 항상 믿음직스럽다 기억되는 순수 결정체형 친구","img":"images/13.gif","mbti-result":"당신은 청렴결백, 순수가 그 자체인 순수결정체 타입 입니다!  풀리기도 합니다. 정직함이 가장 큰 매력인 당신, 세상이 아무리 불합리하게 느껴져도 그 정직함을 잃지마시길 바랍니다.","mbti-name":"ISTJ"},
    "ISFJ" : {"animal":"살아있는 방탄조끼","explain":"세심하고 꼼꼼한 성격으로 언제나 친구들을 보호하는 완벽한 친구형 친구","img":"images/14.gif","mbti-result":"당신은 친구로서 단점이 거의 없는 완벽에 가까운 친구 타입입니다. 조용하고 내성적인 성격을 제외하면 세심하고 꼼꼼한 성격으로 주변의 친구들을 잘  사람은 축복이라고 말해주고 싶습니다.","mbti-name":"ISFJ"},
    "INTJ" : {"animal":"야망있는 꼰대 중대장","explain":"풍부한 지식과 결단력으로 정확한 계산을 해내는 리더형 친구","img":"images/15.gif","mbti-result":"풍부한 중요합니다. 의지가 강해 언제나 친구들에게 든든한 버팀목이 되어주는 당신은 최고의 친구!","mbti-name":"INTJ"},
    "INFJ" : {"animal":"반도의 잔다르크","explain":"성실하고 착한 성격에 친구 도와주기를 좋아하는 도우미형 친구","img":"images/16.gif","mbti-result":"당신은 나긋하고 성실함이 있는 진짜 착한 친구 타입 입니다. 도덕적 관념이 강해 나쁜 짓은 가끔씩 혼자만의 여유를 즐기며 잘 쉬어준다면 항상 밝음을 유지할 수 있습니다.","mbti-name":"INFJ"},
    "ISTP" : {"animal":"걸어다니는 알파고","explain":"함께하는 시간이 흥미롭고 즐거우며 다양한 경험들을 전해주는 척척박사형 친구","img":"images/1.gif","mbti-result":"무엇이든 못하는 게 없는 친구들 사이의 척척박사! 당신의 호기심이 행동과 다소 낮은 공감능력으로 친구들을 당황스럽게 만들기도 하기에, 솔직한 모습들을 더 많이 보여준다면 친구들은 당신을 이해하고 더 좋아해 줄 것입니다.","mbti-name":"ISTP"},
    "ISFP" : {"animal":"성능만점 감정 스캐너","explain":"감각적이고 독특함이 매력이며 '나를 잘 알아주는 친구'로 기억되는 예술가형 친구","img":"images/2.gif","mbti-result":"감각적이고 독특함이 매력적인 타입의 친구입니다. 자유로운 성향을 지니고 있어 친구들 사이에서 예술가라 불립니다. 상대방의 감정을 빠르게 읽어내는 더 생각하는 습관을 기른다면 훨씬 더 매력적인 친구가 될 수 있습니다.","mbti-name":"ISFP"},
    "INTP" : {"animal":"4차원 팩트폭격기","explain":"평범한 것을 싫어하고 독특한 관점을 지닌 고민 상담가형 친구","img":"images/3.gif","mbti-result":"뻔하고, 평범한 것을 죽기보다 싫어하는 당신! 수줍음이 많긴 하지만 독특한 관점과 독창성이 있으니 가끔은 모른 척 넘어가 주는 연습도 해두면 좋습니다. 통찰력이 뛰어난 당신은 친구들에게 최고의 고민 상담가 입니다.","mbti-name":"INTP"},
    "INFP" : {"animal":"한국어 만렙 외국인","explain":"항상 긍정적이며 똘끼와 높은 언어능력으로 무장한 행복전도사형 친구","img":"images/4.gif","mbti-result":"매사에 긍정적이며 다수보다 소수의 친구들과 더 잘 어울리는 스타일입니다. 항상 침착하고 열정과 이해심도 많아 친구들에게 존경을 받기도 하며 말씀드리고 싶습니다. 항상 좋은 생각, 좋은 마음을 갖고 사는 당신은 친구들의 행복 전도사!","mbti-name":"INFP"},
    "ESTJ" : {"animal":"오늘만 사는 강철 코뿔소","explain":"뚝심 있고 헌신적인 모습으로 항상 의지하게 되는 아빠 같은 친구","img":"images/5.gif","mbti-result":"뚝심 있고 친구에게 헌신적인 스타일을 가진 당신! 편법을 싫어하고,  있어, 언제나 푸근하고 듬직한 아빠 같은 친구로 기억될 것 입니다.","mbti-name":"ESTJ"},
    "ESFJ" : {"animal":"관심종자 개복치","explain":"애정과 관심 쏟기를 좋아하고 타고난 끼로 매력을 발산하는 인싸형 친구","img":"images/6.gif","mbti-result":"당신은 친구들 사이에서 인싸로 불릴 성향을 모두 타고난 사람입니다. 듣게 되는 경우도 있으니 항상 표현에 신중해야 합니다. 타고난 관종인 당신! 언제나 밝고 명랑한 모습으로 행복을 전파하는 친구입니다.","mbti-name":"ESTJ"},
    "ENTJ" : {"animal":"자타공인 열정만수르","explain":"함께 하는 것을 좋아하고 넘치는 카리스마로 모두를 이끄는 지휘자형 친구","img":"images/14.gif","mbti-result":"항상 자신감 넘치고 카리스마 있는 타입의 사람입니다. 냉철한 오해를 풀어주면 좋습니다. 도전적이고 의지도 강한 당신! 친구들에게 당신은 언제나 매력적인 친구입니다.","mbti-name":"ENTJ"},
    "ENFJ" : {"animal":"총일받이 오지랖퍼","explain":"총대 메기를 두려워하지 않고 열정과 강직함이 매력인 돌격대장형 친구","img":"images/8.gif","mbti-result":"친구들 사이에서 총대 메기를 두려워하지 않는 리더 중에 리더! 기억하면 좋습니다. 당신의 어른스러운 모습으로 안정감을 주기에 언제나 친구는 당신에게 편안함을 느끼고 있습니다.","mbti-name":"ENFJ"},
    "ESTP" : {"animal":"겁 없는 쌉싸블러","explain":"뛰어난 문제 해결능력을 지녀 말보다 행동으로 친구들을 돕는 행동대장형 친구","img":"images/9.gif","mbti-result":"당신은 말보다 행동이 먼저인 행동파 타입의 친구 입니다.  벌 확률이 높아, 친구들은 그런 당신을 멋있게 보기도 할거에요!","mbti-name":"ESTP"},
    "ESFP" : {"animal":"365 파뤼피플러","explain":"꾸미는 것에 타고났으며 함께하는 것을 사랑하는 매력 넘치는 코디네이터형 친구","img":"images/10.gif","mbti-result":"당신은 친구들의 패션을 책임질 수 있는 슈스스! 꾸미는 것에 소질이 있지만, 늘 용기를 심어주는 당신을 친구들은 매력적이게 느낄게 될 것입니다.","mbti-name":"ESFP"},
    "ENTP" : {"animal":"박찬호급 프로수다러","explain":"생각이 깊고 이해가 빨라 함께 있으면 지루할 틈이 없는 이야기꾼형 친구","img":"images/11.gif","mbti-result":"생각하기를 좋아하고, 사람들과 이야기하기를 좋아하는 타입으로 함께 있으면 대화만으로도 지루함 틈이 없게 만들어주는 친구입니다. 이해가 빠르고, 필요할 때, 제일 먼저 떠올리는 사람은 당신일 겁니다.","mbti-name":"ENTP"},
    "ENFP" : {"animal":"유리멘탈 스폰지밥","explain":"분위기를 주도할 줄 알고 함께 있는 친구들을 웃게 만드는 스트레스 브레이커형 친구","img":"images/12.gif","mbti-result":"친구들 사이에서 분위기를 주도하는 분위기 메이커 타입의  활기찬 에너지는 언제나 친구들에게 큰 힘이 된다는 사실을 잊지 마세요!","mbti-name":"ENFP"}
}

$("#A").click(function(){
  var type= $("#type").val();
  var preValue = $("#"+type).val();
  $("#"+type).val(parseInt(preValue)+1);
});
$("#title").click(function(){
    next();
});
function prev(){
    if(num2>=2){
        $(".progress-bar").attr('style','width:calc(100/12*'+num2+'%)');
        $("#title").html(q[num2]["title"]);
        $("#type").val(q[num2]["type"]);
        $("#A").html(q[num2]["A"]);
        $("#B").html(q[num2]["B"]);
        $("#C").html(q[num2]["C"]);
        $("#D").html(q[num2]["D"]);
    --num2;
        }else if(num2>2){
        $(".question").hide();
        $(".health").show();
        $(".custom-steps-1").addClass("custom-steps-active");
        $(".custom-span-1").addClass("main-color");
        $(".custom-steps-2").removeClass("custom-steps-active");
        $(".custom-span-2").removeClass("main-color");
        $(".custom-steps-2-m").removeClass("custom-steps-active-m");
        $(".custom-steps-1-m").addClass("custom-steps-active-m");
    }
}
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
        $("#img").attr("src",result[mbti]["img"]);
        $("#animal").html(result[mbti]["animal"]);
        $("#explain").html(result[mbti]["explain"]);
        $("#mbti-result").html(result[mbti]["mbti-result"]);
        $("#mbti-name").html(result[mbti]["mbti-name"]);
    }else{
        $(".progress-bar").attr('style','width:calc(100/12*'+num+'%)');
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        $("#C").html(q[num]["C"]);
        $("#D").html(q[num]["D"]);
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
function C()  {
    const target = document.getElementById('question_next');
    target.style.background='#215844';
    target.style.color='#fff';
    target.disabled = false;
}
function D()  {
    const target = document.getElementById('question_next');
    target.disabled = false;
    target.style.background='#215844';
    target.style.color='#fff';
}