// Archivos internos - Estilos
import { MessageSpanContainer, MessageSpanStyled } from "./MessageSpanStyles";

function MessageSpan({ children, send}) {
  return (
    <MessageSpanContainer send={send}>
      <MessageSpanStyled>{children}</MessageSpanStyled>
    </MessageSpanContainer>
  );
}

export default MessageSpan;
