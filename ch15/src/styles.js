import { css } from "@emotion/react"

export const container = css`
    /* display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 0 auto;
    padding: 100px;
    width: 1200px;
    overflow: auto; */
    
`;

export const card = css`
    box-sizing: border-box;
    border-radius: 4px;
    padding: 10px;
    width: 340px;
    box-shadow: 0 0 5px #030303;
`;

export const inputbox = css`
    margin-bottom: 10px;    
    &> input {
        box-sizing: border-box;
        outline: none;
        border: 1px solid #888;
        border-radius: 4px;
        padding: 0 10px;
        width: 100%;
        height: 40px;
        cursor: pointer;

        &:hover {
            box-shadow: 0 0 3px #00000033;
        }

        &:active {
            box-shadow: 0 0 3px #00000033 inset;
        }
        
        &:focus {
            box-shadow: 0 0 3px #0cc6e7fa inset;
        }
        
    }

`;

export const register_button = css`

    & > button {
        box-sizing: border-box;
        border: none;
        border-radius: 4px;
        width: 100%;
        height: 30px;
        color: #ffff;
        background-color: #1b6ecc;
        cursor: pointer;


        &:hover {
            color: #ffff;
            background-color: #427899;
            box-shadow: 0 0 3px #00000033;

        }

        &:active {
            color: #ffff;
            background-color: #58befd;
        }

        &:disabled {
            background-color: #728088;
            cursor: default;
        }
    }
    
`;


// export const input = css`
//     /* position: relative; */
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     box-sizing: border-box;
//     margin-bottom: 15px;
//     border: 1px solid #dbdbdb;
//     border-radius: 4px solid #dbdbdb;
//     padding: 10px 1px;
//     width: 320px;
//     height: 50px;
    

// `;