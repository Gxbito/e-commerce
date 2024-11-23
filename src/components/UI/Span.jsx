import { SpanContainer, SpanStyled } from "./SpanStyles";

function Span({ children, send}) {
  return (
    <SpanContainer send={send}>
      <SpanStyled>{children}</SpanStyled>
    </SpanContainer>
  );
}

export default Span;
