import { FormEvent, useRef } from "react";
import List from "./components/List";
import { Button } from "@mui/material";
import { Container } from "./style";
import { FaVolumeUp } from "react-icons/fa";

const App = () => {
  const nameField = useRef<HTMLInputElement>(null);

  const SayHi = (event: FormEvent) => {
    event.preventDefault();
    const name = nameField.current?.value;
    try {
      if (name === "") throw "O nome não pode estar vazio!";

      const message = new SpeechSynthesisUtterance();
      message.lang = "es"; // Código de idioma para espanhol
      // message.text = "Vão pro caralho";
      message.text =
        name +
        " ¡Muchas gracias, es mui importante para mi quando tengo una persona hermosa a mi lado y en mi corazon!";
      message.volume = 2;
      window.speechSynthesis.speak(message);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container>
      <form onSubmit={SayHi}>
        <div>
          <label htmlFor="name">Digita o teu nome</label>
          <input type="text" id="name" ref={nameField} />
        </div>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          startIcon={<FaVolumeUp />}
        >
          Dizer olá
        </Button>
      </form>
      <List initialItems={[]} />
    </Container>
  );
};

export default App;
