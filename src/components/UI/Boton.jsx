import React from "react";
import {
  PrimaryButtonStyled,
  SecondaryButtonStyled,
  SquareButtonStyled,
  PrimaryCardButtonStyled,
  SecondaryCardButtonStyled,
  ChangeColorButtonStyled,
  SubmitButtonStyled,
} from "./BotonStyles";

function PrimaryButton({ children, onClick }) {
  return (
    <PrimaryButtonStyled type="submit" onClick={onClick}>
      {children}
    </PrimaryButtonStyled>
  );
}

function SecondaryButton({ children, onClick }) {
  return (
    <SecondaryButtonStyled onClick={onClick}>{children}</SecondaryButtonStyled>
  );
}

function SquareButton({ children, onClick, isSelected, warning }) {
  return (
    <SquareButtonStyled
      onClick={onClick}
      isSelected={isSelected}
      warning={warning}
    >
      {children}
    </SquareButtonStyled>
  );
}

function PrimaryCardButton({ children, onClick }) {
  return (
    <PrimaryCardButtonStyled onClick={onClick}>
      {children}
    </PrimaryCardButtonStyled>
  );
}

function SecondaryCardButton({ children, onClick }) {
  return (
    <SecondaryCardButtonStyled onClick={onClick}>
      {children}
    </SecondaryCardButtonStyled>
  );
}

function ChangeColorButton({ children, onClick }) {
  return (
    <ChangeColorButtonStyled onClick={onClick}>
      {children}
    </ChangeColorButtonStyled>
  );
}

function SubmitButton({ children, onClick, ...props }) {
  return (
    <SubmitButtonStyled onClick={onClick} {...props}>
      {children}
    </SubmitButtonStyled>
  );
}

export {
  PrimaryButton,
  SecondaryButton,
  SquareButton,
  PrimaryCardButton,
  SecondaryCardButton,
  ChangeColorButton,
  SubmitButton,
};
