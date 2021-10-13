import { memo } from "react";
import { useDate } from "../../../hooks/useDate";
import { DateStyle, HeaderWrapper } from "./style";

const Header = () => {
  const { year, month, day } = useDate();

  return (
    <>
      <HeaderWrapper>Today</HeaderWrapper>
      <DateStyle>{`${month} ${day}, ${year}`}</DateStyle>
    </>
  );
};

export default memo(Header);
