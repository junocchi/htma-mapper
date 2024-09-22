import { useRef } from "react";

type Props = { handleFile: (file: unknown) => void };

export const UploadPdfButton = ({ handleFile }: Props) => {
  // Create a reference to the hidden file input element
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <button
        className="button-upload"
        onClick={() => {
          if (inputRef?.current) {
            inputRef.current.click();
          }
        }}
      >
        Upload a file
      </button>
      <input
        type="file"
        onChange={async (event) => {
          const files = event.target.files;

          await handleFile(files);
        }}
        ref={inputRef}
        style={{ display: "none" }} // Make the file input element invisible
      />
    </>
  );
};
