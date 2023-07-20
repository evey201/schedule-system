import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    overflow: hidden;
    grid-template-columns: 65px 1fr;
    grid-template-rows: 72px 1fr;

    grid-template-areas:
        'sidebar main main main'
        'sidebar main main main'
        'sidebar main main main'
        'sidebar main main main';
    
    height: 100vh;
    @media screen and (max-width: 800px) {
        grid-template-columns: 65px 1fr;
        grid-template-rows: 1fr;

        grid-template-areas:
        'sidebar main'
        // 'main';
    }
`
export const Content = styled.div`
    grid-area: main;
    width: 100%;
    border-radius: 10px;
    overflow-y: scroll;
    background-color: #F9FAFB;
    opacity: 1;
    transition: all 0.2s;
    min-height: calc(100vh - 20%);
    @media (max-width: 800px) {
        padding: 0;
        border-radius: 0px;
        // padding: 10px 16px;
        overflow-y: scroll;
        /* overflow: hidden;  
        */
        /* height: 100vh; */
    }
`