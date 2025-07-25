"use client"
import React, { useState } from 'react'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { formatSize } from '../lib/utils'

interface FileUploaderProps {
    onFileSelect?: (file: File | null) => void
}

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
    
    const onDrop = useCallback((acceptedFiles: File[]) => {
       const file = acceptedFiles[0] || null

       onFileSelect?.(file);
       
    }, [onFileSelect])

    const MAX_FILE_SIZE = 20 * 1024 * 1024;
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf']
        },
        maxFiles: 1,
        maxSize: MAX_FILE_SIZE,
    })

    const file = acceptedFiles[0] || null;


  return (
    <div className='w-full gradient-border'>
        <div {...getRootProps()} className='w-full h-full flex flex-col items-center justify-center'>
            <input {...getInputProps()} />
            <div className='space-y-4 cursor-pointer'>
                
                {
                    file ? (
                        <div className="uploader-selected-file" onClick={(e) => {
                            e.stopPropagation();
                        }}>
                            <img src="/images/pdf.png" alt="pdf" className="size-10"/>
                            <div className="flex items-center space-x-3">
                                <div>
                                    <p className='text-sm text-gray-700 font-medium truncate max-w-sm'>
                                        {file.name}
                                    </p>
                                    <p className='text-sm text-gray-500'>
                                        {formatSize(file.size)}
                                    </p>
                                </div>
                            </div>
                            <button className='p-2 cursor-pointer' onClick={(e) => {
                                onFileSelect?.(null);
                            }}>
                                <img src="/icons/cross.svg" alt='remove' className='w-4 h-4'/>
                            </button>
                        </div>
                        
                    ):(
                        <div>
                            <div className='mx-auto w-16 h-16 flex items-center justify-center mb-2'>
                                <img src="/icons/info.svg" alt="upload" className='size-20' />
                            </div>
                            <p className='text-lg text-gray-500'>
                                <span className='font-semibold'>
                                    Click to upload
                                </span> or drag and drop
                            </p>
                            <p className='text-lg text-gray-500'>
                                PDF (max. {formatSize(MAX_FILE_SIZE)})
                            </p>
                        </div>

                    )
                }
            </div>
        </div>
    </div>
  )
}

export default FileUploader