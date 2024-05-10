import React from "react";
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader,
  BulkCheckboxControl,
} from "react-bs-datatable";
import { Col, Row, Table } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

// Create table headers consisting of 4 columns.
const headers = [
  { title: "Username", prop: "username" },
  { title: "Name", prop: "realname" },
  { title: "Location", prop: "location" },
];

// Randomize data of the table columns.
// Note that the fields are all using the `prop` field of the headers.
const body = Array.from(new Array(57), () => {
  const rd = (Math.random() * 10).toFixed(1);

  if (rd > 0.5) {
    return {
      username: "i-am-billy",
      realname: `Billy ${rd}`,
      location: "Mars",
    };
  }

  return {
    username: "john-nhoj",
    realname: `John ${rd}`,
    location: "Saturn",
  };
});

export default function Tables() {
  return (
    <div className="container my-5">
      <div className="container">
        <h3>Stripped Bordered Table</h3>
        <Table striped bordered hover variant="dark" className="">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="container my-5">
        <h3>DataTable</h3>
        <DatatableWrapper
          body={body}
          headers={headers}
          paginationOptionsProps={{
            initialState: {
              rowsPerPage: 10,
              options: [5, 10, 15, 20],
            },
          }}
        >
          <Row className="mb-4">
            <Col
              xs={12}
              lg={4}
              className="d-flex flex-col justify-content-end align-items-end"
            >
              <Filter />
            </Col>
            <Col
              xs={12}
              sm={6}
              lg={4}
              className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
            >
              <PaginationOptions alwaysShowPagination />
            </Col>
            <Col
              xs={12}
              sm={6}
              lg={4}
              className="d-flex flex-col justify-content-end align-items-end"
            >
              <Pagination alwaysShowPagination paginationRange={3} />
            </Col>
            <Col xs={12} className="mt-2">
              <BulkCheckboxControl />
            </Col>
          </Row>
          <Table>
            <TableHeader />
            <TableBody />
          </Table>
        </DatatableWrapper>
      </div>
    </div>
  );
}
