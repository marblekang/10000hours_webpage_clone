const startBtn = document.querySelector('.start_btn');
const openBtn = document.querySelector('.modal_btn');
const result = document.querySelector('.result');
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector(".close_btn");
const shareBtn = document.querySelector(".share_btn");
const loading = document.querySelector(".result_loading");

function copyUrl(){
     let url = '';    // <a>태그에서 호출한 함수인 clip 생성
        let textarea = document.createElement("textarea");  
        //url 변수 생성 후, textarea라는 변수에 textarea의 요소를 생성
        
        document.body.appendChild(textarea); //</body> 바로 위에 textarea를 추가(임시 공간이라 위치는 상관 없음)
        url = window.document.location.href;  //url에는 현재 주소값을 넣어줌
        textarea.value = url;  // textarea 값에 url를 넣어줌
        textarea.select();  //textarea를 설정
        document.execCommand("copy");   // 복사
        document.body.removeChild(textarea); //extarea 요소를 없애줌
        
        alert("URL이 복사되었습니다.")  // 알림창

  }




function openModal(){
  modal.style.display='flex';
}

function closeModal(){
  modal.style.display = 'none';
}

window.onclick = function(event){
  if(event.target == modal){
    closeModal();
  }
}

function calculator(){
  const fieldVal = document.querySelector('#field_value');
    let timeVal = document.querySelector('#time_value');
    let timeVal_int = Number(timeVal.value);
    const fieldResult = document.querySelector('.field_result');
    const timeResult = document.querySelector('.time_result');
    
    if(fieldVal.value == ""){
      alert('입력되지 않았습니다.');
      fieldVal.focus();
      return false;
    }else if(timeVal_int.value == ""){
      alert('입력되지 않았습니다.')
      timeVal.focus();
      return false;
    }else if(timeVal_int > 24) {
      alert('잘못 입력된 값입니다. 24이하의 값을 입력해 주세요.')
      return false;
    }

    result.style.display='none';
    loading.style.display = 'flex';

    setTimeout(()=>{
    loading.style.display='none';
    result.style.display='flex';
    fieldResult.innerText = fieldVal.value;
    timeResult.innerText = parseInt((10000/timeVal_int),10);
    },1800)
    
}

shareBtn.addEventListener('click',copyUrl);
openBtn.addEventListener('click',openModal);
closeBtn.addEventListener('click',closeModal);
startBtn.addEventListener('click',calculator);