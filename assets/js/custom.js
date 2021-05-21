var num=1;

var q={
    1: {"title":"친구와 큰 오해가 생겨서 다툰 후, 해결하려고 할 때 당신의 선택은?","type":"EI","A":"일단 만나서 얘기하자고 한다.","B":"진심을 담은 카톡으로 대화를 신청한다."},
    2: {"title":"친구가 요즘 넷플릭스에서<br> 볼만한 것이 있는지 물어본다.<br> 당신의 대답은?","type":"EI","A":"어떤 장르, 배우가 좋은지 먼저 물어본다.","B":"내가 최근 본 것들을 바탕으로 추천해준다."},
    3: {"title":"당신이 친구와 식당에 갔을 때<br> 메뉴를 고르는 방식은?","type":"EI","A":"친구에게 먹고 싶은 메뉴가 없는지 먼저 물어본다.","B":"맛있어 보이는 메뉴를 골라 친구에게 물어본다."},
    4: {"title":"친구와 리뷰를 보고 찾아온 맛집의 대기시간이 1시간 이상이라면?","type":"EI","A":"포기하고 근처 다른 식당을 찾는다.","B":"기다려서라도 그 맛을 확인하고 간다."},
    5: {"title":"친구가 술 한 잔 하자고 한다.<br>어떤 술집으로 갈까?","type":"EI","A":"조용하고 아늑한 분위기의 술집","B":"시끄럽고 화려한 분위기의 술집"},
    6: {"title":"친구가 한 번도 시도해본 적 없던 <br>옷스타일을 제안한다면?","type":"EI","A":"급격한 변화는 부담스러우니 천천히 생각해본다.","B":"친구 말을 믿고 도전해본다."},
    7: {"title":"친구가 만나기로 한 약속 장소까지<br> 가는 법을 물어본다면?","type":"TF","A":"장소까지 찾아오는 방법을 상세하고 자세히 설명한다.","B":"큰 건물을 알려주고 근처와서 전화하라고 한다."},
    8: {"title":"친구와 여행을 가기로하고,<br> 여행 계획은 내가 짜기로 했다면?","type":"TF","A":"사전에 꼼꼼하게 계획을 세운다.","B":"중요한 것만 미리 정해놓고 나머지는 가서 생각한다."},
    9: {"title":"오랜만에 휴가를 '하루'를 얻었다.<br> 어떻게 보낼까?","type":"TF","A":"집에서 여유롭게 지낸다.","B":"친구들과 약속을 잡고 신나게 논다."},
    10: {"title":"타로 점이 안좋게 나온 친구에게 <br>당신이 해줄 위로의 말은?","type":"JP","A":"다른 곳에 가서 다시 한 번 받아보자고 한다.","B":"다 미신이라며 믿지말라고 한다."},
    11: {"title":"친구가 알바해 모은 돈으로 <br>해외여행 간다고 연락이 왔다.<br> 나의 첫번째 질문은?","type":"JP","A":"어떤 방법으로 어떻게 모았는지를 묻는다.","B":"모은 액수와 여행 목적지를 묻는다."},
    12: {"title":"집 가구를 조립하던 중 친구에게<br> 지금 만나자는 연락이 왔다면?","type":"JP","A":"먼저 친구를 만나고와서 나머지 조립을 완성한다.","B":"하던 조립을 완성하고 친구를 만나러 간다."}
}
var result = {
    "ISTJ" : {"animal":"강철멘탈 프로직진러","explain":"책임감이 강하고 친구들에게 항상 믿음직스럽다 기억되는 순수 결정체형 친구","img":"images/13.gif","mbti-result":"당신은 청렴결백, 순수가 그 자체인 순수결정체 타입 입니다! 책임감이 강하고 헌신적인 성향이 강해, 친구들에게 항상 믿음직한 친구로 자리매김하는 소나무 같은 친구 입니다. 실행력이 높은 성향을 가지고 있어 친구들 사이에서 무슨 일을 계획할 때 빠르게 처리하는 장점으로 모임에서 언제나 핵심 구성원이 되기도 합니다. 철저하고 논리적인 편이라 간혹 감정이 없어보인다는 친구들의 오해를 사기도하지만 의외로 연약함은 숨기지 못하는 편이라 금새 오해가 풀리기도 합니다. 정직함이 가장 큰 매력인 당신, 세상이 아무리 불합리하게 느껴져도 그 정직함을 잃지마시길 바랍니다.","mbti-name":"ISTJ"},
    "ISFJ" : {"animal":"살아있는 방탄조끼","explain":"세심하고 꼼꼼한 성격으로 언제나 친구들을 보호하는 완벽한 친구형 친구","img":"images/14.gif","mbti-result":"당신은 친구로서 단점이 거의 없는 완벽에 가까운 친구 타입입니다. 조용하고 내성적인 성격을 제외하면 세심하고 꼼꼼한 성격으로 주변의 친구들을 잘 챙기며, 보호본능도 뛰어나 내 친구만큼은 꼭 지켜내고 마는 수호자 스타일의 친구입니다. 인간관계에 있어도 뛰어난 능력을 가지고 있으며, 이타 주의적 성향이 강해 남을 먼저 배려하고 생각하려는 마음이 매력인 당신. 당신과 친구가 됐다면 그 사람은 축복이라고 말해주고 싶습니다.","mbti-name":"ISFJ"},
    "INTJ" : {"animal":"야망있는 꼰대 중대장","explain":"풍부한 지식과 결단력으로 정확한 계산을 해내는 리더형 친구","img":"images/15.gif","mbti-result":"풍부한 지식을 바탕으로 정확한 계산을 해내는 스타일에 결단력까지 갖추고 있어, 친구들 사이에서 리더로 제격인 사람입니다. 계획적이고 호기심도 많아 함께 여행 가면 지루할 틈이 없는 타입으로 많은 친구들이 당신과 함께 놀러 가는 것을 선호한다는 사실! 하지만 다소 원칙주의자 성향도 있어, 친구들에게 답답하다는 생각을 심어줄 수 있으니 모든 것을 혼자 결정하기보다 의견을 듣고 조율해가려는 모습을 보여주는 것이 중요합니다. 의지가 강해 언제나 친구들에게 든든한 버팀목이 되어주는 당신은 최고의 친구!","mbti-name":"INTJ"},
    "INFJ" : {"animal":"반도의 잔다르크","explain":"성실하고 착한 성격에 친구 도와주기를 좋아하는 도우미형 친구","img":"images/16.gif","mbti-result":"당신은 나긋하고 성실함이 있는 진짜 착한 친구 타입 입니다. 도덕적 관념이 강해 나쁜 짓은 물론, 불의를 보면 쉽게 지나치지 못하는 탓에 친구들 사이에서 착함의 대명사로 불립니다. 사교성도 뛰어나고, 섬세하며, 친구들 사이에서도 평등함을 유지하려는 성격이라 많은 친구들에게 가장 편한 친구가 되어줄 수 있는 사람입니다. 가끔 의견을 강하게 주장하는 성향 때문에 친구들을 당황스럽게 만드는 경우가 있지만 금방 부드러운 분위기로 다시 돌려놓는 능력도 가지고 있습니다. 스트레스에 약한 편이라, 가끔씩 혼자만의 여유를 즐기며 잘 쉬어준다면 항상 밝음을 유지할 수 있습니다.","mbti-name":"INFJ"},
    "ISTP" : {"animal":"걸어다니는 알파고","explain":"함께하는 시간이 흥미롭고 즐거우며 다양한 경험들을 전해주는 척척박사형 친구","img":"images/1.gif","mbti-result":"무엇이든 못하는 게 없는 친구들 사이의 척척박사! 당신의 호기심이 많고 새로운 것을 좋아하는 성향 때문에 친구들은 항상 당신과 함께하는 시간들을 흥미롭고 즐겁다고 느낍니다. 자신이 경험들을 이야기하기 좋아하며, 유머까지 가지고 있어 친구들 사이에서 이야기보따리로 언제나 환영받는 당신! 가끔 예상치 못한 행동과 다소 낮은 공감능력으로 친구들을 당황스럽게 만들기도 하기에, 솔직한 모습들을 더 많이 보여준다면 친구들은 당신을 이해하고 더 좋아해 줄 것입니다.","mbti-name":"ISTP"},
    "ISFP" : {"animal":"성능만점 감정 스캐너","explain":"감각적이고 독특함이 매력이며 '나를 잘 알아주는 친구'로 기억되는 예술가형 친구","img":"images/2.gif","mbti-result":"감각적이고 독특함이 매력적인 타입의 친구입니다. 자유로운 성향을 지니고 있어 친구들 사이에서 예술가라 불립니다. 상대방의 감정을 빠르게 읽어내는 능력을 지녔으며 상황에 따라 자신을 빠르게 변화시키는 재치도 뛰어나 친구들에게 '항상 나를 잘 알아주는 친구'로 기억됩니다. 다소 감정적인 성향도 지니고 있어, 친구들에게 다혈질이나 감정 조절을 못한다는 인식을 줄 수도 있지만, 차분하게 한 번 더 생각하는 습관을 기른다면 훨씬 더 매력적인 친구가 될 수 있습니다.","mbti-name":"ISFP"},
    "INTP" : {"animal":"4차원 팩트폭격기","explain":"평범한 것을 싫어하고 독특한 관점을 지닌 고민 상담가형 친구","img":"images/3.gif","mbti-result":"뻔하고, 평범한 것을 죽기보다 싫어하는 당신! 수줍음이 많긴 하지만 독특한 관점과 독창성이 뛰어나 대다수의 친구들에게 관심과 부러움의 대상이 되기도 하는 사람입니다. 창의력이 뛰어난 타입으로 함께 있는 주변 친구들에게 많은 영감을 주고, 고민이 많거나 방향을 잃은 친구에게 항상 좋은 길잡이가 되기도 합니다. 단, 트집을 잡고 늘어지는 성향 때문에 친구들과 대화할 때 분위기를 흩트려놓는 경우가 있을 수 있으니 가끔은 모른 척 넘어가 주는 연습도 해두면 좋습니다. 통찰력이 뛰어난 당신은 친구들에게 최고의 고민 상담가 입니다.","mbti-name":"INTP"},
    "INFP" : {"animal":"한국어 만렙 외국인","explain":"항상 긍정적이며 똘끼와 높은 언어능력으로 무장한 행복전도사형 친구","img":"images/4.gif","mbti-result":"매사에 긍정적이며 다수보다 소수의 친구들과 더 잘 어울리는 스타일입니다. 항상 침착하고 열정과 이해심도 많아 친구들에게 존경을 받기도 하며 숨겨진 똘끼도 있어 신선함으로 친구들에게 늘 즐거움을 주는 친구입니다. 언어능력이 뛰어나 대화도 잘할뿐더러, 상처로부터 회복력도 높은 편이라 항상 원만한 친구관계를 유지할 수 있는 능력을 가지고 있습니다. 그러나 타인의 의도나 검은 속내를 잘 파악하지 못하는 편이라 친구들에게 이용당하는 일이 있을 수 있음을 꼭 경계하시라 말씀드리고 싶습니다. 항상 좋은 생각, 좋은 마음을 갖고 사는 당신은 친구들의 행복 전도사!","mbti-name":"INFP"},
    "ESTJ" : {"animal":"오늘만 사는 강철 코뿔소","explain":"뚝심 있고 헌신적인 모습으로 항상 의지하게 되는 아빠 같은 친구","img":"images/5.gif","mbti-result":"뚝심 있고 친구에게 헌신적인 스타일을 가진 당신! 편법을 싫어하고, 정확한 것을 좋아하는 당신의 성향 때문에 간혹 친구들로부터 융통성 없다는 평가를 받기도 하지만 뛰어난 판단력과 공평함이 장점인 당신의 모습에 친구들은 조언을 구하거나, 많은 의지를 하고 있습니다. 빈말이 없고 친구 관리에 능숙한 면도 지니고 있어, 언제나 푸근하고 듬직한 아빠 같은 친구로 기억될 것 입니다.","mbti-name":"ESTJ"},
    "ESFJ" : {"animal":"관심종자 개복치","explain":"애정과 관심 쏟기를 좋아하고 타고난 끼로 매력을 발산하는 인싸형 친구","img":"images/6.gif","mbti-result":"당신은 친구들 사이에서 인싸로 불릴 성향을 모두 타고난 사람입니다. 친구들에게 애정과 관심을 쏟길 좋아하는 타입으로 돕는 것에 즐거움을 느끼기 때문에 친구 사이에서 엄마 같은 존재로 여겨집니다. 타고난 끼로, 분위기 메이커 역할까지 하는 당신은 모임이나, 그룹에서 없어서는 안 될 존재로 기억되기도 합니다. 그런데 예민하고 상처도 쉽게 받는 편이라 자칫 친구들에게 감정 기복이 있다는 이야기를 듣게 되는 경우도 있으니 항상 표현에 신중해야 합니다. 타고난 관종인 당신! 언제나 밝고 명랑한 모습으로 행복을 전파하는 친구입니다.","mbti-name":"ESTJ"},
    "ENTJ" : {"animal":"자타공인 열정만수르","explain":"함께 하는 것을 좋아하고 넘치는 카리스마로 모두를 이끄는 지휘자형 친구","img":"images/14.gif","mbti-result":"항상 자신감 넘치고 카리스마 있는 타입의 사람입니다. 냉철한 판단력과 귀신같은 결정력으로 항상 친구들을 승리로 이끌어냅니다. 그런 모습에 친구들은 당신이 항상 리더가 되어주기를 바라기도 합니다. 당신은 '함께'라는 것에 큰 의미를 두기 때문에 의리가 있고 믿음직한 구석이 있어, 누구라도 걱정 없이 믿고 의지해도 되는 친구이기도 합니다. 단, 가끔 무모할 정도로 이성적이고 감정 표현에 서툴러 친구들에게 서운함을 줄 수도 있으니 한 번씩 솔직한 모습으로 친구들의 오해를 풀어주면 좋습니다. 도전적이고 의지도 강한 당신! 친구들에게 당신은 언제나 매력적인 친구입니다.","mbti-name":"ENTJ"},
    "ENFJ" : {"animal":"총일받이 오지랖퍼","explain":"총대 메기를 두려워하지 않고 열정과 강직함이 매력인 돌격대장형 친구","img":"images/8.gif","mbti-result":"친구들 사이에서 총대 메기를 두려워하지 않는 리더 중에 리더! 당신은 카리스마와 열정을 타고났으며 강직함이 있어 친구들에게 항상 매력적으로 자리매김하고 있는 친구입니다. 친구 일에 발 벗고 나서기를 주저하지 않고, 선한 일을 즐기는 당신의 성향 덕에 친구들은 항상 고마움을 느끼고, 본받아야 할 친구로 생각하기도 합니다. 혼자 잘 되기보다 함께 잘 되기를 좋아하기에 언제나 친구들을 챙기려 하지만, 간혹 그 정도가 지나쳐 친구들에게 부담이 되기도 한다는 사실을 기억하면 좋습니다. 당신의 어른스러운 모습으로 안정감을 주기에 언제나 친구는 당신에게 편안함을 느끼고 있습니다.","mbti-name":"ENFJ"},
    "ESTP" : {"animal":"겁 없는 쌉싸블러","explain":"뛰어난 문제 해결능력을 지녀 말보다 행동으로 친구들을 돕는 행동대장형 친구","img":"images/9.gif","mbti-result":"당신은 말보다 행동이 먼저인 행동파 타입의 친구 입니다. 문제해결능력이 뛰어나 친구들의 고민이나 문제들을 해결해주는데 타고난 성향을 지녔으며, 늘 규칙을 깨는 방법들로 친구들에게 새로움과 깨달음을 선물해주는 역할을 수행하기도 합니다. 말은 직설적인 편이며, 대화는 원하는 주제에만 흥미를 갖기때문에 친구들로부터 무뚝뚝하다는 평가를 받을 수도 있지만, 성공해 돈을 많이 벌 확률이 높아, 친구들은 그런 당신을 멋있게 보기도 할거에요!","mbti-name":"ESTP"},
    "ESFP" : {"animal":"365 파뤼피플러","explain":"꾸미는 것에 타고났으며 함께하는 것을 사랑하는 매력 넘치는 코디네이터형 친구","img":"images/10.gif","mbti-result":"당신은 친구들의 패션을 책임질 수 있는 슈스스! 꾸미는 것에 소질이 있고, 사람의 특성과 특징을 한 번에 알아보는 성향을 가진 당신은 친구들의 패션까지도 완벽하게 설계해 줄 수 있는 최고의 코디네이터 친구입니다. 사람들과 어울리는 것을 즐기며, 고민까지 잘 들어주는 능력에 친구들이 끊이지 않고 찾아오는 당신은, 그들의 안식처입니다. 다른 성향에 비해 참을성과 책임감이 다소 낮을 수도 있지만, 늘 용기를 심어주는 당신을 친구들은 매력적이게 느낄게 될 것입니다.","mbti-name":"ESFP"},
    "ENTP" : {"animal":"박찬호급 프로수다러","explain":"생각이 깊고 이해가 빨라 함께 있으면 지루할 틈이 없는 이야기꾼형 친구","img":"images/11.gif","mbti-result":"생각하기를 좋아하고, 사람들과 이야기하기를 좋아하는 타입으로 함께 있으면 대화만으로도 지루함 틈이 없게 만들어주는 친구입니다. 이해가 빠르고, 서로의 관점의 차이도 빠르게 캐치하는 편이라 시시콜콜 같이 수다 떨기에 이보다 더 좋은 친구는 없습니다. 하지만, 가끔씩 논쟁을 즐기기도 하고 성향 자체가 말을 예쁘게 순화하여 돌려 말하기보다 직설적인 대화를 좋아하는 탓에 친구들에게 상처를 주는 경우도 있으니 침착하게 대화하는 방법을 연습해두면 좋습니다. 친구들이 대화가 필요할 때, 제일 먼저 떠올리는 사람은 당신일 겁니다.","mbti-name":"ENTP"},
    "ENFP" : {"animal":"유리멘탈 스폰지밥","explain":"분위기를 주도할 줄 알고 함께 있는 친구들을 웃게 만드는 스트레스 브레이커형 친구","img":"images/12.gif","mbti-result":"친구들 사이에서 분위기를 주도하는 분위기 메이커 타입의 친구입니다. 타인을 즐겁게 하는 것이 곧 자신의 기쁨이기도 해서, 언제나 함께 있는 친구들의 시간을 즐겁게 만들려 노력하는 성향을 가졌습니다. 노는 법을 알기에 주변 사람들을 즐겁게 해주는 것은 물론, 본인의 스트레스까지 잘 해소하기 때문에 항상 밝고 에너지 넘치는 모습으로 주변에 친구들이 끊이지 않는 편입니다. 다만, 지루함을 견디지 못하는 편이라 진지하거나 진중한 분위기는 어려워하는 경향을 가지고 있기도 합니다. 직관에 의지하고 행동하는 탓에 간혹 오해를 만들기도 하지만, 당신의 밝고 활기찬 에너지는 언제나 친구들에게 큰 힘이 된다는 사실을 잊지 마세요!","mbti-name":"ENFP"}
}
// function start(){
//     $(".start").hide();
//     $(".health").show();
// }
function start() { 
    var checkBox = document.getElementById("all_agree");
    if (checkBox.checked == true){
        $(".start").hide();
        $(".health").show();
    } else {
    alert('개인정보 수집에 동의해주세요.');
    } }
