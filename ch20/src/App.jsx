
function App() {
    
    new Promise((resolve, reject) => {
        console.log(7);

        if (false) {
            resolve("성공데이터");
        } else {
            reject(new Error("실패데이터"));
        }

        // resolve(); // resolve()은 호출로 큐에 넣으라는 뜻 then()안에 정의된 함수를 호출되는 의미이다.
        // reject(); // reject()은 catch(() => {}) 호출을 큐에 넣으라는 뜻 resolve()가 있을때 작동안한다. 
        // 즉 resolve()와 reject()은 조건 처리 해줘야한다.
    }).catch((reason) => {
        console.log(9);
        console.error(reason);
    }).then((value) => {
        console.log(8);
        console.log(value);
    }) ;
    // 이러한 Promise객체를 . 으로 이어가는 리턴리턴 하는 방식은 빌더 방식과 동일하다.
    // resolve 허용, reject 오류처리 Promise에서 생성하는것은 동기 처리이다. 
    // .then(() => {}); 안에 있는건 비동기처리 .then()안에는 함수 정의가 들어간다. (value: any) => ...)
    // then은 resolve가 있어야 호출 가능하다. 없으면 호출 불가.


    new Promise((resolve, reject) => {
        console.log(10);

        if (true) {
            resolve();
        } else {
            reject();
        }
    }).then(() => {
        console.log(11);
    }).catch(() => {
        console.log(12);
    }) ;
    // 호출 시 11 9 순으로 나오는 이유는 같은계층 레벨에서 들어있는 것 부터 호출한다.
    // catch와 then의 순서를 바꾸면 9 11순으로 호출 즉 순서가 중요하다

    console.log(1); // 10초
    console.log(2); // 1시간
    console.log(3); // 30분
    console.log(4); // 1초

    setTimeout(() => {
        console.log(5);
    }, 5000);
    setTimeout(() => {
        console.log(6);
    }, 2000);

    

    return (
        <>
            홈
        </>
    )
}

export default App;