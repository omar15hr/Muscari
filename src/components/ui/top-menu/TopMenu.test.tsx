import { render, screen } from "@testing-library/react";
import { TopMenu } from "./TopMenu";


describe("TopMenu component", () => {
  
  test("renders logo", () => {
    render(<TopMenu />);
    const logoElement = screen.getByAltText("muscari-logo");
    expect(logoElement).toBeInTheDocument();
  });

  test("renders menu links", () => {
    render(<TopMenu />);
    const hombresLink = screen.getByText("Hombres");
    const mujeresLink = screen.getByText("Mujeres");
    const niñosLink = screen.getByText("Niños");
    expect(hombresLink).toBeInTheDocument();
    expect(mujeresLink).toBeInTheDocument();
    expect(niñosLink).toBeInTheDocument();
  });

  test("renders contact, cart, and search icons", () => {
    render(<TopMenu />);
    const mailIcon = screen.getByLabelText("Mail Icon");
    expect(mailIcon).toBeInTheDocument();
    const cartIcon = screen.getByLabelText("Cart Icon");
    expect(cartIcon).toBeInTheDocument();
  });

});
