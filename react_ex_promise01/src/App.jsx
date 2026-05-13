function Ex1() {
    const getPromise = (value) => {
        return new Promise((resolve, reject) => {
            resolve(value);
        });
    }

    getPromise("출력: ")
        .then((value) => {
            return new Promise((resolve) => {

                setTimeout(() => {
                    resolve(value + "안녕하세요!");
                }, 1000);
            });
        })
        .then((result) => {
            console.log(result);
        })

    return <>
    </>
}

function Ex2() {
    const checkPositive = (num) => {
        return new Promise((resolve, reject) => {
            if (num > 0) {
                resolve("양수입니다: " + num);
            } else if (num < 0) {
                reject("음수입니다: " + num);
            } else { "0 입니다." }
        })
    }


    checkPositive(5).then(msg => console.log(msg));   // "양수입니다: 5"
    checkPositive(-3).catch(err => console.log(err));  // "음수입니다: -3"

    return <>
    </>
}

function Ex3() {
    Promise.resolve(10)
        .then(n => {
            return n * 2;
        }).then(n => {
            return n + 5;
        }).then(n => {
            return (n.toString() + "원")
        }).then(result => console.log(result));

    // 출력: "25원"
    // 과정: 10 → 20 → 25 → "25원"
    return <>
    </>
}

function Ex4() {
    Promise.resolve("hello")
        .then(str => str.toUpperCase())
        .then(str => {
            throw new Error("강제 에러 발생!");
        })
        .then(str => console.log("여기 실행될까?"))
        .catch(err => console.log("에러 잡음: ", err.message))
        .finally(() => console.log("항상 실행!"))

    return <></>
}

function Ex5() {
    const fetchUser = (userId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userId <= 0) {
                    reject("유효하지 않은 ID");
                } else {
                    resolve({ id: userId, name: "유저" + userId, age: 20 + userId });
                }
            }, 1000);
        });
    }

    fetchUser(3).then(user => console.log(user));
    // (1초 후) { id: 3, name: "유저3", age: 23 }

    fetchUser(-1).catch(err => console.log(err));
    // (1초 후) "유효하지 않은 ID"

}

function Ex6() {
    const fetchA = () => { return new Promise(res => setTimeout(() => res("A 데이터"), 1000)); }
    const fetchB = () => { return new Promise(res => setTimeout(() => res("B 데이터"), 2000)); }
    const fetchC = () => { return new Promise(res => setTimeout(() => res("C 데이터"), 1500)); }

    Promise.all([fetchA(), fetchB(), fetchC()])
        .then(results => console.log(results));

    // Promise.all을 사용하여 3개 동시 실행
    // 모든 결과를 배열로 출력
    // 총 소요 시간: 약 2초 (가장 느린 것 기준)

    // 출력: ["A 데이터", "B 데이터", "C 데이터"]

    return <></>
}

function Ex7() {
    const fetchA = () => { return new Promise(res => setTimeout(() => res("A 데이터"), 1000)); }
    const fetchB = () => { return new Promise((res, rej) => setTimeout(() => rej("B 실패!"), 3000)); }
    const fetchC = () => { return new Promise(res => setTimeout(() => res("C 데이터"), 1500)); }

    Promise.all([fetchA(), fetchB(), fetchC()])
        .then(results => console.log(results))
        .catch(err => console.log(err));

    // Promise.all([fetchA(), fetchB(), fetchC()])
    //   .then(results => console.log(results))
    //   .catch(err => console.log(err));

    // 출력: ???
    // ★ Promise.all은 하나라도 실패하면 전체 실패! catch로 빠진다.

    return <></>
}

function Ex8() {
    const fetchUser = (userId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userId <= 0) {
                    reject("유효하지 않은 ID");
                } else {
                    resolve({ id: userId, name: "Ex8유저" + userId, age: 20 + userId });
                }
            }, 1000);
        });
    }

    async function main() {
        const user = await fetchUser(3);
        console.log(user);
    }

    main()

    return <></>

}

function Ex9() {
    const fetchUser = (userId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userId <= 0) {
                    reject("유효하지 않은 ID");
                } else {
                    resolve({ id: userId, name: "유저" + userId, age: 20 + userId });
                }
            }, 1000);
        });
    }

    // fetchUser(-1) 호출
    // 에러 발생 시 "에러: 유효하지 않은 ID" 출력
    // 성공/실패 상관없이 "완료" 출력
    async function getUser() {
        try {
            const user = await fetchUser(-1);
            console.log(user);
        } catch (error) {
            console.log("Ex9 에러: ", error);
        } finally {
            console.log("완료");
        }
    }

    getUser();

    return <></>
}

function Ex10() {
    // 방식 A: 순차 실행
    async function sequential() {
        const a = await fetchA();  // 1초
        const b = await fetchB();  // 2초
        const c = await fetchC();  // 1.5초
        console.log(a, b, c);
    }
    // 총 소요 시간: 4.5 초

    // 방식 B: 동시 실행
    async function parallel() {
        const [a, b, c] = await Promise.all([fetchA(), fetchB(), fetchC()]);
        console.log(a, b, c);
    }
    // 총 소요 시간: 2 초
    return <></>
}


function App() {

    return (
        <>
            <Ex1 />
            <Ex2 />
            <Ex3 />
            <Ex4 />
            <Ex5 />
            <Ex6 />
            <Ex7 />
            <Ex8 />
            <Ex9 />
        </>
    )
}

export default App;