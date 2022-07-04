// import { jsx, css } from "@emotion/core";
import { css } from "@emotion/react";
import React, { useState } from "react";

const Table = ({ day }) => {
  return (
    <table className="Table">
      <tbody>
        <tr>
          <td>Fitness Class</td>
          <td>
          {/* className={day === "Monday" ? "" : "hidden"} */}
            <span >
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
          {/* className={day === "Tuesday" ? "" : "hidden"} */}
            <span >
              2:00PM - 3:30PM
            </span>
          </td>
          <td>William G. Stewart</td>
        </tr>
        <tr>
          <td>Muscle Training</td>
          <td>
          {/* className={day === "Friday" ? "" : "hidden"} */}
            <span>
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
          {/* className={day === "Thursday" ? "" : "hidden"} */}
            <span>
              2:00PM - 3:30PM
            </span>
          </td>
          <td>Boyd C. Harris</td>
        </tr>
        <tr>
          <td>Body Building </td>
          <td>
          {/* className={day === "Tuesday" ? "" : "hidden"} */}
            <span>
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
          {/* className={day === "Monday" ? "" : "hidden"} */}
            <span >
              2:00PM - 3:30PM
            </span>
          </td>
          <td>Boyd C. Harris</td>
        </tr>
        <tr>
          <td>Yoga Training Class </td>
          <td>
            <span >
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span >
              2:00PM - 3:30PM
            </span>
          </td>
          <td>Hector T. Daigle</td>
        </tr>
        <tr>
          <td>Advanced Training </td>
          <td>
            <span>
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span >
              2:00PM - 3:30PM
            </span>
          </td>
          <td>Bret D. Bowers</td>
        </tr>
      </tbody>
    </table>
  );
};

const styles = css`
  td,
  th {
    border: 1px solid #fff;
    border-collapse: collapse;
  }
  tr {
    td {
      padding: 40px 0;
      width: 200px;
      span {
        opacity: 1;
        transition: opacity 900ms ease-in-out;
      }
    }
  }
  .hidden {
    opacity: 0;
  }
  @media (max-width: 640px) {
    font-size: 12px;
    tr {
      td {
        padding: 40px 0;
        width: 200px;
        span {
          font-size: 11px;
        }
      }
    }
  }
`;

export default Table;
