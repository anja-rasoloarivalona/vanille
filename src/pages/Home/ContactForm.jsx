import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import Button from "../../components/Button";
import emailjs from "@emailjs/browser";

const Container = styled.div`
  padding: 100px 0;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 30px;
`;

const Form = styled.form`
  width: 600px;
`;

const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-size: 14px;
`;

const Input = styled.input`
  height: 45px;
  padding-left: 10px;
  margin-top: 3px;
  border: 1px solid ${({ theme }) => theme.colors.grey.main};
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-top: 3px;
  border: 1px solid ${({ theme }) => theme.colors.grey.main};
  border-radius: 4px;
  resize: vertical;
  min-height: 60px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ErrorMessage = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: #d90000;
`;

const ContactForm = () => {
  const textErrors = {
    required: "Ce champ est requis",
    email: `L'e-mail est invalide`,
  };

  const onSubmitHandler = (values) => {
    console.log({ values });
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      object: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(textErrors.required),
      email: Yup.string().email(textErrors.email).required(textErrors.required),
      object: Yup.string(),
      message: Yup.string(),
    }),
    onSubmit: onSubmitHandler,
  });

  return (
    <Container id="contact">
      <Title>ENVOYEZ-NOUS UN MESSAGE</Title>
      <Form noValidate onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nom*</Label>
          <Input
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Saisissez votre nom"
          />
          {errors.name && touched.name && (
            <ErrorMessage>{errors.name}</ErrorMessage>
          )}
        </FormGroup>
        <FormGroup>
          <Label>E-mail*</Label>
          <Input
            name="email"
            onChange={handleChange}
            type="text"
            placeholder="Saisissez votre e-mail"
          />
          {errors.email && touched.email && (
            <ErrorMessage>{errors.email}</ErrorMessage>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Objet</Label>
          <Input
            name="object"
            onChange={handleChange}
            type="text"
            placeholder="Saisissez l'objet"
          />
        </FormGroup>
        <FormGroup>
          <Label>Message</Label>
          <TextArea
            name="message"
            onChange={handleChange}
            type="text"
            placeholder="Rédigez votre message ici..."
          />
        </FormGroup>
        <ButtonContainer>
          <Button type="submit">Envoyer</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default ContactForm;
