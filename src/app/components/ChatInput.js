import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import styled from 'styled-components';
import firebase from "firebase";
import { db } from './firebase';

function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState('');
    const sendMessage = e => {
        e.preventDefault();

        if (!channelId) {
            return false;
        }
        db.collection('rooms').doc(channelId)
            .collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: 'Sonny Sangha',
                userImage: 'https://static.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg/revision/latest?cb=20181130033425'

            })
        setInput('');
    };
    return (
        <ChatInputContainer>
            <form>
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Message #${channelName}`} />
                <Button hidden type="submit" onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    );
}
export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;
    >form{
        position: relative;
        display: flex;
        justify-content:center;
    }
    >form>input {
        position: fixed;
        bottom: 30px;
        width:60%;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
    >form>button{
        display: none !important;
    }
`;
