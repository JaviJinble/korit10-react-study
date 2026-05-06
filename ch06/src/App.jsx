import { useState } from 'react'

function App() {
    const [currentPage, setCurrentPage] = useState(<></>);
    const [pages, setPages] = useState({
        number: <Number />,
        table: <Table />,
        table2: <Table2 />,
    });

    const handlePageButtonOnClick = (e) => {
        setCurrentPage(pages[e.target.value]);
    }

    return (
        <>
            <header>
                <button value={"number"} onClick={handlePageButtonOnClick}>Number</button>
                <button value={"table"} onClick={handlePageButtonOnClick}>Table</button>
                <button value={"table2"} onClick={handlePageButtonOnClick}>Table2</button>
            </header>
            <main>
                {currentPage}
            </main>
        </>
    )
}

function Number() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const h1Numbers = numbers.map(n => <h1>{n}</h1>)


    return (
        <>
            {numbers}
            {h1Numbers}
            {numbers.map(n => <h1>{n}</h1>)}
        </>
    )
}

function Table() {
    const students = [
        { no: 1, name: "김명준", age: 29 },
        { no: 2, name: "김명규", age: 30 },
        { no: 3, name: "김민성", age: 31 },
        { no: 4, name: "김명명", age: 32 },
        { no: 5, name: "김준준", age: 33 },
        { no: 6, name: "김민중", age: 34 },
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map(student => (
                        <tr key={student.no}>
                            <td>{student.no}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}

function Table2() {
    const [students, setStudents] = useState([]);

    const [updateNo, setUpdateNo] = useState(null);

    const [inputValue, setInputValue] = useState({
        no: "",
        name: "",
        age: "",
    });

    const handleStudentText = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        })
    };

    const handleOnClick = () => {

        if (updateNo === null) {

            // 추가
            const newStudent = {
                no: inputValue.no,
                name: inputValue.name,
                age: inputValue.age,
            };

            setStudents([
                ...students,
                newStudent
            ]);
        } else {
            // 수정
            setStudents(students.map(student => student.no === updateNo ? inputValue : student));

            setUpdateNo(null);
        }



        setInputValue({
            no: "",
            name: "",
            age: "",
        });
    }

    const handleDelteOnClick = (no) => {
        console.log("handleDelteOnClick 호출")
        setStudents(students.filter(student => student.no !== no));
    };

    const handleUpdateOnClick = (student) => {
        setInputValue({
            no: student.no,
            name: student.name,
            age: student.age,
        });

        setUpdateNo(student.no);
    }



    return <>
        <div>
            <input type="text" name='no' placeholder="번호" value={inputValue.no} onChange={handleStudentText} />
            <input type="text" name='name' placeholder="이름" value={inputValue.name} onChange={handleStudentText} />
            <input type="text" name='age' placeholder="나이" value={inputValue.age} onChange={handleStudentText} />
            <button onClick={handleOnClick}>
                {updateNo === null ? "추가" : "수정"}
            </button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>수정</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map(student => (
                        <tr key={student.no}>
                            <td>{student.no}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>
                                <button onClick={() => handleUpdateOnClick(student)}>수정</button>
                            </td>
                            <td>
                                <button onClick={() => handleDelteOnClick(student.no)}>삭제</button>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    </>
}

export default App
