import { useAuth } from '../context/useAuth.js';
import { useData } from '../context/useData.js';
import { demoUsers } from '../data/demoUsers.js';
import ChatWindow from '../components/chat/ChatWindow.jsx';
import Notice from '../components/common/Notice.jsx';
import { getChatPartners, getConversationId } from '../utils/messageUtils.js';

export default function ChatPage() {
  const { currentUser, registeredUsers } = useAuth(); const { messages, sendMessage, chatNotice } = useData();
  const users = [...demoUsers, ...registeredUsers]; const partners = getChatPartners(currentUser, users);
  const recipient = partners[0]; const conversationId = getConversationId(messages, currentUser.id, recipient?.id);
  return <div className="container shopping-page"><p className="eyebrow">Comunicación</p><h1>Chat contextual</h1><p>Mensajes locales para conservar el contexto entre tienda y distribuidor.</p><Notice notice={chatNotice} />
    {recipient ? <ChatWindow messages={messages} conversationId={conversationId} users={users} currentUser={currentUser} recipientId={recipient.id} onSend={sendMessage} /> : <p className="shopping-panel">No hay participantes compatibles en esta sesión.</p>}</div>;
}
