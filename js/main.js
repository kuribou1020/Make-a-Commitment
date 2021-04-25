$(function() {

    // ナビゲーションメニューから該当箇所へスクロール //
    $('.header-nav').click(function() {
        var position = $('.declear-wrapper').offset().top;
        $('html, body').animate({
            scrollTop: position
        }, 1500), ({
            queue: false
        });
    });

    // 目標を入力したときのアニメーション //
    $('.declear-btn').click(function(e) {
        var goals = $('.declear-text').val();
        if (goals === '') {
            alert('目標が入力されていません');
            e.preventDefault();
        } else {
            $('html, body').animate({
                scrollTop: 0
            }, 2500), ({
                queue: false
            });
            $('.head-wrapper').hide();
            $('.goals-wrapper').show();
            $('.declear-content').text(goals);
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
        autoplay: {
            delay: 5000,
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

    // スクロールに合わせて出てくるアニメーション //
    $(window).scroll(function () {
        $('.effect-fade').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight) {
                if ($(this).hasClass('fade-up')) {
                    $(this).addClass('effect-scroll');
                }
                if ($(this).hasClass('fade-down')) {
                    $(this).addClass('effect-scroll');
                }
            }
        });
    });

});