$('#custom-next-1').click(function(){
    $(".custom-steps-2").addClass("custom-steps-active");
    $(".custom-span-2").addClass("main-color");
    $(".custom-steps-1").removeClass("custom-steps-active");
    $(".custom-span-1").removeClass("main-color");
    $(".custom-steps-1-m").removeClass("custom-steps-active-m");
    $(".custom-steps-2-m").addClass("custom-steps-active-m");
    $('.custom-q-2').css('display','block');
    $('.custom-q-1').css('display','none');
    $('#result').css('display','none');
    });
    $('#custom-next-2').click(function(){
    $(".custom-steps-3").addClass("custom-steps-active");
    $(".custom-span-3").addClass("main-color");
    $(".custom-steps-2").removeClass("custom-steps-active");
    $(".custom-span-2").removeClass("main-color");
    $(".custom-steps-2-m").removeClass("custom-steps-active-m");
    $(".custom-steps-3-m").addClass("custom-steps-active-m");
    $('.custom-q-1').css('display','none');
    $('.custom-q-2').css('display','none');
    $('#result').css('display','block');
    });
    

// bmi 계산
    window.onload = () => {
    let button = document.querySelector("#button_1");

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
    
        let result = document.querySelector("#result");
    
        // Checking the user providing a proper
        // value or not
        if (height === "" || isNaN(height)) 
            result.innerHTML = "Provide a valid Height!";
    
        else if (weight === "" || isNaN(weight)) 
            result.innerHTML = "Provide a valid Weight!";
    
        // If both input is valid, calculate the bmi
        else {
    
            // Fixing upto 2 decimal places
            let bmi = (weight / ((height * height) 
                                / 10000)).toFixed(2);
    
            // Dividing as per the bmi conditions
            if (bmi < 18.6) result.innerHTML =
                `Under Weight : <span>${bmi}</span>`;
    
            else if (bmi >= 18.6 && bmi < 24.9) 
                result.innerHTML = 
                    `Normal : <span>${bmi}</span>`;
    
            else result.innerHTML =
                `Over Weight : <span>${bmi}</span>`;
        }
    };
// bmi end
// 버튼 색 바꾸기
    var btnContainera = document.getElementById("cb2");
    var btnsa = btnContainera.getElementsByClassName("c2");
    for (var i = 0; i < btnsa.length; i++) {
    btnsa[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("activea");
        if (current.length > 0) {
        current[0].className = current[0].className.replace(" activea", "");
        }
        this.className += " activea";
    });
    }
    // =====================누가 먹는가====================
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
    // =====================성별==========================
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
    // ===============================================
    var btnContainerc = document.getElementById("cb3");
    var btnsc = btnContainerc.getElementsByClassName("c3");
    for (var i = 0; i < btnsc.length; i++) {
    btnsc[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("activec");
        if (current.length > 0) {
        current[0].className = current[0].className.replace(" activec", "");
        }
        this.className += " activec";
    });
    }
    // ===============================================
    var btnContainerd = document.getElementById("cb4");
    var btnsd = btnContainerd.getElementsByClassName("c4");
    for (var i = 0; i < btnsd.length; i++) {
    btnsd[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("actived");
        if (current.length > 0) {
        current[0].className = current[0].className.replace(" actived", "");
        }
        this.className += " actived";
    });
    }
    // ===============================================
    var btnContainere = document.getElementById("cb5");
    var btnse = btnContainere.getElementsByClassName("c5");
    for (var i = 0; i < btnse.length; i++) {
    btnse[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("activee");
        if (current.length > 0) {
        current[0].className = current[0].className.replace(" activee", "");
        }
        this.className += " activee";
    });
    }
    // ===============================================
    var btnContainerf = document.getElementById("cb6");
    var btnsf = btnContainerf.getElementsByClassName("c6");
    for (var i = 0; i < btnsf.length; i++) {
    btnsf[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("activef");
        if (current.length > 0) {
        current[0].className = current[0].className.replace(" activef", "");
        }
        this.className += " activef";
    });
    }
    // ===============================================
    // 버튼 색 끝