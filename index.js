import fs from 'fs'
import path from 'path'
import superagent from 'superagent'
import mkdirp from 'mkdirp'
import { urltoFileName } from './utils.js'


export function spider (err, url){
    const filename = urltoFileName(url);
    //console.log(filenname)
}