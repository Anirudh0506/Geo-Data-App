import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import PropTypes from "prop-types";

const FileUpload = ({ onFileUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          const fileContent = reader.result;
          onFileUpload(fileContent);
        };
        reader.readAsText(file);
      });
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      style={{
        border: "2px dashed #ccc",
        textAlign: "center",
        width: "90%",
        margin: "auto",
        height: "60px",
        marginBottom: "12px",
      }}
    >
      <input {...getInputProps()} />
      <p>Drag & drop GeoJSON or KML files here, or click to select files</p>
    </div>
  );
};
FileUpload.propTypes = {
  onFileUpload: PropTypes.func.isRequired,
};
export default FileUpload;