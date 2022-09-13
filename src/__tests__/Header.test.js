import { render, screen } from "@testing-library/react";


import Header from "../Header";





describe("<Header /> Component", () => {
    it("Should have a Header tag", () => {
        render(<Header/>);
        const headingElement = screen.getByRole("heading", { level : 1});
        expect(headingElement).toBeInTheDocument();
    })
    it("Should have a AppVilla tag", () => {
        render(<Header />);
        const headingElement = screen.getByRole("heading", { level : 1, name: "AppVilla"});
        expect(headingElement).toBeInTheDocument();
    })
})

