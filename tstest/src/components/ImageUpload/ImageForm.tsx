import React, { createElement, useState } from 'react';
/** A form for uploading an image (a foto!!)
 * @author Madeline Schroeder
 * @returns 
 * @version 11.6.22
 * 
 *  Tutorials:
 *  
 */


// This is what shows up on the page when <ImageForm /> is used.
export function ImageForm(): JSX.Element {
    return (
        <div>
            <h1>Upload your image to fotoflix!</h1>
            <form>
                <input type="file" name="foto"></input>
                <button>Upload</button>
            </form>
        </div>
    )
}
