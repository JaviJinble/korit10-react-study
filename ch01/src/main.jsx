import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Z, {Hi as H, Bye} from './Hello.jsx'

// default는 이름명을 다르게 해도 가능하다 {}안에 있는 것은 as 로 해서 별칭을 변경가능하다.
// createRoot(document.getElementById('root')).render(<div>{App()}{Z()}{h()}{Bye()}</div>)
createRoot(document.getElementById('root')).render(<div><App /><Z></Z><H></H><Bye></Bye></div>)

