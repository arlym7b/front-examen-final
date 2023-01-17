import React, { Component } from "react";
import { Button } from "@mui/material";


class Cloudinary extends Component {
  componentDidMount() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dimijdzlc",
        uploadPreset: "examen2IWeb",
        sources: ["local", "url"],
        resourceType: "image",

      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          this.props.func(result.info.secure_url);
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }

  render() {
    return (
      <Button id="upload_widget" className="cloudinary-button" variant="contained" color={this.props.color}>
        Subir Imágenes *
      </Button>
    );
  }
}

export default Cloudinary;
