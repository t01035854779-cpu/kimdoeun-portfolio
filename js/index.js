window.addEventListener("load", () => {
    const btns = document.querySelectorAll(".tab-btn");
    console.log(btns);
    const contents = document.querySelectorAll(".tab-content");
    btns.forEach((btn, index) => {
        btn.addEventListener("click", function () {
            // 1. 모든 버튼에 active 다 초기화
            btns.forEach((b) => {
                // console.log(b);
                b.classList.remove("active");
            });
            // 2. 모든 내용들의 active 다 초기화
            contents.forEach((c) => {
                // console.log(c);
                c.classList.remove("active");
            });
            // 3. 클릭한 버튼에 활성화
            btn.classList.add("active");
            contents[index].classList.add("active");
        });
    });
});
