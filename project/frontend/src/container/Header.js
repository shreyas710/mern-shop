import React,{useState,useContext} from 'react'
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
    CDropdownDivider
  } from '@coreui/react'
import './Header.css'
import { CIcon } from '@coreui/icons-react';
import { cifAU } from '@coreui/icons';
import {SidebarContext} from '../contexts/sidebarContext'

const Header = () => {
    const {show,changeState} = useContext(SidebarContext)
    const toggleSidebar = () => {
        changeState(show ===  'responsive' ? false : 'responsive');
        console.log(show);
    }
    
    return (
            <header  style={{width:"100%",height:"70px",display:"flex",flexDirection:"row"}}>
                <CToggler
                    inHeader
                    className="ml-md-3 d-lg-none"
                    onClick={toggleSidebar}
                />
                <CToggler
                    inHeader
                    className="ml-3 d-md-down-none"
                    onClick={toggleSidebar}
                />
                <CHeaderBrand className="mx-auto d-lg-none" to="/" style={{justifyContent:"flex-start"}}>
                    <CIcon name="logo" height="48" alt="Logo"/>
                </CHeaderBrand>
                <form style={{justifyContent:"flex-end"}}>
                    <CFormGroup row>
                    <CCol xs="12" md="9">
                        <CInput type="email" id="email-input" name="email-input" placeholder="Search your product..." autoComplete="email" style={{"width":"500px","marginTop":"15px","margin-left":"10px"}}/>
                    </CCol>
                    <button type="submit" text="Search" style={{"width":"60px","marginTop":"15px","margin-left":"60px"}}>Search</button>
                    {/* <CButton type="button" color="primary"><CIcon name="cil-magnifying-glass" /> Search</CButton> */}
                    </CFormGroup>
                    {/* <input type="text" placeholder="Search a product..." name="item" /> */}
                </form>
                <CDropdown className="m-1" style={{justifyContent:"flex-end"}}>
                    <CDropdownToggle color="info">
                        Customer Login
                    </CDropdownToggle>
                    <CDropdownMenu>
                        <CForm className="px-4 py-3" >
                        <CFormGroup>
                            <CLabel htmlFor="exampleDropdownFormEmail1">Email address</CLabel>
                            <CInput className="form-control" id="exampleDropdownFormEmail1" type="email" placeholder="email@example.com" autoComplete="email"/>
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="exampleDropdownFormPassword1">Password</CLabel>
                            <CInput className="form-control" id="exampleDropdownFormPassword1" type="password" placeholder="Password" autoComplete="current-password"/>
                        </CFormGroup>
                        <CFormGroup variant="custom-checkbox" className="form-group">
                            <CInputCheckbox custom id="exampleDropdownFormCheckbox1" />
                            <CLabel variant="custom-checkbox" htmlFor="exampleDropdownFormCheckbox1">Remember me</CLabel>
                        </CFormGroup>
                        <CFormGroup className="mt-2">
                            <CButton color="primary" type="submit">Sign in</CButton>
                        </CFormGroup>
                        </CForm>
                        <CDropdownDivider/>
                        <CDropdownItem to="/register" >Register</CDropdownItem>
                        <CDropdownItem>Forgot password?</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
                <CDropdown className="m-1" >
                    <CDropdownToggle color="info">
                        Shopkeeper Login
                    </CDropdownToggle>
                    <CDropdownMenu>
                        <CForm className="px-4 py-3" >
                        <CFormGroup>
                            <CLabel htmlFor="exampleDropdownFormEmail1">Email address</CLabel>
                            <CInput className="form-control" id="exampleDropdownFormEmail1" type="email" placeholder="email@example.com" autoComplete="email"/>
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="exampleDropdownFormPassword1">Password</CLabel>
                            <CInput className="form-control" id="exampleDropdownFormPassword1" type="password" placeholder="Password" autoComplete="current-password"/>
                        </CFormGroup>
                        <CFormGroup variant="custom-checkbox" className="form-group">
                            <CInputCheckbox custom id="exampleDropdownFormCheckbox1" />
                            <CLabel variant="custom-checkbox" htmlFor="exampleDropdownFormCheckbox1">Remember me</CLabel>
                        </CFormGroup>
                        <CFormGroup className="mt-2">
                            <CButton color="primary" type="submit">Sign in</CButton>
                        </CFormGroup>
                        </CForm>
                        <CDropdownDivider/>
                        <CDropdownItem to="/register" >Register</CDropdownItem>
                        <CDropdownItem>Forgot password?</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
            </header>
    )
}

export default Header
