const gu = document.querySelector("#gu_btn");
console.log(gu.id);
console.log(gu.innerHTML)
$("#hand").slideDown(1000);
$("#gu_btn").on("click", function () {
    // 乱数
    const r = Math.ceil(Math.random() * 3);
    // if分岐処理
    let view = "";
    let nice = "";
    let vs = "";
    if (r == 1) {
        view = '<img src="img/you_win.jpeg">';
        vs = 'ケイスケホンダの負け';
    } else if (r == 2) {
        view = '<img src="img/honda_aiko.png">';
        vs = 'あいこ';
    } else if (r == 3) {
        view = '<img src="img/you_lose.jpeg">';
        vs = 'ケイスケホンダの勝ち';
    }
    $("#judgment").html(view);
    $("#judgment").fadeOut(0);
    $("#judgment").fadeIn(1000);
    $("#memo").html(vs);
    // $("#judgement").fadeIN("slow");
    // $("#judgement").fadeOut(view);
    

    if (r == 1) {
        nice = '<img src="img/cho.jpeg">';
        // hand = '負け';
    }else if (r == 2) {
        nice = '<img src="img/gu.jpeg">';
        // hand = 'あいこ';
    }else if (r == 3) {
        nice = '<img src="img/pa.jpeg">';
        // hand = '勝ち';
    }
    $("#pc_hands").html(nice);
    $("#pc_hands").fadeOut(0);
    $("#pc_hands").fadeIn(1000);
    // $("#key1").html(hand);
    // $("#pc_hands").fadeIN(nice);
    // $("#pc_hands").fadeOut(nice);
    
})
// var abc = '<a href="#">リンク</a>';
// $("#pc_hands").html(abc);

$("#cho_btn").on("click", function () {
    // 乱数
    const r = Math.ceil(Math.random() * 3);
    // if分岐処理
    let view = "";
    let vs = "";
    if (r == 1) {
        view = '<img src="img/you_win.jpeg">';
        vs = 'ケイスケホンダの負け';
    }else if (r == 2) {
        view = '<img src="img/honda_aiko.png">';
        vs = 'あいこ';
    }else if (r == 3) {
        view = '<img src="img/you_lose.jpeg">';
        vs = 'ケイスケホンダの勝ち';
    }
    $("#judgment").html(view);
    $("#judgment").fadeOut(0);
    $("#judgment").fadeIn(1000);
    $("#memo").html(vs);

    if (r == 1) {
        nice = '<img src="img/pa.jpeg">';
        // hand = '負け';
    }else if (r == 2) {
        nice = '<img src="img/cho.jpeg">';
        // hand = 'あいこ';
    }else if (r == 3) {
        nice = '<img src="img/gu.jpeg">';
        // hand = '勝ち';
    }
    $("#pc_hands").html(nice);
    $("#pc_hands").fadeOut(0);
    $("#pc_hands").fadeIn(1000);
    // $("#key1").html(hand);
    
})
$("#par_btn").on("click", function () {
    // 乱数
    const r = Math.ceil(Math.random() * 3);
    // if分岐処理
    let view = "";
    let vs = "";
    if (r == 1) {
        view = '<img src="img/you_win.jpeg">';
        vs='ケイスケホンダの負け'
    } else if (r == 2) {
        view = '<img src="img/honda_aiko.png">';
        vs='あいこ'
    }else if (r == 3) {
        view = '<img src="img/you_lose.jpeg">';
        vs='ケイスケホンダの勝ち'
    }
    $("#judgment").html(view);
    $("#judgment").fadeOut(0);
    $("#judgment").fadeIn(1000);
    $("#memo").html(vs);

    if (r == 1) {
        nice = '<img src="img/gu.jpeg">';
        // hand='負け'
    }else if (r == 2) {
        nice = '<img src="img/pa.jpeg">';
        // hand='あいこ'
    }else if (r == 3) {
        nice = '<img src="img/cho.jpeg">';
        // hand='勝ち'
    }
    $("#pc_hands").html(nice);
    $("#pc_hands").fadeOut(0);
    $("#pc_hands").fadeIn(1000);
    // $("#key1").html(hand);
    
})

$("#save").on('click', function () {
    // jQueryでinputのhtmlの記述された文字を取得する方法
    // val();
    // $("#xx").val(); inputタグにしか使えない
    // input text email textarea tel
    let key = $("#key").val();
    let memo = $("#memo").val();
    console.log(key, 'データが取れてるかチェック')
    console.log(memo, 'データが取れてるかチェック')

    // データを保存します⇨localStrageを使います🤗
    localStorage.setItem(key, memo)

    // const html = '<tr><th>' + key + '</th><td>' + value + '</td></tr>';
    const html = `
                <tr>
                    <th>${key}</th>
                    <td>${memo}</td>
                </tr>    
            `;

    $("#list").append(html);

    // if (key === '') {
    //     alert('文字入れろよ！！！！')
    // }
});






//2.clear クリックイベント
$("#clear").on("click", function () {
    localStorage.clear();

    // これだけだとhtmlが残ってしまうのでそれも削除
    $("#list").empty();
});




//3.ページ読み込み：保存データ取得表示

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const html = `
        <tr>
            <th>${key}</th>
            <td>${value}</td>
        </tr>
    
    `
    // 画面上に埋め込み
    $("#list").append(html)
}






    




