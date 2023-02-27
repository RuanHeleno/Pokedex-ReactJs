import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import { Button, Container, Number } from "./styles";

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;

  return (
    <Container>
      <Button onClick={onLeftClick}>
        <BiLeftArrowAlt />
      </Button>

      <Number>
        {page}/{totalPages}
      </Number>

      <Button onClick={onRightClick}>
        <BiRightArrowAlt />
      </Button>
    </Container>
  );
};

export default Pagination;
