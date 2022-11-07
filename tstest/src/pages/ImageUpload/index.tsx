import React, { useState, useEffect } from "react"; // Importing things for React
import "./ImageUpload.css"; // Import the css for this page
import Axios from "axios"; // Importing Axios
import { ImageForm } from "../../components/ImageUpload/ImageForm"; // This shouldn't be an error but it is!!

// Image uploading page
/** A page for a logged-in user to upload an image to the website.
 * @author Madeline Schroeder
 * @returns 
 * @version 11.6.22
 */

// The code for the image uploading page
export const ImageUpload = () => {
    return (
        <div>
            <h1>Upload an Image!</h1>
            <ImageForm />
        </div>
    );
}