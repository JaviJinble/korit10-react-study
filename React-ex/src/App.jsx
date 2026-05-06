import { useState } from "react";

function Home() {
  return <h2>Home</h2>;
}

function Profile() {
  return <h2>Profile</h2>;
}

function Settings() {
  return <h2>Settings</h2>;
}

// 문제 1-3
function ProductTable() {
  const products = [
    { id: 1, name: "노트북", price: 1500000 },
    { id: 2, name: "마우스", price: 35000 },
    { id: 3, name: "키보드", price: 89000 },
  ];

  return (
    <div>
      <h1>문제 1-3</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>상품명</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price.toLocaleString()}원</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// 문제 1-4
function ProductAddTable() {
  const initialValue = {
    id: "",
    name: "",
    price: "",
  };

  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInputOnChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddOnClick = () => {
    setProducts([
      ...products,
      {
        id: inputValue.id,
        name: inputValue.name,
        price: inputValue.price,
      },
    ]);

    setInputValue(initialValue);
  };

  return (
    <div>
      <h1>문제 1-4</h1>

      <input
        type="text"
        name="id"
        value={inputValue.id}
        onChange={handleInputOnChange}
        placeholder="ID"
      />
      <input
        type="text"
        name="name"
        value={inputValue.name}
        onChange={handleInputOnChange}
        placeholder="상품명"
      />
      <input
        type="text"
        name="price"
        value={inputValue.price}
        onChange={handleInputOnChange}
        placeholder="가격"
      />
      <button onClick={handleAddOnClick}>추가</button>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>상품명</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{Number(product.price).toLocaleString()}원</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState(<></>);

  // 문제 1-5
  // 목록 상태는 App이 아니라 ProductAddTable 컴포넌트 내부에서 관리한다.
  // 일반적으로 페이지 전환 시 컴포넌트를 새로 렌더링하면 언마운트되면서 내부 상태가 초기화될 수 있다.
  // 하지만 pages를 useState로 JSX 상태에 저장하면 같은 컴포넌트 인스턴스를 재사용하므로
  // List 페이지를 나갔다가 다시 돌아와도 ProductAddTable의 products 상태가 유지된다.
  const [pages] = useState({
    home: <Home />,
    profile: <Profile />,
    settings: <Settings />,
    list: <ProductAddTable />,
  });

  const numbers = [10, 20, 30, 40, 50];

  const pNumbers = numbers.map((n) => <p key={n}>{n}</p>);

  const handlePageButtonOnClick = (e) => {
    setCurrentPage(pages[e.target.value]);
  };

  return (
    <>
      <div>
        <h1>문제 1-1 + 1-5</h1>
        <header>
          <button value="home" onClick={handlePageButtonOnClick}>
            Home
          </button>
          <button value="profile" onClick={handlePageButtonOnClick}>
            Profile
          </button>
          <button value="settings" onClick={handlePageButtonOnClick}>
            Settings
          </button>
          <button value="list" onClick={handlePageButtonOnClick}>
            List
          </button>
        </header>

        <main>{currentPage}</main>
      </div>

      <div>
        <h1>문제 1-2</h1>
        <h3>1. 배열 그대로 출력</h3>
        <div>{numbers}</div>

        <h3>2. 변수에 map 담아서 출력</h3>
        <div>{pNumbers}</div>

        <h3>3. JSX 안에서 바로 map</h3>
        <div>
          {numbers.map((n) => (
            <p key={n}>{n}</p>
          ))}
        </div>
      </div>

      <div>
        <ProductTable />
      </div>
    </>
  );
}

export default App;
