import Item from "./item.component";
import renderer from "react-test-renderer";

const _product = {
  title: "title",
  name: "Gerald Olumide",
  image: "https://i.ibb.co/h7Bts6w/Imagelaptop.png",
  bid: "₦795,000",
};

const {name} = _product;

const nickNameArr = name.split(" ");
const nickname = `${nickNameArr[0][0]}${nickNameArr[1][0]}`; 

const mockProps = {
  product: _product,
};

describe("Product", () => {
  it("renders a snapshot of <Item /> when passed into a component", () => {
    const product = renderer.create(<Item {...mockProps} />).toJSON();

    expect(product).toMatchSnapshot();
  });
});
