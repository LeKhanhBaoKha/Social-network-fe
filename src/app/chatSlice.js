import { createSlice } from '@reduxjs/toolkit';
import ForestImage from '@/assets/images/forest.png';
import DaLat from '@/assets/images/dalat.png';
import ForestAuthumn from '@/assets/images/forestAutumn.png';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    conversations : [],
    chatboxs : [],
    chatCount: 0,
    maxChatboxShow : 3,
  },
  reducers: {
    addMessage: (state, action) => {
      state.conversations.push(action.payload);
      state.chatCount++;
    },
    deleteMessage: (state, action) => {
      const messageId = action.payload;
      state.conversations = state.conversations.filter(message => message.id !== messageId);
    },
    clearChat: state => {
      state.conversations = [];
      state.chatCount = 0;
    },
    addChatbox : (state, action) => {
        state.chatboxs.push(action.payload);
    },
    deleteChatbox : (state, action) => {
        state.chatboxs.splice(action.payload, 1);
    },
    updateAllConversation : (state, action) => {
        state.conversations = action.payload;
    }
  },
});

export const { addMessage, deleteMessage, clearChat, addChatbox, deleteChatbox, updateAllConversation } = chatSlice.actions;
const {reducer} = chatSlice;
export default reducer;