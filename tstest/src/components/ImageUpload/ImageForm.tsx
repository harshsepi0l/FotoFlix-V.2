import React, { createElement, useState, useEffect } from 'react';
/** A form for uploading an image (a foto!!)
 * @author Madeline Schroeder
 * @returns 
 * @version 11.6.22
 * 
 *  Steps:
 *  User is logged in
 *  User clicks choose file button
 *  User Enters information about the image such as title description etc.
 *  
 */


// This is what shows up on the page when <ImageForm /> is used.
export function ImageForm(): JSX.Element {
    return (
        <div>
            <h1>Upload your image to fotoflix!</h1>
            <div className="form">
                <label>Upload an image: </label>
                <input
                type="file"
                name="image"
                onChange={(e) => {
                    //
                }}
                />

                <label>Title your image:</label>
                <input
                type="text"
                name="title"
                onChange={(e) => {
                    //
                }}
                />

                <label>Describe your image:</label>
                <input
                type="text"
                name="description"
                />

                <label>Is this image public or private?</label>
                <select>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
            </div>
        </div>
    )
}
