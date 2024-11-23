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

function PrimaryButton({ children }) {
  return <PrimaryButtonStyled type="submit">{children}</PrimaryButtonStyled>;
}

function SecondaryButton({ children }) {
  return <SecondaryButtonStyled>{children}</SecondaryButtonStyled>;
}

function SquareButton({ children, onClick, isActive }) {
  return (
    <SquareButtonStyled onClick={onClick} isActive={isActive}>
      {children}
    </SquareButtonStyled>
  );
}

function PrimaryCardButton({ children }) {
  return <PrimaryCardButtonStyled>{children}</PrimaryCardButtonStyled>;
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

function SubmitButton({ children, onSubmit, type }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <SubmitButtonStyled onClick={handleSubmit} type={type}>
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
