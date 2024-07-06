import {
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import List from "../components/List";
import userEvent from "@testing-library/user-event";

describe("Testing components", () => {
  it("Should be able to select one or more components", async () => {
    const { getByText, rerender, debug } = render(
      <List initialItems={["Edito", "Suzana", "Edzana"]} />
    );
    expect(getByText("Edito")).toBeInTheDocument();
    expect(getByText("Suzana")).toBeInTheDocument();
    expect(getByText("Edzana")).toBeInTheDocument();

    // debug();
    // rerender(<List initialItems={["Julia", "Judy"]} />);
    // await waitFor(() => expect(getByText("Julia")).toBeInTheDocument());
    // await waitForElementToBeRemoved(() => getByText("Edito"));
    // debug();
  });

  it("Should be able to add a new item to the list", async () => {
    const { getByText } = render(<List initialItems={[]} />);

    const addButton = getByText("Adicionar Item");
    userEvent.click(addButton);

    await waitFor(() => {
      expect(getByText("Novo Item")).toBeInTheDocument();
    });
  });

  it("Should be able to remove an element from the list", async () => {
    const { getAllByText, getByText } = render(
      <List initialItems={["Jandira"]} />
    );

    const removeBtn = getAllByText("Remover");
    userEvent.click(removeBtn[0]);

    await waitForElementToBeRemoved(() => getByText("Jandira"));
  });
});
