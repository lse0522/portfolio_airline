$(function(){
  // Include html Files
  $('.header-include').load('/include/header.html')
  $('.footer-include').load('/include/footer.html')

  // 여행지 리스트 가져오기
  $('.flight-products-list').show();

  $('input[name="tabmenu"]').change(function(){
    let tabId = $(this).attr('id');

    if(tabId === "tab1"){
      $('.flight-products-list').show();
      $('.hotel-products-list').hide();
    }else{
      $('.hotel-products-list').show();
      $('.flight-products-list').hide();
    }

  })

  // 항공 여행권 검색 모달창 열기
  $('.flight-start-button').click(function(){
    $('.flight-start-modal').addClass('flight-view')
  })
  $('.flight-end-button').click(function(){
    $('.flight-end-modal').addClass('flight-view')
  })
  $('.flight-date-button').click(function(){
    $('.flight-date-modal').addClass('flight-view')
  })
  $('.flight-person-button').click(function(){
    $('.flight-person-modal').addClass('flight-view')
  })
  $('.hotel-button').click(function(){
    $('.hotel-modal').addClass('hotel-view')
  })
  $('.hotel-date-button').click(function(){
    $('.hotel-date-modal').addClass('hotel-view')
  })
  $('.hotel-person-button').click(function(){
    $('.hotel-person-modal').addClass('hotel-view')
  })

  // 항공 여행권 검색 모달창 닫기
  $('.flight-start-modal-close').click(function(){
    $('.flight-start-modal').removeClass('flight-view')
  })
  $('.flight-end-modal-close').click(function(){
    $('.flight-end-modal').removeClass('flight-view')
  })
  $('.flight-date-modal-close').click(function(){
    $('.flight-date-modal').removeClass('flight-view')
  })
  $('.flight-person-modal-close').click(function(){
    $('.flight-person-modal').removeClass('flight-view')
  })
  $('.hotel-modal-close').click(function(){
    $('.hotel-modal').removeClass('hotel-view')
  })
  $('.hotel-date-modal-close').click(function(){
    $('.hotel-date-modal').removeClass('hotel-view')
  })
  $('.hotel-person-modal-close').click(function(){
    $('.hotel-person-modal').removeClass('hotel-view')
  })

  // 항공 서브 리스트 열기
  $('.flight-list-item').click(function(){
    $(this).next().stop().slideToggle();
    $(this).toggleClass('active');
  })

  // 달력 클릭 이벤트
  $('.calendar button').click(function(){
    if($('.calendar button.active').length < 2){
      $(this).toggleClass('active')
    }else{
      $('.calendar button.active').removeClass('active')
    }  
  })  

  // 좌석 선택
  $('.seat-item').click(function(){
    if (!$(this).hasClass('active')) {
      $('.seat-item').removeClass('active');
      $(this).addClass('active');
  }
  })

  // 항공 인원 선택
  let adultCount = document.getElementById('flight-adult-num').innerText;
  let childCount = document.getElementById('flight-child-num').innerText;
  let infantCount = document.getElementById('flight-infant-num').innerText;

  // 호텔 인원 선택
  let hoteladultCount = document.getElementById('hotel-adult-num').innerText;
  let hotelchildCount = document.getElementById('hotel-child-num').innerText;

  // 항공 인원 count
  $('.flight-adult-plus').click(function(){
    if(adultCount < 10){
      adultCount ++;
      $('#flight-adult-num h1').text(adultCount);
    }else{
      alert('10명 이하로 설정이 가능합니다.')
    }
  })
  $('.flight-adult-minus').click(function(){
    if(adultCount > 0){
      adultCount --;
      $('#flight-adult-num h1').text(adultCount);
    }
  })
  $('.flight-child-plus').click(function(){
    if(childCount < 10){
      childCount ++;
      $('#flight-child-num h1').text(childCount);
    }else{
      alert('10명 이하로 설정이 가능합니다.')
    }
  })
  $('.flight-child-minus').click(function(){
    if(childCount > 0){
      childCount --;
      $('#flight-child-num h1').text(childCount);
    }
  })
  $('.flight-infant-plus').click(function(){
    if(infantCount < 10){
      infantCount ++;
      $('#flight-infant-num h1').text(infantCount);
    }else{
      alert('10명 이하로 설정이 가능합니다.')
    }
  })
  $('.flight-infant-minus').click(function(){
    if(infantCount > 0){
      infantCount --;
      $('#flight-infant-num h1').text(infantCount);
    }
  })

  // 호텔 인원 count
  $('.hotel-adult-plus').click(function(){
    if(hoteladultCount < 10){
      hoteladultCount ++;
      $('#hotel-adult-num h1').text(hoteladultCount);
    }else{
      alert('10명 이하로 설정이 가능합니다.')
    }
  })
  $('.hotel-adult-minus').click(function(){
    if(hoteladultCount > 0){
      hoteladultCount --;
      $('#hotel-adult-num h1').text(hoteladultCount);
    }
  })
  $('.hotel-child-plus').click(function(){
    if(hotelchildCount < 10){
      hotelchildCount ++;
      $('#hotel-child-num h1').text(hotelchildCount);
    }else{
      alert('10명 이하로 설정이 가능합니다.')
    }
  })
  $('.hotel-child-minus').click(function(){
    if(hotelchildCount > 0){
      hotelchildCount --;
      $('#hotel-child-num h1').text(hotelchildCount);
    }
  })

  $('.seat-category').click(function(){
    $('.seat-category em').slideToggle('active')
  })

  $('.hotel-local-list li').click(function(){
    if(!$(this).hasClass('active')){
      $('.hotel-local-list li').removeClass('active')
      $(this).addClass('active')
    }
  })
  
  // 로딩 페이지 열기
  $('.flight-search-button').click(function(){
    $('.container').addClass('not-view');
    $('.loading-modal').addClass('view');
  
    // number-grow를 0으로 초기화
    $('#number-grow').text(0);
    let startNum = 0;
    const endNum = 1650;
  
  // 로딩 페이지 숫자 증가
    const grow = setInterval(() => {
      startNum++;
      $('#number-grow').text(startNum);
  
      if(startNum >= endNum){
        clearInterval(grow);
      }
    }, 5);
  
    setTimeout(function() {
      $('.container').removeClass('not-view');
      $('.loading-modal').removeClass('view');
    }, 10000);
  })
})