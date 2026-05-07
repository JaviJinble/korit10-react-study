function UserRegister () {
    const { inputValues, setInputValues, isValid, handleInputOnChange }
    const currentId = useRef(0);
    
    const initUser = {
        id: "",
        username: "",
        email: "",
    };
    
    const handleRegisterOnClick = () => {
        currentId.current += 1;

        const newUser = {
            ...inputValues,
            id: currentId.current,
        }

        setUser([...UserRegister, newUser]);
        setInputValues(initUser);
    };

    return(
        <>
            <div>
                <input type="text" name="username" value={inputValues.username} onChange={handleInputOnChange} placeholder="계정명" />
                <input type="text" name="email" value={inputValues.email} onChange={handleInputOnChange} placeholder="이메일"/>
                <button disabled={!isvalid} onClick={handleRegisterOnClick}>등록</button>
            </div>
        </>
    )
}
