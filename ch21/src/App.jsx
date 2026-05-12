function App() {

    const getPromise = (name) => {
        return new Promise((resolve, reject) => {
            console.log("프로미스 생성");
            console.log(name);

            if (!!name) {
                resolve(name + "님");
            } else {
                reject(new Error("이름이 입력되지 않았습니다."));
            }
        });
    };

    // async를 쓰는 이유는 1.   Promise 함축적으로 사용할려고.
    // 비동기안에서 동기동작을 하기위해
    const getPromise2 = async (name) => {
        console.log("프로미스2 생성");
        console.log(name);

        if (!!name) {
            return name + "님"; // return은  resolve 이다 - return
        } else {
            throw new Error("이름이 입력되지 않았습니다.");
            // 예외 생성 throw - reject
        }
    };

    const handleOnClick1 = () => {
        const promise1 = getPromise("김명준");

        promise1
            .then((name) => {
                console.log(name + " 환영합니다.");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleOnClick2 = async () => {
        try {
            const name = await getPromise2("GPT");
            console.log(name + "수고하셨습니다.");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <button onClick={handleOnClick1}>프로미스 생성1</button>
            <button onClick={handleOnClick2}>프로미스 생성2</button>
        </>
    );
}

export default App;