import axios from "axios";
import React, { useState } from "react";
import { updateLink } from '../redux/actions';
import { connect } from "react-redux";

function UploadFile(props) {
    const [file, setFile] = useState(null);
    var formData = new FormData();
    formData.append("file", file);
    const url = "http://dev.sohatv.vn/api/upload/upload-image";
    const onFileUpload = async() => {
        try{
            const data = await axios.post(url, formData, {
                headers: {
                    "x-ovp-token": "debug",
                }
            });
            const link = data.data.data.url;
            props.updateLink(props.id, link);
            alert("Upload Successfully")
        }
        catch(error) {
            console.log("file", error.response, error.message, error.request)
        }
    };

    return (
        <div>
            <p>Upload File:</p>
            <div>
                <input type="file" onChange={e => setFile(e.target.files[0])}/>
                <button onClick={() => onFileUpload()}>Upload</button>
            </div>

        </div>
    );
}

export default connect(
    null,
    { updateLink }
)(UploadFile);