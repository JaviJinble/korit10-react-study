import { useState } from 'react'
import { css } from "@emotion/react";
import * as s from './styles';


function App() {

  return (
    <>
    <div css={s.container}>
      <div css={s.card}>
        <div css={s.inputbox}>
          <input type="text" name='username' placeholder="사용자 이름"/>
        </div>
        <div css={s.inputbox}>
          <input type="text" name='password' placeholder="비밀번호"/>
        </div>
        <div css={s.register_button}>
          <button disabled={false}>사용자 정보 등록</button>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
