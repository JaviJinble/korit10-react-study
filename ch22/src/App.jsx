import { useState } from "react";
import { Link, Route, Routes } from "react-router";

function P1() {
    const getPromise = () => {
        return new Promise((resolve, reject) => {
            console.log(1);
            resolve("1번리턴")
        });
    }

    const getPromise2 = (value) => {
        return new Promise((resolve, reject) => {
            console.log("2번째: " + value);
            resolve(value)
        });
    }

    const handleOnClick = () => {
        getPromise()
            .then((value) => {
                console.log(value + " 출력");
                return getPromise2(value);
                getPromise2()
                    .then((value2) => {
                        console.log("2번째: " + value2 + " 출력");
                    })
            })
    }

    const handleOnClick2 = () => {
        getPromise().then((value) => {
            console.log(value + " 출력");
            getPromise2().then((value2) => { console.log(value2 + " 출력"); })
        })
    }


    return <>
        <button onClick={handleOnClick}>클릭</button>
    </>
}

function P2() {

    const getPromise = async () => {
        console.log(1);
        return "1번 데이터 리턴";

    }

    const getPromise2 = async (value) => {
        console.log(value + " value 받음");
        return value + "!!!!!!!!!!";
    }

    const handleOnClick = async () => {
        // async 와  await 짝이다.  await은 async 함수 안에서만 사용가능하다.
        // await은 .then((value) => {... 와 달리 매개변수를 받아오지 않고 사용가능하다.
        const returnValue = await getPromise();
        const returnValue2 = await getPromise2(returnValue);
        console.log(returnValue2)
        console.log("!!!!!!");

        // getPromise2(returnValue) // -> then을 계속된 사용을 이어지면 코드는 깊어지고 늘어난.
        // const returnValue2 = await getPromise2(returnValue);로 작성하여 코드를 클린해준다.
        //     .then((value) => {
        //         console.log(value);
        //         console.log("!!!!!!");
        //     })
    }

    return <>
        <button onClick={handleOnClick}>클릭2</button>
    </>
}

function P3() {

    const handleOnClick = async () => {
        const response = await fetch();
        console.log("응답데이터 시용");
    }

    return <>
        <button onClick={handleOnClick}>요청</button>
    </>
}



function P4() {

    const getPromise = async (open) => {
        if (open) {
            return "열림";
        } else {
            throw new Error("열 수 없음");
        }
    }

    const handleOnClick = async () => {
        let returnValue = null;
        try {
            const returnValue = await getPromise(false);
        } catch (error) {
            returnValue = error;
        }
        console.log("결과: " + returnValue);
    }

    return <>
        <button onClick={handleOnClick}>요청</button>
    </>
}

function P5() {
    // 함수 정의에 async를 달아준다.

    const getPromise = async (flag) => {

        if (flag) {
            return 10;
        } else {
            throw new Error("오류!!!");
        }

    }

    const handleOnClick = () => {
        getPromise(true)
            .then((value) => {
                console.log("결과1: " + value);
                return value * value;
            }).then((value) => {
                console.log("결과2: " + value);
                return value * value;
            }).then((value) => {
                console.log("결과3: " + value);
            }).catch((error) => {
                console.error(error);
            });

        getPromise(false)
            .then((value) => {
                console.log("결과1: " + value);
                return value * value;
            }).then((value) => {
                console.log("결과2: " + value);
                return value * value;
            }).then((value) => {
                console.log("결과3: " + value);
            }).catch((error) => {
                console.error(error);
            });
    }

    return <>
        <button onClick={handleOnClick}>클릭</button>
    </>
}

function P6() {
    const [arr, setArr] = useState([]);

    const getPromise1 = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                setArr(prev => [...prev, "A"]);
                resolve("A");
            }, 2000);
        });
    }

    const getPromise2 = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                setArr(prev => [...prev, "B"]);
                resolve("B");
            }, 1000);
        });
    }

    const getPromise3 = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                setArr(prev => [...prev, "C"]);
                resolve("C");
            }, 4000);
        });
    }

    const handleOnClick = async () => {
        const result = await Promise.all([getPromise1(), getPromise2(), getPromise3()]);
        setArr(result);
    }

    return (
        <>
            <h1>{arr}</h1>
            <button onClick={handleOnClick}>요청</button>
        </>
    )
}
function App() {
    return (
        <>
            <Link to={"/p1"}>promise1</Link>
            <Link to={"/p2"}>promise2</Link>
            <Link to={"/p3"}>promise3</Link>
            <Link to={"/p4"}>promise4</Link>
            <Link to={"/p5"}>promise5</Link>
            <Link to={"/p6"}>promise6</Link>

            <Routes>
                <Route path="/p1" element={<P1 />} />
                <Route path="/p2" element={<P2 />} />
                <Route path="/p3" element={<P3 />} />
                <Route path="/p4" element={<P4 />} />
                <Route path="/p5" element={<P5 />} />
                <Route path="/p6" element={<P6 />} />
            </Routes>
        </>
    )
}

export default App;