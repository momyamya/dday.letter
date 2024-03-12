// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "으앙 나 이거 만드느라 꽤 힘들었어ㅠㅠ" },
  { "number": 2, "message": "건아 보고 싶어!!" },
  { "number": 3, "message": "배경이랑 음악이랑 이것저것 바꿔봤는데ㅠ" },
  { "number": 4, "message": "카드 그림들은 못 바꾸겠더라 엉엉" },
  { "number": 5, "message": "애기야 나 좋아해?" },
  { "number": 6, "message": "나도 애기 좋아해!!" },
  { "number": 7, "message": "얼른 보고 싶다 그치!" },
  { "number": 8, "message": "요즘 울 애기 연약해서 걱정이네" },
  { "number": 9, "message": "너가 아프지 않았으면 좋겠어" },
  { "number": 10, "message": "그리고 너가 행복했으면 좋겠어 건아" },
  { "number": 11, "message": "누나가 행복하게 만들어줄게!" },
  { "number": 12, "message": "요즘 내가 찡찡이여서 미안해" },
  { "number": 13, "message": "넌 진짜 멋진 사람이야" },
  { "number": 14, "message": "건이는 따뜻하고 다정한 사람이야" },
  { "number": 15, "message": "그래서 너가 좋아" },
  { "number": 16, "message": "가끔은 정말 너가 오빠같다니까" },
  { "number": 17, "message": "항상 정말정말 고마워" },
  { "number": 18, "message": "너가 푹 잤으면 좋겠다" },
  { "number": 19, "message": "힘든 거 있으면 언제든지 누나한테 말하구" },
  { "number": 20, "message": "이래봬도 누나니까!!" },
  { "number": 21, "message": "널 만나서 정말 행운이야" },
  { "number": 22, "message": "날 행복하게 만들어줘서 고마워 건아" },
  { "number": 23, "message": "우리 만나서 즐겁게 놀자!" },
  { "number": 24, "message": "사랑해!" }
];
