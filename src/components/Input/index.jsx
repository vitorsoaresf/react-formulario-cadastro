import { ContainerCheckBox, ContainerInput, Container } from "./styles";

function Input({ type, placeholder, register, name, error, message }) {
  return (
    <Container>
      <span>{placeholder}</span>
      {type === "checkbox" ? (
        <div>
          <ContainerCheckBox
            id={name}
            {...register(name)}
            type={type}
            error={error}
          />
          <label htmlFor={name}>{message}</label>
        </div>
      ) : (
        <ContainerInput {...register(name)} type={type} error={error} />
      )}

      {error && <p>{error}</p>}
    </Container>
  );
}

export default Input;