function healthy(){
    $(".start").hide();
    $(".health").hide();
    $(".question").show();
}
function A()  {
    const target = document.getElementById('question_next');
    target.disabled = false;
}
function B()  {
    const target = document.getElementById('question_next');
    target.disabled = false;
}
$("#A").click(function(){
  var type= $("#type").val();
  var preValue = $("#"+type).val();
  $("#"+type).val(parseInt(preValue)+1);
//   next();
});
// $("#B").click(function(){
//     next();
// });
$("#question_next").click(function(){
    next();
    const target = document.getElementById('question_next');
    target.disabled = true;
});
$("#title").click(function(){
    next();
});

function next(){
    if(num==13){
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
        // if($("#EFGH").val()<1){
        //     mbti+="E"
        // } else if($("#EFGH").val()<2)
        //     mbti+="F"
        // } else if($("#EFGH").val()<3){
        //     mbti+="G"
        // } else{
        //     mbti+="H"
        // }
        // if($("#IGKL").val()<1){
        //     mbti+="I"
        // } else if($("#IGKL").val()<2)
        //     mbti+="G"
        // } else if($("#IGKL").val()<3){
        //     mbti+="K"
        // } else{
        //     mbti+="L"
        // }
        // if($("#MNOP").val()<1){
        //     mbti+="M"
        // } else if($("#MNOP").val()<2)
        //     mbti+="N"
        // } else if($("#MNOP").val()<3){
        //     mbti+="O"
        // } else{
        //     mbti+="P"
        // }
        // if($("#QRST").val()<1){
        //     mbti+="Q"
        // } else if($("#QRST").val()<2)
        //     mbti+="R"
        // } else if($("#QRST").val()<3){
        //     mbti+="S"
        // } else{
        //     mbti+="T"
        // }
        ($("#EI").val() < 2 )? mbti+="I" : mbti+="E";
        ($("#SN").val() < 2 )? mbti+="N" : mbti+="S";
        ($("#TF").val() < 2 )? mbti+="F" : mbti+="T";
        ($("#JP").val() < 2 )? mbti+="P" : mbti+="J";
        // 삼항연산자
        // alert(mbti);
        $("#img").attr("src",result[mbti]["img"]);
        $("#animal").html(result[mbti]["animal"]);
        $("#explain").html(result[mbti]["explain"]);
        $("#mbti-result").html(result[mbti]["mbti-result"]);
        $("#mbti-name").html(result[mbti]["mbti-name"]);
        // $("#question-num").html(result[mbti]["question-num"]);
    }else{
        $(".progress-bar").attr('style','width:calc(100/12*'+num+'%)');
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
    num++;
    }
}

$('#healthy').click(function(){
    $(".custom-steps-2").addClass("custom-steps-active");
    $(".custom-span-2").addClass("main-color");
    $(".custom-steps-1").removeClass("custom-steps-active");
    $(".custom-span-1").removeClass("main-color");
    $(".custom-steps-1-m").removeClass("custom-steps-active-m");
    $(".custom-steps-2-m").addClass("custom-steps-active-m");
    $(".bmi").hide();
});

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
                `저체중 : <span>${bmi}</span>`;
    
            else if (bmi >= 18.6 && bmi < 24.9) 
                result.innerHTML = 
                    `정상체중 : <span>${bmi}</span>`;
    
            else result.innerHTML =
                `과체중 : <span>${bmi}</span>`;
        }
    };
// bmi end
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