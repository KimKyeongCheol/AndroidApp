
var app = {

    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        app.member.onCreate();
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        /*var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');*/

        console.log('Received Event: ' + id);
    }
};
app.member=(function(){
    var onCreate=function(){
        setContentView();
        $('#loginBtn').click(e=>{
            e.preventDefault();
            var id = $('#id').val();
            var pass = $('#password').val();
            alert('아이디 패스워드 : '+id+','+pass);
            console.log('입력된 아이디 패스워드 :' + id + ',' + pass);
            $.ajax({
                async:false,
                url:'json/member.json',
                type: 'post',
                data:{
                    id : id,
                    pass : pass
                },
                dataType:'json',
                success: data=>{
                    alert('성공진입')
                    $.each(data,(i,o)=>{/*i=index,o=object다*/
                        if(o.id==id && o.pass==pass){
                            checkval = true;
                            return false;
                        }else{
                            checkval = false; /*checkval을 안주면 전역 (스태틱)이 된다.*/
                        }
                    });
                    if(checkval == true){
                        alert('sussces!!');

                    }else{
                        alert('fail!!');
                        $('#id').val='';
                        $('#pass').val='';
                    }
                },
                error : e =>{
                    alert('에러발생');
                }
            });
            app.reservation.onCreate();
        });
        $('#joinBtn').click(e=>{
            e.preventDefault();
        });

    };
    var setContentView=function(){
        var compUI={
            br    :()=>{return $('<br/>');},
            div   : x=>{return $('<div/>',{id:x});},
            h1    : x=>{return $('<h1/>',{id:x});},
            span  : x=>{return $('<span/>',{id:x});},
            iTxt  : x=>{return $('<input/>',{id:x,type:'text'});},
            aBtn  : x=>{return $('<a/>',{href:'#', role: 'button', id:x});},
            iBtn  : x=>{return $('<input/>',{id:x,type:'button'});},
            image : (x,y)=>{return $('<img/>',{id:x,src:y});},
            input : (x,y)=>{return $('<input/>',{id:x,type:y});},
            btn : x=>{return $('<button>',{id:x})},
            nav: x=>{return $('<nav/>',{id: x});},
            ul : x=>{return $('<ul/>',{id:x})},
            li : ()=>{return $('<li/>')},
            a : ()=>{return $('<a/>',{href:'#'})}
        };
        $('body').empty();
        $('<div></div>').attr('id','wrapper').appendTo('body');
        $('#wrapper').css({
            'width':'100%',
            'height':'100%',
            'background-color':'white'
        })
            .html('<div id="container">'
                +'<div id="content"></div>'
                +'</div>'
            );
        $('#container')
            .css({
                'width':'100%',
                'height':'100%',
                'background-color':'white'
            })
        $('#content')
            .css({
                'width':'100%',
                'height':'100%',
                'background-color':'white'
            })
            .html(
                '<input type="text" id="id" class="id" placeholder="ID를 입력하세요"/>'
                + '<input type="password" id="password" class="password" placeholder="비밀번호를 입력하세요" /><br>'
            );
        $('#id').css({
            'width':'100%',
            'height':'50px'
        });
        $('#password').css({
            'width':'100%',
            'height':'50px',
            'margin-top':'20px'

        });
        $('#content').append(compUI.btn('loginBtn'));
        $('#content').append(compUI.btn('joinBtn'));
        $('#loginBtn').text('로그인')
            .css({
                'width':'100%',
                'height':'50px',
                'margin-top':'20px'
            });
        $('#joinBtn').text('회원가입')
            .css({
                'width':'100%',
                'height':'50px',
                'margin-top':'20px'
            });

    };
    return {onCreate:onCreate};
})();
app.reservation=(function(){
    var onCreate=()=>{
        setContentView();
    };
    var setContentView=()=>{
        var compUI={
            br    :()=>{return $('<br/>');},
            div   : x=>{return $('<div/>',{id:x});},
            h1    : x=>{return $('<h1/>',{id:x});},
            span  : x=>{return $('<span/>',{id:x});},
            iTxt  : x=>{return $('<input/>',{id:x,type:'text'});},
            aBtn  : x=>{return $('<a/>',{href:'#', role: 'button', id:x});},
            iBtn  : x=>{return $('<input/>',{id:x,type:'button'});},
            image : (x,y)=>{return $('<img/>',{id:x,src:y});},
            input : (x,y)=>{return $('<input/>',{id:x,type:y});},
            btn : x=>{return $('<button>',{id:x})},
            nav: x=>{return $('<nav/>',{id: x});},
            ul : x=>{return $('<ul/>',{id:x})},
            li : ()=>{return $('<li/>')},
            a : ()=>{return $('<a/>',{href:'#'})}
        };
        $('body').empty();
        $('<div></div>').attr('id','wrapper').appendTo('body');
        $('#wrapper').css({
            'width':'100%',
            'height':'100%',
            'background-color':'white'
        })
            .html('<div id="container">'
                +'<div id="content"></div>'
                +'</div>'
            );
        $('#container')
            .css({
                'width':'100%',
                'height':'100%',
                'background-color':'white'
            })
        $('#content')
            .css({
                'width':'100%',
                'height':'100%',
                'background-color':'white'
            })
            .html(
                '<h1>예약화면</h1></br>'
            );

        var arr=['A','B','C','D','E'];
        var tb1='<table id="tbl" border=1 style="border-collapse:collapse; margin: 0 auto">';

        $.each(arr,(i,j)=>{
            tb1+='<tr style="height:40px; width:70px">';
            $.each(arr,(d,c)=>{
                tb1+='<td style="width:10%;'
                    +'text-align: center;">' + arr[i]+''+(d+1)+'</td>';
            });
        });
        tb1+='</tr></table>'
        $('#content').append(tb1);


    };
    return{onCreate : onCreate};
})();
$(function(){
    app.initialize();
});