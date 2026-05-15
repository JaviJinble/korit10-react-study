import TextInput from "../../components/TextInput/TextInput";
import Header from "../../components/Header/Header";
import * as s from "./styles";
import Button from "../../components/Button/Button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function PostList() {

   return (
        <div>
            <Header />
            <main>
                <article css={s.topPosting}>

                </article>
                <div css={s.searchContainer}>
                    <TextInput />
                    <button>검색</button>
                </div>
                <ul css={s.postList}>
                    <li css={s.card}>
                        <div></div>
                        <footer></footer>
                    </li>
                    <li css={s.card}></li>
                    <li css={s.card}></li>
                    <li css={s.card}></li>
                </ul>
                <div css={s.pagination}>
                    <Button><FiChevronLeft /></Button>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button><FiChevronRight /></Button>
                </div>
            </main>
        </div>
    )
}

export default PostList;