export function getConversationMessages(messages, conversationId) {
  return messages.filter(({ conversationId: id }) => id === conversationId)
    .sort((a, b) => a.timestamp.localeCompare(b.timestamp));
}

function isStore(role) { return role === 'store_admin' || role === 'store_employee'; }
function isDistributor(role) { return role === 'distributor_admin' || role === 'distributor_employee'; }

export function getChatPartners(user, users) {
  if (!user) return [];
  return users.filter((candidate) => candidate.id !== user.id &&
    ((user.role === 'client' && isStore(candidate.role)) ||
      (isStore(user.role) && isDistributor(candidate.role)) ||
      (isDistributor(user.role) && isStore(candidate.role))));
}

export function getConversationId(messages, userId, recipientId) {
  const existing = messages.find(({ senderId, recipientId: id }) =>
    (senderId === userId && id === recipientId) || (senderId === recipientId && id === userId));
  return existing?.conversationId ?? `conv-${[userId, recipientId].sort().join('-')}`;
}

export function sendMessageState(state, user, input, submittedAt, users = []) {
  const text = String(input?.text ?? '').trim();
  const recipient = users.find(({ id }) => id === input?.recipientId);
  if (!user || !text || typeof input?.conversationId !== 'string' ||
      !getChatPartners(user, users).some(({ id }) => id === recipient?.id)) {
    return { ...state, chatNotice: { kind: 'error', message: 'Escribe un mensaje válido.' } };
  }
  const message = { id: `msg${String(state.messages.length + 1).padStart(3, '0')}`,
    conversationId: input.conversationId, senderId: user.id, recipientId: input.recipientId,
    text, timestamp: submittedAt };
  return { ...state, messages: [...state.messages, message], chatNotice: { kind: 'success', message: 'Mensaje enviado.' } };
}
