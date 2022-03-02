import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Esqueceste a tua palavra passe?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Iniciar sessão</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Não tens uma conta?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Registra-te
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
