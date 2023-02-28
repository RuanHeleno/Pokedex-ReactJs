import { Container, Quantity, SelectQuantity } from "./styles";

const options = [
  { value: "30", label: "30" },
  { value: "60", label: "60" },
  { value: "90", label: "90" },
];

const optionsMobile = [
  { value: "10", label: "10" },
  { value: "20", label: "20" },
  { value: "30", label: "30" },
];

const Filter = (props) => {
  const { selectHandle } = props;

  const renderOptions =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? optionsMobile.map((item, id) => (
          <option key={id} value={item.value}>
            {item.label}
          </option>
        ))
      : options.map((item, id) => (
          <option key={id} value={item.value}>
            {item.label}
          </option>
        ));

  return (
    <Container>
      <Quantity>
        Quantidade:
        <SelectQuantity onChange={selectHandle}>{renderOptions}</SelectQuantity>
      </Quantity>
    </Container>
  );
};

export default Filter;
