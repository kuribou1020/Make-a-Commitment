$(function() {

    // ナビゲーションメニューから該当箇所へスクロール //
    $('.header-btn').click(function() {
        var position = $('.declear-wrapper').offset().top;
        $('html, body').animate({
            scrollTop: position
        }, 1500), ({
            queue: false
        });
    });

    // 目標を入力したときのアニメーション //
    $('.declear-btn').click(function(e) {
        var goalText = $('.declear-text').val();
        if (goalText === '') {
            alert('目標が入力されていません');
            e.preventDefault();
        } else {
            $('html, body').animate({
                scrollTop: 0
            }, 1500), ({
                queue: false
            });
            $('.before-wrapper').hide();
            $('.after-wrapper').show();
            $('.declear-content').text(goalText);
        }
    });

    // 目標を入力したときにエンターキーでは反映されない //
    $('.declear-text').keypress(function(e) {
        const key = e.keyCode || e.charCode || 0;
        if (key == 13) {
            e.preventDefault();
        }
    });

    // 画像のスライダー //
    var mySwiper = new Swiper('.swiper-container', {
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            reverseDirection: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        }
    });

    // リロード //
    $('.reload-btn').click(function () {
        window.location.reload();
    })

});