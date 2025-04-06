import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
        // Assert
        render(<Greeting />);

        // Act

        // Assert
        const helloWorldElement = screen.getByText('Hello World!')
        expect(helloWorldElement).toBeInTheDocument();
    })

    test("renders good to see you if the button was NOT clicked", () => {
        // Assert
        render(<Greeting />);

        // Act

        // Assert
        const outputElement = screen.getByText("good to see you", {exact: false})
        expect(outputElement).toBeInTheDocument();
    })

    test('renders Changed! if the button WAS clicked', () => {
        // Assert
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        const outputElement = screen.getByText("Changed!")
        expect(outputElement).toBeInTheDocument();
    })

    test("not renders good to see you if the button was clicked", () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const outputElement = screen.queryByText("good to see you", {exact: false})
        expect(outputElement).toBeNull();
    })
});

