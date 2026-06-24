// 1. 작품 상세 데이터 저장소
const workData = {
    video1: {
        title: "순우리말 홍보 및 타이포그래픽 모션 그래픽",
        purpose: "잊혀가는 순우리말을 트렌디한 숏폼 모션 그래픽으로 시각화하여 대중에게 전파",
        points: "• 메시지 창이 실제 '짐'이 되어 주인공을 짓누르는 위트 있는 스토리텔링<br>• 외래어/신조어의 시각적 임팩트를 극대화한 타이포그래피 강조<br>• 포스터 내 '한글날' 암시 단서 배치로 순우리말 목적성 메시지 동시 획득",
        desc: "• 언어 문화 문제를 독창적 연출(메시지 창의 물리화)로 풀어낸 모션 그래픽<br>• 철저한 타이포 강조 디자인과 감각적 템포로 비주얼과 메시지 동시 획득",
        contrib: "개인 프로젝트 100% (시나리오 기획 / 그래픽 디자인 / 영상 및 모션 제작)",

        mediaType: "video",
        mediaSrc: "images/순우리말.mp4", // 내 폴더 안의 실제 이미지 경로로 수정하세요!
    },
    video2: {
        title: "수목장",
        purpose: "수목장림를 널리 알리기위해.",
        points: "• 주인공의 반전<br>• 중요 포인트",
        desc: "• 상세 설명 내용 줄",
        contrib: "팀 프로젝트 50%",

        mediaType: "youtube",
        mediaSrc: "Mc-JG5NXmYQ",
    },
    video3: {
        title: "세 번째 비디오 프로젝트 제목",
        purpose: "세 번째 프로젝트의 기획 목적 내용을 적어주세요.",
        points: "• 집중 포인트 첫 번째 줄<br>• 집중 포인트 두 번째 줄",
        desc: "• 상세 설명 내용 줄",
        contrib: "개인 프로젝트 100%",
    },
    graphic1: {
        title: "무더위를 피하는 개구리 일러스트",
        purpose: "무더위에 건강에 조심하고자 하는 목족",
        points: "• 무더위 조심을 재미있게 풀어냄<br>• 그림자 디테일",
        desc: "• 포토샵 및 일러스트레이터를 활용한 비주얼 아트워크 완성",
        contrib: "개인 작업 100%",

        // 💥 [추가] 팝업창에 띄울 미디어 정보 (이미지 일러스트)
        mediaType: "images",
        mediaSrc: "images/Artboard 1@3x-100.jpg", // 내 폴더 안의 실제 이미지 경로로 수정하세요!
    },
    graphic2: {
        title: "준비중",
        purpose: "준비중",
        points: "• 준비중<br>• 준비중",
        desc: "• 준비중",
        contrib: "개인 작업 100%",
    },
    graphic3: {
        title: "준비중",
        purpose: "준비중",
        points: "• 준비중<br>• 준비중",
        desc: "• 준비중",
        contrib: "개인 작업 100%",
    },
    graphic4: {
        title: "준비중",
        purpose: "준비중",
        points: "• 준비중<br>• 준비중",
        desc: "• 준비중",
        contrib: "개인 작업 100%",
    },
};

// 2. 팝업창 열기 함수
function openPopup(workId) {
    const modal = document.getElementById("workModal");
    const data = workData[workId];

    if (data) {
        // 1. [공통] 상단 기본 텍스트 설명 배달
        document.getElementById("popTitle").innerHTML = "프로젝트명 : " + data.title;
        document.getElementById("popPurpose").innerHTML = "<strong>목적 :</strong> " + data.purpose;
        document.getElementById("popPoints").innerHTML = "<strong>집중 포인트 :</strong><br>" + data.points;
        document.getElementById("popDesc").innerHTML = "<strong>설명 :</strong><br>" + data.desc;
        document.getElementById("popContrib").innerHTML = "<strong>기여도 :</strong> " + data.contrib;

        // 💥 [핵심 추가] 회색 네모창 영역에 영상 또는 이미지 동적 삽입
        const mediaZone = document.getElementById("popMediaZone");
        mediaZone.innerHTML = ""; // 기존에 들어있던 찌꺼기 내용 청소

        if (data.mediaType === "video") {
            // 비디오 타입일 때: 소리 끄고 무한 자동재생 태그 주입
            mediaZone.innerHTML = `<video src="${data.mediaSrc}" autoplay loop muted playsinline></video>`;
        } else if (data.mediaType === "images") {
            // 이미지 타입일 때: img 태그 주입
            mediaZone.innerHTML = `<img src="${data.mediaSrc}" alt="${data.title}">`;
        } else {
            // 미디어가 지정되지 않았을 때의 안전 대책용 기본 문구
            mediaZone.innerHTML = `<span>Work Detail View</span>`;
        }

        // 2. [선택] 하단 세로형 수정 과정(process) 배달 구역 조종
        const processZone = document.getElementById("popProcessZone");

        if (data.process) {
            processZone.style.display = "block";
            document.getElementById("step1Title").innerText = data.process.step1Title;
            document.getElementById("step1Info").innerHTML = data.process.step1Info;
            document.getElementById("step2Title").innerText = data.process.step2Title;
            document.getElementById("step2Info").innerHTML = data.process.step2Info;
        } else {
            processZone.style.display = "none";
        }

        // 3. CSS로 숨겨둔 모달 창을 화면 중앙에 띄움
        modal.style.display = "flex";
    }
    const mediaZone = document.getElementById("popMediaZone");
    mediaZone.innerHTML = "";

    if (data.mediaType === "video") {
        mediaZone.innerHTML = `
        <video autoplay loop muted playsinline controls>
            <source src="${data.mediaSrc}" type="video/mp4">
        </video>
    `;
    } else if (data.mediaType === "youtube") {
        modal.style.display = "flex";
        mediaZone.innerHTML = `
        <iframe
            src="https://www.youtube.com/embed/${data.mediaSrc}?autoplay=1&mute=1&loop=1&playlist=${data.mediaSrc}&controls=0&rel=0"
            frameborder="0"
            allow="autoplay"
            allowfullscreen 
          >
        </iframe>
    `;
    } else if (data.mediaType === "images") {
        mediaZone.innerHTML = `
        <img src="${data.mediaSrc}" alt="${data.title}">
    `;
    }
}

// 팝업창 종료 함수
function closePopup() {
    document.getElementById("workModal").style.display = "none";
}
