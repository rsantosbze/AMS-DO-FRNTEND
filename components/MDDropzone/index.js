/**
=========================================================
* NextJS Material Dashboard 2 PRO - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useMemo, useCallback, createRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Dropzone styles
import "dropzone/dist/dropzone.css";
import Dropzone from 'react-dropzone'
import { useDropzone } from 'react-dropzone'

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDButton from "/components/MDButton";
import MDTypography from "/components/MDTypography";

// Custom styles for the MDDropzone
import MDDropzoneRoot from "/components/MDDropzone/MDDropzoneRoot";


// NextJS Material Dashboard 2 PRO context
import { useMaterialUIController } from "/context";

function MDDropzone({ setValues }) {
    const [controller] = useMaterialUIController();
    const { darkMode } = controller;

    // local state
    const [files, setFiles] = useState([])
    const [base64Files, setBase4Files] = useState([])
    const [isLaunchDisabled, setIsLaunchDisabled] = useState(true)
    let interFiles = [];

    // do something with the files after dropping
    const onDrop = useCallback((acceptedFiles) => {
        //console.log(acceptedFiles);
        interFiles.push(acceptedFiles);
        setIsLaunchDisabled(false)
        setFiles(prevState => [...prevState, acceptedFiles]);
        setValues(interFiles);
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()
            reader.onabort = () => //console.log('file reading was aborted')
                reader.onerror = () => //console.log('file reading has failed')
                    reader.onload = () => {
                        const base64Image = reader.result
                        setBase4Files((prevFiles) => [...prevFiles, base64Image])
                    }
            reader.readAsDataURL(file)
        });
        //   //console.log(files);
        //  setValues(files);
    }, [files])


    // when mutate gets clicked
    const onMutate = async () => {
        try {
            const result = await launchMutation({
                // assign required variables here
                variables: {
                    id: '5f2a75178cfb4f39e8f45bed',
                    logo: files[0] // change to 'files' for multiple upload
                }
            })
            if (result.data) {
                //console.log(result.data)
                alert('Check the //console')
            }
        } catch (err) {
            //console.log(err)
            alert('Check the //console for errors')
        }
    }

    const onClear = () => {
        setFiles([])
        setBase4Files([])
        setIsLaunchDisabled(true)
    }



    // dropzone hook
    const { getRootProps, getInputProps, isDragActive, isFocused,
        isDragAccept,
        isDragReject } = useDropzone({ onDrop, accept: { 'image/*': [] } });


    const baseStyle = {
        // flex: 1,
        // display: 'flex',
        // flexDirection: 'row',
        // alignItems: 'center',
        padding: '60px',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#eeeeee',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        outline: 'none',
        transition: 'border .24s ease-in-out'
    };

    const focusedStyle = {
        borderColor: '#2196f3'
    };

    const acceptStyle = {
        borderColor: '#00e676'
    };

    const rejectStyle = {
        borderColor: '#ff1744'
    };

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);



    return (

        <>
            <div {...getRootProps({ style })} >
                <input {...getInputProps()} />
                <MDTypography
                    component="label"
                    variant="h5"
                    fontWeight="bold"
                    color="text"
                >

                    {isDragActive ? (
                        "Drop the files here ..."
                    ) : (
                        "Drag 'n' drop some files here, or click to select files."
                    )}
                    {files.length > 0 && <div>{files.length} file(s) selected</div>}

                </MDTypography>
                {base64Files.length > 0 &&
                    base64Files.map((file, fileIndex) => (
                        <img key={fileIndex} src={file} alt={fileIndex} height="100" width="100" />
                    ))}
            </div>

            {isLaunchDisabled ? '' : <MDButton
                variant="gradient"
                color={isLaunchDisabled ? "dark" : "success"}
                onClick={onClear}
            >
                Clear All Images
            </MDButton>
            }

        </>






        // <MDDropzoneRoot
        //     // component="form"
        //     // action="http://localhost/graphql"
        //     // ref={dropzoneRef}
        //     //         className="form-control dropzone"
        //     {...getRootProps()}
        //     ownerState={{ darkMode }}
        // >
        //     <MDBox className="fallback" bgColor="transparent">
        //         {/* <MDBox component="input" name={name} value={value} type="file" multiple /> */}
        //         <MDBox    {...getInputProps()}><p>Drag 'n' drop some files here, or click to select files</p> </MDBox>
        //     </MDBox>
        // </MDDropzoneRoot>

    );
}

// Typechecking props for the MDDropzone
// MDDropzone.propTypes = {
//     options: PropTypes.objectOf(PropTypes.any).isRequired,
// };

export default MDDropzone;
