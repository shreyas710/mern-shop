import React, { useState, useContext } from "react";
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch,
  CDropdownDivider,
} from "@coreui/react";
import "./Header.css";
import { CIcon } from "@coreui/icons-react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { SidebarContext } from "../contexts/sidebarContext";

const Header = () => {
  const { show, changeState } = useContext(SidebarContext);
  const toggleSidebar = () => {
    changeState(show === "responsive" ? false : "responsive");
    console.log(show);
    var x = document.getElementById("loginDisp");
    if (show === "responsive") {
      setTimeout(() => {
        x.style.display = "inherit";
      }, 300);
    } else {
      x.style.display = "none";
    }
  };

  return (
    <CHeader
      style={{
        width: "100%",
        height: "70px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />

      {/* <img src="#" alt="shop" /> */}

      <form>
        <CFormGroup row>
          <CCol xs="12" md="9" style={{ display: "inherit" }}>
            <CInput
              type="email"
              id="email-input"
              name="email-input"
              placeholder="Search your product..."
              autoComplete="email"
              style={{
                width: "600px",
                marginTop: "18px",
                marginLeft: "10px",
              }}
            />
            <button
              type="submit"
              text="Search"
              style={{
                height: "35px",
                width: "50px",
                marginTop: "18px",
                marginLeft: "-40px",
              }}
            >
              <SearchIcon />
            </button>
          </CCol>
        </CFormGroup>
      </form>
      <ShoppingCartIcon style={{ marginTop: "20px", marginLeft: "350px" }} />
      <div style={{ display: "inherit" }} id="loginDisp">
        <CDropdown style={{ marginTop: "15px", marginLeft: "30px" }}>
          <CDropdownToggle color="info">Customer Login</CDropdownToggle>
          <CDropdownMenu>
            <CForm className="px-4 py-3">
              <CFormGroup>
                <CLabel htmlFor="exampleDropdownFormEmail1">
                  Email address
                </CLabel>
                <CInput
                  className="form-control"
                  id="exampleDropdownFormEmail1"
                  type="email"
                  placeholder="email@example.com"
                  autoComplete="email"
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="exampleDropdownFormPassword1">Password</CLabel>
                <CInput
                  className="form-control"
                  id="exampleDropdownFormPassword1"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
              </CFormGroup>
              <CFormGroup variant="custom-checkbox" className="form-group">
                <CInputCheckbox custom id="exampleDropdownFormCheckbox1" />
                <CLabel
                  variant="custom-checkbox"
                  htmlFor="exampleDropdownFormCheckbox1"
                >
                  Remember me
                </CLabel>
              </CFormGroup>
              <CFormGroup className="mt-2">
                <CButton color="primary" type="submit">
                  Sign in
                </CButton>
              </CFormGroup>
            </CForm>
            <CDropdownDivider />
            <CDropdownItem to="/register">Register</CDropdownItem>
            <CDropdownItem>Forgot password?</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <CDropdown style={{ marginTop: "15px", marginLeft: "30px" }}>
          <CDropdownToggle color="info">Shopkeeper Login</CDropdownToggle>
          <CDropdownMenu>
            <CForm className="px-4 py-3">
              <CFormGroup>
                <CLabel htmlFor="exampleDropdownFormEmail1">
                  Email address
                </CLabel>
                <CInput
                  className="form-control"
                  id="exampleDropdownFormEmail1"
                  type="email"
                  placeholder="email@example.com"
                  autoComplete="email"
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="exampleDropdownFormPassword1">Password</CLabel>
                <CInput
                  className="form-control"
                  id="exampleDropdownFormPassword1"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
              </CFormGroup>
              <CFormGroup variant="custom-checkbox" className="form-group">
                <CInputCheckbox custom id="exampleDropdownFormCheckbox1" />
                <CLabel
                  variant="custom-checkbox"
                  htmlFor="exampleDropdownFormCheckbox1"
                >
                  Remember me
                </CLabel>
              </CFormGroup>
              <CFormGroup className="mt-2">
                <CButton color="primary" type="submit">
                  Sign in
                </CButton>
              </CFormGroup>
            </CForm>
            <CDropdownDivider />
            <CDropdownItem to="/register">Register</CDropdownItem>
            <CDropdownItem>Forgot password?</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>
    </CHeader>
  );
};

export default Header;
