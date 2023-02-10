import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileArrowDown} from '@fortawesome/free-solid-svg-icons';
import './gradient-button.styles.css';

import React, { useState } from "react";

const DownloadButton = ({ fileName, fileUrl }) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);

    const link = document.createElement("a");
    link.download = fileName;
    link.href = fileUrl;
    link.click();

    setDownloading(false);
  };

  return (
    <Button
        className='gradient-button black-outline'
        onClick={handleDownload} disabled={downloading}>
            {downloading ? "Downloading..." : "Download CV"}
        <FontAwesomeIcon className='ms-2' icon={faFileArrowDown} />
    </Button>
  );
};

export default DownloadButton;
