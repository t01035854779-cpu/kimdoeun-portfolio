// 1. 작품 상세 데이터 저장소
const workData = {
    video1: {
        title: "순우리말 홍보 및 타이포그래픽 모션 그래픽",
        purpose: "잊혀가는 순우리말을 트렌디한 숏폼 모션 그래픽으로 시각화하여 대중에게 전파",
        points: "• 메시지 창이 실제 '짐'이 되어 주인공을 짓누르는 위트 있는 스토리텔링<br>• 외래어/신조어의 시각적 임팩트를 극대화한 타이포그래피 강조<br>• 포스터 내 '한글날' 암시 단서 배치로 순우리말 목적성 메시지 동시 획득",
        desc: "• 언어 문화 문제를 독창적 연출(메시지 창의 물리화)로 풀어낸 모션 그래픽<br>• 철저한 타이포 강조 디자인과 감각적 템포로 비주얼과 메시지 동시 획득",
        contrib: "개인 프로젝트 100% (시나리오 기획 / 그래픽 디자인 / 영상 및 모션 제작)",
    },
    video2: {
        title: "두 번째 비디오 프로젝트 제목",
        purpose: "두 번째 프로젝트의 기획 목적 내용을 적어주세요.",
        points: "• 집중 포인트 첫 번째 줄<br>• 집중 포인트 두 번째 줄",
        desc: "• 상세 설명 내용 줄",
        contrib: "개인 프로젝트 100%",
    },
    graphic1: {
        title: "그래픽 디자인 포스터 작업",
        purpose: "브랜드 콘셉트 시각화 및 포스터 레이아웃 제작",
        points: "• 컬러 조합 가이드라인 수립<br>• 그리드 시스템 기반의 정돈된 레이아웃 연출",
        desc: "• 포토샵 및 일러스트레이터를 활용한 비주얼 아트워크 완성",
        contrib: "개인 작업 100%",
        process: {
            step1Title: "1차 시안 : 단순 텍스트 노출",
            step1Info:
                "<h5>1. 초기 기획 및 문제 발견</h5><p><strong>기획 의도 :</strong> 무분별한 신조어/외래어 속에서 고통받는 현대인의 모습을 시각화하고자 함</p><p><strong>문제 발견 :</strong> 화면에 단순 텍스트 형태로만 메시지를 띄우다 보니, 주인공이 느끼는 심리적 압박감과 고통이 평면적이고 밋밋하게 전달되는 한계 직면</p>",

            step2Title: "최종 수정 : 메시지 창의 물리화 연출",
            step2Info:
                "<h5>2. 디자인 수정 및 최종 연출</h5><p><strong>해결 과정 :</strong> 내부 신조어 폰트 강조, 메시지 창 스케일 업으로 시각적 무게감 확보. 낙하 시 화면 흔들림 효과를 추가해 묵직한 타격감 극대화</p><p><strong>최종 결과 :</strong> 사운드와 비디오 모션 싱크를 매칭하여, 신조어의 압박감을 위트 있고 직관적으로 표현한 스토리텔링 완성</p>",
        },
    },
};

// 2. 팝업창 열기 함수
function openPopup(workId) {
    const modal = document.getElementById("workModal");
    const data = workData[workId];

    if (data) {
        // [기본 정보 채우기]
        document.getElementById("popTitle").innerHTML = "프로젝트명 : " + data.title;
        document.getElementById("popPurpose").innerHTML = "<strong>목적 :</strong> " + data.purpose;
        document.getElementById("popPoints").innerHTML = "<strong>집중 포인트 :</strong><br>" + data.points;
        document.getElementById("popDesc").innerHTML = "<strong>설명 :</strong><br>" + data.desc;
        document.getElementById("popContrib").innerHTML = "<strong>기여도 :</strong> " + data.contrib;

        // 💥 [핵심: 수정 과정 처리 구역]
        // HTML에 만들어 둔 수정 과정 전체 박스(#popProcessZone)를 가져옵니다.
        const processZone = document.getElementById("popProcessZone");

        // 만약 클릭한 데이터 안에 'process' 데이터가 존재한다면? (예: graphic1을 눌렀을 때)
        if (data.process) {
            // 숨겨져 있던 과정 영역을 눈에 보이게 켭니다.
            processZone.style.display = "block";

            // 데이터 저장소에 있던 1차 시안과 최종 수정 글귀들을 HTML 상자에 쏙 배달합니다.
            document.getElementById("step1Title").innerText = data.process.step1Title;
            document.getElementById("step1Info").innerHTML = data.process.step1Info;
            document.getElementById("step2Title").innerText = data.process.step2Title;
            document.getElementById("step2Info").innerHTML = data.process.step2Info;
        } else {
            // 만약 'process' 데이터가 없는 항목이라면 (예: video1을 눌렀을 때) 과감히 숨깁니다.
            processZone.style.display = "none";
        }

        modal.style.display = "flex";
    }
}

// 팝업창 종료 함수 (기존 유지)
function closePopup() {
    document.getElementById("workModal").style.display = "none";
}
