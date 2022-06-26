import React from "react";
import { css } from "@emotion/react";
import LineIcon from "../Image/lines.png";

const Icon = () => <img css={styles} src={LineIcon} alt=''/>;

const styles = css`
  margin: 20px 0;
`;

export default Icon;
