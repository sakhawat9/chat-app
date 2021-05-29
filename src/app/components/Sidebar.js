import { Create, FiberManualRecord } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>PAPA FAM HQ</h2>
                    <h3>
                        <FiberManualRecord />
                        Sonny Sangha
                    </h3>
                </SidebarInfo>
                <Create />
            </SidebarHeader>
        </SidebarContainer>
    )
}

export default Sidebar


const SidebarContainer = styled.div`
    color: white;
    background-color: var(--chat-color);
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding-bottom: 10px;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: #fff;
        border-radius: 999px;
    }
`;

const SidebarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;