$(document).ready(()=>{
    main.init();
    main.onCreate();

});
var main = main || {}
main = (()=>{
    let avg_temp, min_temp, max_temp,rain_fall;
    let init = e=>{
        avg_temp = $('#avg_temp');
        min_temp = $('#min_temp');
        max_temp = $('#max_temp');
        rain_fall = $('#rain_fall');
    };
    let onCreate =()=>{
        setContentView();
    };
    let setContentView =()=>{
       login();
    };
    let clearData = ()=>{
        avg_temp.val('')
        min_temp.val('')
        rain_fall.val('')
        rain_fall.val('')
    };
    let login =()=>{

    };
    let predict_price =()=>{
        $('#res_btn').click(e=>{
            e.preventDefault();
            alert('평균 기온'+avg_temp.val());
           /* $.getJSON($SCRIPT_ROOT+'/calc',
                {stmt:$('#output2').text()},
                d=>{
                alert('연산결과: '+d.result)
            });*/
        });
    }





    /*$('.btn-operate').click(function(){
        let newOperator = $(this).val();
        if(num1.val() !== ''
            && ('+-*!/').indexOf(num1.val()) == -1
            && op.val() !== ''){
            num2.val(mainOutput.html());
            if(('+-*!/').indexOf(num2.val()) != -1) return;
            let x = {};
            $.getJSON($SCRIPT_ROOT+'/calc',x,d=>{
                if(d.result.toString().length > 13){
                    digitError();
                }else{
                    // 계산결과
                }
            });

        }
    })*/

    return {init : init, onCreate: onCreate};
})();















