import { css } from "@emotion/react";

export const topPosting = css`
    width: 100%;
    height: 200px;
    background-color: #11112a;
`;

export const searchContainer = css`
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    gap: 5px;
    box-sizing: border-box;
    padding: 10px 20px;

    & input {
        margin: 0 !important;
    }

    & button {
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        border-radius: 4px;
        padding: 0 15px;
        background-color: #ffffff;
        cursor: pointer;
    }

    & button:hover {
        background-color: #f3f2ec;
    }

    & button:active {
        background-color: #e9e8da;
    }
`;

export const postList = css`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    list-style-type: none;
    margin: 0;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-width: 1px 0;
    padding: 20px;
    width: 100%;
    height: 300px;
    background-color: #f3f2ec;
`;

export const card = css`
    transition: all 0.1s ease-in-out;
    flex-grow: 1;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
    height: 150px;
    background-color: #ffffff;
    cursor: pointer;a

    &:hover {
        box-shadow: 0 0 10px 5px #ffffff88;
    }

    &:active {
        transform: scale(96%);
    }
`;

export const pagination = css`
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 5px;
    box-sizing: border-box;
    padding: 20px;
`;